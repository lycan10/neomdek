import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillHome } from "react-icons/ai";
import {FaRegUser} from "react-icons/fa";
import { Link } from 'react-router-dom';
const LeftSide = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleResize = (event) => {
    const newWidth = event.clientX;
    setSidebarWidth(newWidth);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="resizable-sidebar">
      <div className="sidebar" style={{ width: sidebarWidth }}>
        <div className='l-s'>
            <div className='l-s-top' onClick={toggleDropdown}>
                <div className='l-s-top-image'>
                <FaRegUser style={{width:'70', height: '70', color: 'gray'}}/>
                </div>
                <h1>Kemi Tunde</h1>
                <p>Admin</p>
                {isDropdownOpen && (
              <div className="dropdown-content" >
                {/* Dropdown content */}
                <a href="#">Profile</a>
                <a href="#">Logout</a>
              </div>
            )}
            </div>
            <div className='l-s-bottom'  style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <AiFillHome  style={{width:'35', height: '30', color: '#f3f3f3', marginRight: '0.5rem'}} />
               <Link to='/'> <h1>Home</h1></Link> 
            </div>
        </div>
        <div className='content'>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Business Development</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Opportunities / Tenders</a>
            <a href='/'>Customers</a>
            <a href='/'>Contacts</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reservations</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Bookings</a>
            <Link to='/schedule'>Scheduling</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Operations</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Checklist</a>
            <a href='/'>Movement Logs</a>
            <a href='/'>Maintenance</a>
            <a href='/'>Driver performance</a>
            <a href='/'>Incidents</a>
            <a href='/'>Violations</a>
            <a href='/'>Expense</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Infrastructure</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Drivers</a>
            <a href='/'>Vehicles</a>
            <a href='/'>Fuel Card</a>
            <a href='/'>Inventory</a>
            <a href='/'>Third Party Assets</a>
            <a href='/'>Vendors</a>
            <a href='/'>Payroll</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Reports & Tools</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Financials</a>
            <a href='/'>Duty Calculator</a>
            <a href='/'>Operational Stats</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Setup</Accordion.Header>
        <Accordion.Body style={{display: 'flex', flexDirection:'column'}}>
            <a href='/'>Dashboard</a>
            <a href='/'>Users</a>
            <a href='/'>Pricing</a>
            <a href='/'>Categories</a>
            <a href='/'>Approval Workflow</a>
            <a href='/'>Metrics</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      </div>
      <div
        className="resize-handle"
        onMouseDown={() => {
          document.addEventListener('mousemove', handleResize);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleResize);
          });
        }}
      />
    </div>
  );
};

export default LeftSide;
