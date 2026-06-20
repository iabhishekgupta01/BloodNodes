
import './App.css';
import './theme.css';
import HomePage from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Outlet } from 'react-router-dom';

import DonationCamps from './pages/DonationCamps.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import CreateBloodRequest from './pages/hospital/CreateBloodRequest.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateBloodRequest from './pages/hospital/UpdateBloodRequest.jsx';
import CreateDonationCamp from './pages/hospital/CreateDonationCamp.jsx';
import UpdateCampInfo from './pages/hospital/UpdateCampInfo.jsx';
import HospitalCampDetails from './pages/hospital/camp/HospitalCampDetails.jsx';
import HospitalBloodRequestDetails from './pages/hospital/HospitalBloodRequestDetails.jsx';
import HospitalBloodRequests from './pages/hospital/camp/HospitalBloodRequest.jsx';
import HospitalInventoryUpdate from './pages/hospital/HospitalInventoryUpdate.jsx';
import HosNotification from './pages/hospital/HosNotification.jsx';
import AccountPage from './pages/AccountPage.jsx';
import UserNotify from './pages/user/UserNotify.jsx';
import UserBloodRequest from './pages/user/UserBloodRequest.jsx';
import UserDonationHistory from './pages/user/userDonationHistory.jsx';
import NotFound from './pages/NotFound.jsx';
import HospitalDashboard from './pages/hospital/HospitalDashboard.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';


function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/camps" element={<DonationCamps />} />
        <Route path="/camps/:id" element={<HospitalCampDetails/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="/user"
          element={
            <ProtectedRoute requiredRole="user">
              <Outlet />
            </ProtectedRoute>}>

          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="notifications" element={<UserNotify />} />
          <Route path="blood-requests/:id" element={<UserBloodRequest />} />
          <Route path="donation-history" element={<UserDonationHistory />} />
          

        </Route>

        <Route path="/hospital"
          element={<ProtectedRoute requiredRole="hospital">

            <Outlet />
          </ProtectedRoute>}>

          <Route path="dashboard"
            element={

              <HospitalDashboard />
            } />


          {/* Blood Requests */}
          <Route path="blood-requests">

            <Route index element={<HospitalBloodRequests />} />
            <Route path="create" element={<CreateBloodRequest />} />
            <Route path=":id/edit" element={<UpdateBloodRequest />} />
            <Route path=":id" element={<HospitalBloodRequestDetails />} />

          </Route>


          {/* Donation Camps */}
          <Route path="camps">
            <Route index element={<HospitalCampDetails />} />
            <Route path="create" element={<CreateDonationCamp />} />
            <Route path=":id/edit" element={<UpdateCampInfo />} />
            <Route path=":id" element={<HospitalCampDetails />} />
          </Route>

          <Route path="inventory" element={<HospitalInventoryUpdate />} />
          <Route path="notifications" element={<HosNotification />} />
          
          

        </Route>


        <Route path="*" element={<NotFound />} />

      </Routes>


    </>
  )
}

export default App
