import 'dotenv/config';
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { extractEvent } from './lib/extractEvent.js';
import { EventSheet } from './lib/sheets.js';

const {
  DISCORD_BOT_TOKEN,
  DISCORD_CHANNEL_ID,
  OPENROUTER_API_KEY,
  OPENROUTER_MODEL,
  GOOGLE_SERVICE_ACCOUNT_JSON,
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_NAME,
} = process.env;

for (const [name, value] of Object.entries({
  DISCORD_BOT_TOKEN, DISCORD_CHANNEL_ID, OPENROUTER_API_KEY, OPENROUTER_MODEL,
  GOOGLE_SERVICE_ACCOUNT_JSON, GOOGLE_SHEET_ID,
})) {
  if (!value) throw new Error(`Missing required env var: ${name}`);
}

const EVENT_HINT_PATTERN = /[\u{1F4C5}\u{1F4CD}\u{1F4CC}]/u; // 📅 📍 📌

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function looksLikeEventMessage(content) {
  return EVENT_HINT_PATTERN.test(content) && content.length > 20;
}

async function handleAnnouncement(message, sheet) {
  const content = message.content?.trim();
  if (!content || !looksLikeEventMessage(content)) return;

  let extracted;
  try {
    extracted = await extractEvent({
      apiKey: OPENROUTER_API_KEY,
      model: OPENROUTER_MODEL,
      messageText: content,
      today: todayISO(),
    });
  } catch (err) {
    console.error(`[extract] failed for message ${message.id}:`, err.message);
    await message.react('⚠️').catch(() => {});
    return;
  }

  if (!extracted.isEvent || !extracted.date || !extracted.title) {
    console.log(`[skip] message ${message.id} not recognized as an event`);
    return;
  }

  const event = { ...extracted, messageId: message.id };

  try {
    const updated = await sheet.updateEventByMessageId(message.id, event);
    if (!updated) await sheet.appendEvent(event);
    await message.react('✅').catch(() => {});
    console.log(`[published] "${event.title}" on ${event.date} (message ${message.id})`);
  } catch (err) {
    console.error(`[sheet] failed to write event for message ${message.id}:`, err.message);
    await message.react('❌').catch(() => {});
  }
}

async function main() {
  const sheet = new EventSheet({
    credentialsJson: GOOGLE_SERVICE_ACCOUNT_JSON,
    spreadsheetId: GOOGLE_SHEET_ID,
    sheetName: GOOGLE_SHEET_NAME,
  });
  await sheet.init();

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Message, Partials.Channel],
  });

  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}, watching channel ${DISCORD_CHANNEL_ID}`);
  });

  client.on('messageCreate', message => {
    if (message.channelId !== DISCORD_CHANNEL_ID || message.author.bot) return;
    handleAnnouncement(message, sheet);
  });

  client.on('messageUpdate', (_old, newMessage) => {
    if (newMessage.channelId !== DISCORD_CHANNEL_ID || newMessage.author?.bot) return;
    handleAnnouncement(newMessage, sheet);
  });

  client.on('messageDelete', async message => {
    if (message.channelId !== DISCORD_CHANNEL_ID) return;
    try {
      const removed = await sheet.deleteEventByMessageId(message.id);
      if (removed) console.log(`[removed] event for deleted message ${message.id}`);
    } catch (err) {
      console.error(`[sheet] failed to remove event for message ${message.id}:`, err.message);
    }
  });

  await client.login(DISCORD_BOT_TOKEN);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
