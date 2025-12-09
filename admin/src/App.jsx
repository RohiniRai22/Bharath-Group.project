import React, { useContext } from 'react'
import { ServiceContext } from './context/ServiceContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddService from './pages/Admin/AddService';
import ServicesList from './pages/Admin/ServicesList';
import Login from './pages/Login';
import ServiceAppointments from './pages/Service/ServiceAppointments';
import ServiceDashboard from './pages/Service/ServiceDashboard';
import ServiceProfile from './pages/Service/ServiceProfile';

const App = () => {

  const { dToken } = useContext(ServiceContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-service' element={<AddService />} />
          <Route path='/service-list' element={<ServicesList />} />
          <Route path='/service-dashboard' element={<ServiceDashboard />} />
          <Route path='/service-appointments' element={<ServiceAppointments />} />
          <Route path='/service-profile' element={<ServiceProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App