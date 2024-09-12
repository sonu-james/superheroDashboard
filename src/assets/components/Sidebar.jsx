import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav } from 'react-bootstrap'



function Sidebar() {
  return (
    <>
    
   <div className='sidebar w-100  mt-4' style={{backgroundColor:'#000026'}}>
         <Nav defaultActiveKey='superherodash' className="me-auto flex-column text-start " >
        <Nav.Link href="/superherodash" style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faTableCellsLarge } style={{color: "#fcfcfc",}} className='me-2 mt-5'/>Dashboard</Nav.Link>
        

          </Nav>
    </div>
    </>
  )
}

export default Sidebar