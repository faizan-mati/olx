import React from 'react'
import { FaEnvelope, FaBell } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { BsBuildingAdd } from 'react-icons/bs'
import { RiMenuAddFill } from 'react-icons/ri';
import { BiBookAdd, BiLogOut } from 'react-icons/bi';
import { AiOutlineQuestionCircle, AiOutlineSetting, } from 'react-icons/ai';
import ProfileIcon from './ProfileIcon';
import { logout } from '../../config/Firebase';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {

    const [isRotated, setIsRotated] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [screen, setScreen] = useState("dash")

    const navigate = useNavigate()

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };


    return (
        <div>
            <a href='#' >
                <FaEnvelope size={32} style={{ marginLeft: "10px" }} /></a>
            <a href='#'>
                <FaBell size={28} style={{ marginLeft: "5px" }} /></a>
            <a href='#'>
                <img className="profile-icon" src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                    style={{ marginLeft: "5px" }} alt="Avatar"
                    onClick={() => {
                        toggleRotation()
                        toggleDropdown()
                    }}
                /></a>
            <a href='#'>
                <IoMdArrowDropdown
                    size={24}
                    style={{
                        position: "relative", top: "7px", marginLeft: "-5px",
                        transform: isRotated ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                    onClick={() => {
                        toggleRotation()
                        toggleDropdown()
                    }}
                /></a>


            {dropdownVisible && (
                <div className="profile-dropdown">
                    <div style={{ display: "flex" }}>
                        <div>
                            <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                                alt="Profile" className='profileImg' />
                        </div>
                        <div style={{ marginTop: "px", marginLeft: "20px", lineHeight: "0.4" }}>
                            {/* <p>Hello,</p>
                            <h3>Faizan Mati</h3> */}
                            <h3>PROFILE</h3>
                            {/* <a style={{ textDecoration: "underline", lineHeight: "1" }} href='#' alt="">View and Edit Your Profile</a> */}
                        </div>
                    </div>
                    <hr />
                    <div>
                        <button className="add-button" onClick={() => {
                            navigate("myadd")
                            toggleRotation()
                            toggleDropdown()
                        }}>
                            <span className="add-icon">
                                <ProfileIcon
                                    icon={<BsBuildingAdd style={{ marginLeft: '-10px' }}/>}
                                    name=" My Adds"
                                /></span>
                        </button>
                        <button style={{ border: "none", marginLeft:"-6px", backgroundColor: "transparent", width: "100%" }}
                            onClick={() => {
                                navigate("/afterdashboard")
                                toggleRotation()
                                toggleDropdown()
                            }}>
                            <ProfileIcon
                                icon={<RiMenuAddFill />}
                                name="Dashoboard"
                            />
                        </button>
                        {/* <ProfileIcon
                            icon={<BiBookAdd />}
                            name=" Bought Packages & Billing"
                        /> */}

                    </div>
                    <hr />
                    {/* <div>
                        <ProfileIcon
                            icon={<AiOutlineQuestionCircle />}
                            name=" Help"
                        />

                        <ProfileIcon
                            icon={<AiOutlineSetting />}
                            name=" Settings"
                        />

                    </div> */}
                    {/* <hr /> */}
                    <div>
                        <button className="add-button" onClick={() => {
                            logout()
                        }}>
                            <span className="add-icon">
                                <BiLogOut />
                            </span>
                            Logout
                        </button>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Profile