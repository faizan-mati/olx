import React from 'react';
import './Footer.css';

const FooterLink = (props) => {
  return (
    <div>
      <a href='#' className='footerLink'>{props.name}</a>
    </div>
  )
}

export default FooterLink
