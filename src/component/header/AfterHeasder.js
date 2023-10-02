import React from 'react'
import './Header.css'
import './AfterHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaHome } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import PostButton from './PostButton';

const AfterHeader = () => {
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div> 
            <div className='firstNavbar'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand id='navBarAll'>
                            <strong className='topLogo'>OLX</strong>
                            <div className='afterIcon'>
                                <FaCar size={15} className='afterMoter' id='afterMoter' />
                                <span className='afterHide'> Motor </span>
                                <FaHome size={15} className='afterProperty' id='afterMoter'  />
                                <span className='afterHide'> Property </span>
                                <div className='afterProfile'>  <Nav.Link className='' >
                                   <Profile />
                                </Nav.Link></div>
                                <div className='afterProfileBtn'>  <Nav.Link className='' >
                                <PostButton />
                                </Nav.Link></div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle className='threeLine' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link style={{ marginRight: "50px" }}>
                                    <FaCar size={15} style={{ marginTop: "-4px" }} /> Motor
                                </Nav.Link>
                                <Nav.Link>
                                    <FaHome size={15} style={{ marginTop: "-4px" }} /> Property
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className='secondNavbar'>
                <Navbar bg="light" expand="lg">
                    <Container >
                        <Navbar.Brand className='afterNavBar' id='navBarAll'>
                            <div className='secondLogo'>OLX
                                <input className='afterSearchbar' placeholder='Search' /></div>
                        </Navbar.Brand>
                        <Navbar.Toggle className='threeLine2' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <input className='searchBarSmall' onClick={toggleRotation} placeholder='Search City, Area or Locality' />
                                </Nav.Link>
                                {/* <FaCaretDown className='dropDown' style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0)' }}
                                    onClick={() => {
                                        toggleRotation()
                                    }}
                                /> */}
                                <Nav.Link>
                                    <input className='searchBarLarge' placeholder='Find Cars, Mobile Phones and More....' />
                                </Nav.Link>
                                <Nav.Link>
                                    <div className='search'><FaSearch /></div>
                                </Nav.Link>
                                <Nav.Link className='profile' id="hide">
                                   <Profile />
                                </Nav.Link>
                                <Nav.Link id='hide'>
                                   <PostButton />
                                </Nav.Link>

                                <a className='categories' >Mobile Phones</a>
                                <a className='categories' >cars</a>
                                <a className='categories' >Motorcycles</a>
                                <a className='categories' >Houses</a>
                                <a className='categories' >TV - Video - Audio</a>
                                <a className='categories' >Tablets</a>
                                <a className='categories' >Land & Plots</a>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default AfterHeader