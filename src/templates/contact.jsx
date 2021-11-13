import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'
import Form from './Form'
import Info from './Info'
import './contact-section.css'
const Contact = () => (
<>
    <Breadcrumbs>
            <Link to="/">Home</Link>
            Contact us
        </Breadcrumbs>
    <div className="contact-section">
      <Form />
      <Info />
   <embed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.376113531558!2d78.63823701454498!3d25.45911358377501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39777701fa29d96b%3A0x274c37abc80c1ad1!2sB.I.E.T!5e0!3m2!1sen!2sin!4v1513400712400"
              width="600"
              height="450"
            />
   </div>
</>
  )
export default Contact
