import React, { useState } from "react";
import Cards from '../constants/Cards'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTrash3 } from "react-icons/bs";
import { MdEdit } from 'react-icons/md'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { driverData, vehicleData } from "../constants";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from 'uuid';


const Schedule = () => {

  const myUuid = uuidv4();


const [events, setEvents] = useState([
    {
      id:{myUuid},
      driverName: 'Wisdom Ademola',
      clientName: 'Clinton',
      companyName: 'British Petroleum',
      service:'Full day rental',
      start: '', // Use the clicked date
      end: '',
      pickUp:'',
      dropOff:'',
      },
  ])
  const [newEvent, setNewEvent] = useState({
    id: {myUuid},
    driverName: '',
    clientName: '',
    companyName: '',
    start: '',
    end: '',
    pickUp: '',
    dropOff: '',
  });

const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [selectedOption, setSelectedOption] = useState('vehicle');

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

function renderEventContent(eventInfo) {
  const { driverName, clientName, companyName, start, end, pickUp, dropOff } = eventInfo.event.extendedProps;
    return (
        <div>
            <p><strong>{driverName}</strong></p>
            <p>{clientName}</p>
            <p>{companyName}</p>
        </div>
        )
    }

    const handleDelete = () => {
      // Find the index of the event you want to delete
      const eventIndexToDelete = events.findIndex(event => event.start === newEvent.start);
      
      // Make sure the index is valid
      if (eventIndexToDelete !== -1) {
        // Create a copy of the events array without the deleted event
        const updatedEvents = events.filter((_, index) => index !== eventIndexToDelete);
        setEvents(updatedEvents);
      }
      
      handleClose1(); // Close the modal after deleting
    }

const handleSubmit = (e) => {
  console.log("New Event:", newEvent);
  setEvents([...events, newEvent]);
  handleClose();

  e.preventDefault();
};

const handleChange = (e) => {
  const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
    ...prevEvent,
    [name]: value,
  }));
};

  return (
    <div className='right-side'>
      <Navbar />
      <div>
      <div className='header'>
        <div> <h1>Scheduling</h1></div>
        <div>
            <Cards />
        </div>
      </div>
      <div className='schedule'>
        <div className='schedule-top'>
            <div  className='schedule-title'>
                <h1>Schedule for</h1>
                <select id='schedule' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                  <option value='vehicle'>Vehicle</option>
                  <option value='driver'>Driver</option>
                </select>

            </div>
            <div className="event-button">
              <button onClick={handleShow}>Add event</button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Create Event</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="create-event">
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Driver name: </label>
                    <input
                    name="driverName" 
                    value={newEvent.driverName}
                    onChange={handleChange}
                     style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Client name: </label>
                    <input 
                    name="clientName" 
                    value={newEvent.clientName}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Company name: </label>
                    <input 
                    name="companyName" 
                    value={newEvent.companyName}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Schedule: </label>
                    <input 
                    name="schedule" 
                    value={newEvent.schedule}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Start date: </label>
                    <input 
                    name="start" 
                    type="datetime-local"
                    value={newEvent.start}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>End date: </label>
                    <input 
                    name="end" 
                    type="datetime-local"
                    value={newEvent.end}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Pick up location: </label>
                    <input 
                    name="pickUp"
                    value={newEvent.pickUp}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                  <div className="event-content">
                    <label style={{marginRight: '0.7rem'}}>Drop off location: </label>
                    <input 
                    name="dropOff" 
                    value={newEvent.dropOff}
                    onChange={handleChange}
                    style={{marginRight: '0.7rem', border:'none', borderBottom:'1px solid #333', outline:'none'}}></input>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Create Event
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        <div  className='schedule-bottom'>
        <div  className='schedule-date'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
              initialView='dayGridMonth'
              headerToolbar= {{
              left: 'prev',
              center: 'title',
              right:'next'
              }}
              weekends={true}
            />
            </div>
        <div  className='schedule-bottom-description'>
        {selectedOption === 'vehicle' ? (
        <div className='schedule-bottom-left'>
            <div className="schedule-bottom-left-title">
                <h1>Vehicle</h1>
            </div>
            {
              vehicleData.map((item)=>{
                return (
                    <div key={item.id} className="vehicleDescription" >
                        <div> <img src={item.img}/> </div>
                        <div>
                            <h1>{item.vehicleName}</h1>
                            <p>{item.vehicleType}</p>
                            <p>{item.vehicleCondition}</p>
                        </div>
                    </div>
                )
              })
                
            }
            
        </div>
        ) : (
        <div className='schedule-bottom-left'>
            <div className="schedule-bottom-left-title">
                <h1>Driver</h1>
            </div>
            {
              driverData.map((item)=>{
                return (
                    <div key={item.id} className="vehicleDescription" >
                        <div> <img src={item.img}/> </div>
                        <div>
                            <h1>{item.driver}</h1>
                            <p>{item.position}</p>
                        </div>
                    </div>
                )
              })
                
            }
            
        </div>
        )}
        <div className='schedule-bottom-right'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView='dayGridMonth'
        headerToolbar= {{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        eventClick={handleShow1}
      />
        </div> 

        </div>
      </div>
      </div>
      <Modal show={show1} onHide={handleClose1} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}> Schedule Overview  <div style={{fontSize:'17px',display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.15rem'}}> <div style={{ marginRight:'0.5rem', backgroundColor:'#f3f3f3', padding:'1px 4px', cursor:'pointer' }}><MdEdit /></div> <div style={{ marginRight:'0.5rem', backgroundColor:'#f3f3f3', padding:'1px 4px', cursor:'pointer' }} ><BsTrash3 onClick={handleDelete}  /></div></div></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-schedule">
                  <div className="modal-schedule-top"></div>
                  <div className="modal-schedule-bottom">
                    <h4>Driver: <span>{newEvent.driverName}</span></h4>
                    <h4>Client: <span>{newEvent.clientName}</span></h4>
                    <h4>Company: <span>{newEvent.companyName}</span></h4>
                    <h4>Start date: <span>{newEvent.start}</span></h4>
                    <h4>End date: <span>{newEvent.end}</span></h4>
                    <h4>Pick-up location: <span>{newEvent.pickUp}</span></h4>
                    <h4>Drop-off location: <span>{newEvent.dropOff}</span></h4>
                    <textarea rows={0} cols={52} placeholder="note"></textarea>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
    </div>
  
    
  )
}

export default Schedule
