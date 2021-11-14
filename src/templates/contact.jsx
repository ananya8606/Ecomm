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
      <Form />
<div className="center">
<embed src="https://maps.google.com/maps?q=Bundu,+Jharkhand,+India&output=embed"
 width="800" height="250" />
</div>
<div className="contact-section">
      <Info />
</div>
</>
  )
export default Contact
