import React from 'react'
import Navbar from './Navbar'

const Doc = () => {
  return (
    <div className='right-side'>
        <Navbar/>
      <div style={{ overflow:'scroll', height:'100vh', padding:'1rem 2rem 2rem' }}>
        <h1 style={{color:'#1a1a1a'}}>Documentation</h1>
        <p>Welcome to the documentation for the functional scheduling page designed for the transport team of a company. This page allows the manager to easily view and manage drivers' and vehicles' schedules at a glance. Below, you'll find an overview of the key features, components, and how to use the scheduling page effectively.</p>
        <h3>Table of content</h3>
        <ul>
            <li> Introduction </li>
            <li> Key Features </li>
            <li> Components </li>
            <li> Getting Started </li>
            <li> Usage </li>
            <li> Search Functionality </li>
            <li> Adding Events </li>
            <li> Viewing Schedule Details </li>
            <li> Deleting Events </li>
            <li> Switching Between Drivers and Vehicles </li>
            <li> Conclusion</li>
        </ul>
        <h3> 1. Introduction</h3>
        <p>The functional scheduling page is designed to provide a user-friendly interface for the transport team manager to efficiently manage drivers' and vehicles' schedules. It offers an intuitive calendar view, search functionality, event creation, event details, and event deletion.</p>

        <h3> 2. Key Features</h3>
        <ul>
        <li>Calendar View: An interactive calendar displays the schedules of drivers and vehicles.</li>
        <li>Search Functionality: A search bar allows users to filter data by driver/vehicle names.</li>
        <li>Event Creation: Managers can create new events by specifying details such as driver, client, start and end dates, pick-up and drop-off locations, etc.</li>
        <li>Event Details: Clicking on an event shows a modal with detailed information about the event.</li>
        <li>Event Deletion: Managers can delete events from the calendar.</li>
        <li>Switching Between Drivers and Vehicles: Managers can switch between viewing drivers' and vehicles' schedules.</li>
        </ul>

        <h3> 3. Components</h3>
        <ul>
        <li>Navbar: Displays the company logo and navigation options for notifications, tools, and help.</li>
        <li>Header: Displays the page title and navigation cards.</li>
        <li>Schedule Selector: Allows the user to select whether to view drivers' or vehicles' schedules.</li>
        <li>Calendar View: Displays the schedules of drivers and vehicles using FullCalendar.</li>
        <li>Search Bar: Allows users to search for specific drivers or vehicles.</li>
        <li>Event Modal: Displays detailed information about a selected event.</li>
        <li>Add Event Modal: Allows managers to create new events.</li>
        <li>Delete Confirmation Modal: Asks for confirmation before deleting an event.</li>
        </ul>
        <h3> 4. Getting Started</h3>
        <p>To use the scheduling page, simply navigate to the page's URL using a compatible web browser. Log in using your company credentials if required.</p>

        <h3> 5. Usage</h3>
        <h5>5.1 Search Functionality</h5>
            <p>
            - In the search bar located at the top of the page, type in the name of the driver or vehicle you want to search for.<br/>
            - The displayed schedules will be filtered based on your search query, allowing you to find specific drivers or vehicles quickly.
            </p>
        <h5>5.2 Adding events</h5>
        <ul>
            <li>Click the "Add event" button.</li>
            <li>In the modal that appears, fill in the required details for the event, such as driver name, client name, company name, start and end dates, pick-up and drop-off locations, etc.</li>
            <li>Click the "Create Event" button to add the event to the calendar.</li>
        </ul>
        <h5>5.3. Viewing Schedule Details</h5>
        <ul>
            <li>Click on an event in the calendar to view its details in a modal.</li>
            <li>The modal displays information such as driver, client, company, start and end dates, pick-up and drop-off locations, and allows you to add notes.</li>
        </ul>
        <h5>6.4. Deleting Events</h5>
        <ul>
            <li>Click on an event in the calendar to open its details.</li>
            <li>In the event details modal, click the trash icon to delete the event.</li>
            <li>A confirmation modal will appear asking you to confirm the deletion. Click "Delete" to proceed.</li>
        </ul>
        <h5>6.5. Switching Between Drivers and Vehicles</h5>
        <ul>
        <li>Use the dropdown menu labeled "Schedule for" to switch between viewing drivers' and vehicles' schedules.</li>
        </ul>
        <h3>6. Conclusion</h3>
        <p>The functional scheduling page provides an efficient solution for managing drivers' and vehicles' schedules. Its intuitive interface, along with features like search, event creation, and event details, empowers transport team managers to oversee schedules effectively. This documentation should help you get started with using the scheduling page and making the most of its capabilities.</p>
        <div style={{height:'100px'}}></div>
      </div>
    </div>
  )
}

export default Doc

