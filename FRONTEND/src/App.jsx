
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
          <Route
            path="profile"
            element={
              <AccountPage
                eyebrow="User Profile"
                title="Your BloodNode Profile"
                description="Review your donor details, manage your account information, and jump back into the parts of BloodNode you use most."
                primaryAction={{ label: 'Donation History', to: '/user/donation-history' }}
                secondaryAction={{ label: 'Dashboard', to: '/user/dashboard' }}
                quickLinks={[
                  {
                    label: 'Dashboard',
                    description: 'Return to your personal overview and latest activity.',
                    to: '/user/dashboard',
                  },
                  {
                    label: 'Notifications',
                    description: 'Open the newest alerts and request updates.',
                    to: '/user/notifications',
                  },
                ]}
              />
            }
          />
          <Route
            path="settings"
            element={
              <AccountPage
                eyebrow="User Settings"
                title="Account Preferences"
                description="Adjust your account preferences and revisit the areas of BloodNode that keep your donation workflow moving."
                primaryAction={{ label: 'Dashboard', to: '/user/dashboard' }}
                secondaryAction={{ label: 'Donation History', to: '/user/donation-history' }}
                quickLinks={[
                  {
                    label: 'Dashboard',
                    description: 'Return to your live user dashboard.',
                    to: '/user/dashboard',
                  },
                  {
                    label: 'Notifications',
                    description: 'Check the latest request and donation updates.',
                    to: '/user/notifications',
                  },
                ]}
              />
            }
          />

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
            <Route path="edit/:id" element={<UpdateBloodRequest />} />
            <Route path=":id" element={<HospitalBloodRequestDetails />} />

          </Route>


          {/* Donation Camps */}
          <Route path="camps">
            <Route index element={<HospitalCampDetails />} />
            <Route path="create" element={<CreateDonationCamp />} />
            <Route path="edit/:id" element={<UpdateCampInfo />} />
            <Route path=":id" element={<HospitalCampDetails />} />
          </Route>

          <Route path="inventory" element={<HospitalInventoryUpdate />} />
          <Route path="notifications" element={<HosNotification />} />
          <Route
            path="profile"
            element={
              <AccountPage
                eyebrow="Hospital Profile"
                title="Hospital Account Overview"
                description="Review your hospital workspace, verify key details, and jump to the operational areas that keep requests, camps, and inventory in sync."
                primaryAction={{ label: 'Blood Requests', to: '/hospital/blood-requests' }}
                secondaryAction={{ label: 'Inventory', to: '/hospital/inventory' }}
                quickLinks={[
                  {
                    label: 'Blood Requests',
                    description: 'Open the hospital request queue and request details.',
                    to: '/hospital/blood-requests',
                  },
                  {
                    label: 'Inventory',
                    description: 'Review and update blood stock levels.',
                    to: '/hospital/inventory',
                  },
                  {
                    label: 'Notifications',
                    description: 'See the latest hospital alerts and donor responses.',
                    to: '/hospital/notifications',
                  },
                ]}
              />
            }
          />
          <Route
            path="settings"
            element={
              <AccountPage
                eyebrow="Hospital Settings"
                title="Hospital Preferences"
                description="Manage the routes that matter most to your team, from blood requests to inventory and live notifications."
                primaryAction={{ label: 'Notifications', to: '/hospital/notifications' }}
                secondaryAction={{ label: 'Dashboard', to: '/hospital/dashboard' }}
                quickLinks={[
                  {
                    label: 'Dashboard',
                    description: 'Go back to the hospital overview screen.',
                    to: '/hospital/dashboard',
                  },
                  {
                    label: 'Blood Requests',
                    description: 'Handle active and archived request workflows.',
                    to: '/hospital/blood-requests',
                  },
                  {
                    label: 'Inventory',
                    description: 'Jump straight into stock updates.',
                    to: '/hospital/inventory',
                  },
                ]}
              />
            }
          />

        </Route>


        <Route path="*" element={<NotFound />} />

      </Routes>


    </>
  )
}

export default App
