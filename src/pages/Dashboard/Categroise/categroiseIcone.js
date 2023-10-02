import React from 'react'
import './Categroise.css'

const CategroiseIcone =(props) => {
  return (
    <div>
      
      <img src={props.image}
      className='categoriesImage' alt='img' /> <br />
     <p className='categroisePara'> {props.name} <br /> {props.names} </p>
         
    </div>
  )
}

export default CategroiseIcone;
