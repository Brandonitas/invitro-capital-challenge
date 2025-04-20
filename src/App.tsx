import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import HomePage from './components/home/HomePage';
import AppointmentsPage from './components/appointments/AppointmentsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </Router>
  )
}

export default App
