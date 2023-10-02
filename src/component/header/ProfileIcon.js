import React from 'react'
import './AfterHeader.css'

const ProfileIcon = (props) => {
  return (
    <div>
            <button className="add-button">
                <span className="add-icon">
                    {props.icon}
                </span>
                {props.name}
            </button>
        </div>
  )
}

export default ProfileIcon