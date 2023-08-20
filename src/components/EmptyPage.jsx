import React from 'react'
import Navbar from './Navbar'

const EmptyPage = () => {
  return (
    <div className='right-side'>
      <Navbar />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
        <h1 style={{color:'#C8C6C6'}}>No Data here!!</h1>
      </div>
    </div>
  )
}

export default EmptyPage

