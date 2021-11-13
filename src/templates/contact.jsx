import React, { useState, useEffect } from 'react';
import GMap from './GMap';
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'
import Form from './Form'
import Info from './Info'
import './contact-section.css'



  return (
<>
    <Breadcrumbs>
            <Link to="/">Home</Link>
            Contact us
        </Breadcrumbs>
    <div className="contact-section">
      <Form />
      <Info />
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
</>
  );
}
export default Contact;
