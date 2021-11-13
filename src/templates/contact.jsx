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
              src="https://maps.app.goo.gl/S2yHZEscE2PZQp2B9"
              width="600"
              height="450"
            />
   </div>
</>
  )
export default Contact
