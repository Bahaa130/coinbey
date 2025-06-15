import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Daily from './screens/Daily';
import Earn from './screens/Earn';
import Referrals from './screens/Referrals';
import AirDrop from './screens/AirDrop';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <BottomNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/Referrals" element={<Referrals />} />
        <Route path="/airdrop" element={<AirDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
