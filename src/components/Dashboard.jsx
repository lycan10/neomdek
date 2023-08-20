import React from 'react'
import '../App.css'
import EmptyPage from './EmptyPage'
import LeftSide from './LeftSide'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <LeftSide />
        <EmptyPage />
    </div>
  )
}

export default Dashboard
