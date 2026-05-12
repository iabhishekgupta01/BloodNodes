
import './App.css';
import './theme.css';
import HomePage from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import DonationCamps from './pages/DonationCamps.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import CreateBloodRequest from './pages/hospital/CreateBloodRequest.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateBloodRequest from './pages/hospital/UpdateBloodRequest.jsx';
import CreateDonationCamp from './pages/hospital/CreateDonationCamp.jsx';
import UpdateCampInfo from './pages/hospital/UpdateCampInfo.jsx';

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/camps" element={<DonationCamps />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/hospitals/create-blood-request" element={<CreateBloodRequest />} />
      <Route path="/hospitals/edit-blood-request" element={<UpdateBloodRequest />} />
      <Route path="/hospitals/organize-camp" element={<CreateDonationCamp/>} />
      <Route path="/hospitals/update-camp" element={<UpdateCampInfo/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      
    </Routes>

    
    </>
  )
}

export default App
