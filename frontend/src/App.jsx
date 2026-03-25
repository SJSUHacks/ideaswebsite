import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SJHacksPage from './pages/SJHacksPage';
import SVICPage from './pages/SVICPage';
import SVBPCPage from './pages/SVBPCPage';
import ZinnstarterPage from './pages/ZinnstarterPage';
import MissionPage from './pages/MissionPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs/sjhacks" element={<SJHacksPage />} />
        <Route path="/programs/svic" element={<SVICPage />} />
        <Route path="/programs/svbpc" element={<SVBPCPage />} />
        <Route path="/programs/zinnstarter" element={<ZinnstarterPage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
