import React from 'react'
import './Footer.css'
import { FaApple } from 'react-icons/fa'; 

const DowButton = (props) => {
    return (
        <div>
          <button className='btnApp'>  {props.icone}
           {props.name} <br /><span className="margin-span" style={{ marginLeft: '25px' }}>
             {props.names} </span> </button>
        </div>
    )
}

export default DowButton
