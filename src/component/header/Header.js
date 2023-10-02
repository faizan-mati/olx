import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaHome } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className='totalnavbar'>
            <div className='firstNavbar'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="">
                            <strong className='topLogo'>OLX</strong>
                            <div className='afterIcon'>
                                <FaCar size={15} className='afterMoter' />
                                <span className='afterHide'> Motor </span>
                                <FaHome size={15} className='afterProperty' />
                                <span className='afterHide'> Property </span>
                                <div className='afterRegister'> <Link className='Link' to={'/register'}>
                                    RIGISTER</Link> </div>
                                <div className='afterLogin'><Link className='Link' to={'/login'}>
                                    LOGIN</Link> </div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle className='threeLine' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="" style={{ marginRight: "50px" }}>
                                    <FaCar size={15} style={{ marginTop: "-4px" }} /> Motor
                                </Nav.Link>
                                <Nav.Link href="">
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
                        <Navbar.Brand id='secondNavbar' href="">
                            <div className='secondLogo'>OLX
                                <input className='afterSearchbar' placeholder='Search' /></div>
                        </Navbar.Brand>
                        <Navbar.Toggle className='threeLine2' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="">
                                    <input className='searchBarSmall' onClick={toggleRotation} placeholder='Search City, Area or Locality' />
                                </Nav.Link>
                                {/* <FaCaretDown className='dropDown' style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0)' }}
                                    onClick={() => {
                                        toggleRotation()
                                    }}
                                /> */}
                                <Nav.Link href="">
                                    <input className='searchBarLarge' placeholder='Find Cars, Mobile Phones and More....' />
                                </Nav.Link>
                                <Nav.Link href="">
                                    <div className='search'><FaSearch /></div>
                                </Nav.Link>
                                <Nav.Link href="">
                                    <div className='register'><Link className='Link' to={'/register'}>
                                        REGISTER</Link></div>
                                </Nav.Link>
                                <Nav.Link to={'/login'}>
                                    <div className='login'><Link className='Link' to={'/login'}>
                                        LOGIN</Link></div>
                                </Nav.Link>

                                <a className='categories' href='#'>Mobile Phones</a>
                                <a className='categories' href='#'>cars</a>
                                <a className='categories' href='#'>Motorcycles</a>
                                <a className='categories' href='#'>Houses</a>
                                <a className='categories' href='#'>TV - Video - Audio</a>
                                <a className='categories' href='#'>Tablets</a>
                                <a className='categories' href='#'>Land & Plots</a>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header