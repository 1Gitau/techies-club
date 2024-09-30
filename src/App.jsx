
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/Home/HomePage';
import EventsPage from './pages/Events/EventsPage';
import LeadershipPage from './pages/leadershipPage/leadershipPage';
import './App.css'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/events" element={<EventsPage/>} />
      <Route path="/leadership" element={<LeadershipPage/>}/>
    </Routes >
    </BrowserRouter> 
    <Footer/>
   
    </>
  );
}
export default App;
