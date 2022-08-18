import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';

import { useRecoilState,useRecoilValue } from 'recoil'
import cartCountState from '../recoil/atom/cartCountState';


function Header() {


    const mydata = useRecoilValue(cartCountState);
    
    return ( 
        <>
           <Navbar bg="light" expand="lg">
               <Container>
                   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                           <Nav.Link href="#home">Home</Nav.Link>
                           <Nav.Link href="#link">Cart{mydata.cartCnt}개</Nav.Link>
                          
                       </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>
        </>
     );
}

export default Header;