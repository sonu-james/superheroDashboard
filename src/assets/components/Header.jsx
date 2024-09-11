import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>
    <Navbar data-bs-theme="dark" bg='transparent' style={{height:'60px'}} >
        <Container className='mt-4' >
          <Navbar.Brand href="/superherodash"><img src="https://clipart-library.com/new_gallery/40-400344_deadpool-vector-superhero-logos-png.png" alt="no image" style={{width:'60px',height:'60px'}} /></Navbar.Brand>
          <Nav className="ms-auto fs-5">
            
            <Nav.Link href='#' className='me-5  rounded' style={{backgroundColor:'orange'}}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Header