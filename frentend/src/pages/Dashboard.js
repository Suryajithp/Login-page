import React from 'react'
import Navbar from '../components/AdminNavbar'
import Usertable from '../components/Usertable'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 h-screen overflow-hidden'>
      <Navbar/>
      <Usertable/>
    </div>
  )
}

export default Dashboard