import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/notification.png'
import icon2 from '../assets/setting.png'
import icon3 from '../assets/help.png'
import logo from '../assets/logo.png'
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-search'> 
        <BiSearch style={{fontSize: '23px'}} />
        <input placeholder='Search'></input>
    </div>
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center' }}>
        <div className='notify'>
            <img src={icon1} />
            <a href='/'>Notification</a>
        </div>
        <div className='notify'>
            <img src={icon2} />
            <a href='/'>Tools</a>
        </div>
        <div className='notify'>
            <img src={icon3} />
            <Link to='/documentation'>Helps</Link>
        </div>
        <div className='notify-logo'>
            <img src={logo} />
        </div>
    </div>
  </div>
  )
}

export default Navbar
