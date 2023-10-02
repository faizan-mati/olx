import React from 'react'
import './Continue.css'

const Continue = (props) => {
  return (
         <div className="social-icon-circle">
            <a href='#'>
                <img src={props.profile} className="social-icon" />
            </a>
        </div>
  )
}

export default Continue