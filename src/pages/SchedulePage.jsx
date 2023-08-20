import React from 'react'
import '../App.css'
import LeftSide from '../components/LeftSide'
import Schedule from '../components/Schedule'
const SchedulePage = () => {
  return (
    <div className='dashboard'>
        <LeftSide />
        <Schedule />
    </div>
  )
}

export default SchedulePage

