import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'Full Name' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+91 xxxxxxxxxx',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => (
  <form className="form">
    <h3 className="form-h2"><b>Send us a message</b></h3>
   
    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}
<Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
