const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const SYSTEM_PROMPT = `You extract structured event details from Discord event announcement messages posted by a university club (IDEAS Club at SJSU).

Return ONLY a JSON object with these exact keys (no markdown, no commentary):
{
  "isEvent": boolean,       // false if this message is not actually an event announcement
  "title": string,          // short event title, no emoji
  "location": string,
  "date": string,           // YYYY-MM-DD format, resolved using the "today" date given below
  "startTime": string,      // e.g. "4:00 PM"
  "endTime": string,        // e.g. "6:00 PM", empty string if not given
  "description": string     // 1-3 sentence plain-text summary of the event body text
}

Rules:
- Resolve relative/partial dates (e.g. "Wednesday, October 7th") to a full YYYY-MM-DD date. Assume the next upcoming occurrence of that weekday/date relative to "today".
- If the message is not an event announcement (e.g. casual chat, a question, a non-event update), set "isEvent": false and leave other fields as empty strings.
- If a field truly cannot be determined, use an empty string rather than guessing.`;

export async function extractEvent({ apiKey, model, messageText, today }) {
  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Today's date is ${today} (YYYY-MM-DD).\n\nMessage:\n"""\n${messageText}\n"""` },
      ],
      response_format: { type: 'json_object' },
      temperature: 0,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenRouter request failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error('OpenRouter response had no content');

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Failed to parse model output as JSON: ${raw}`);
  }

  return parsed;
}
