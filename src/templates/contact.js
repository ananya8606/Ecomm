import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'

const Contact = () => (
    <>

<Breadcrumbs>
            <Link to="/">Home</Link>
            Contact us
        </Breadcrumbs>
        <section>
    <div class="container my-3 my-sm-5">
      <h1 class="mb-sm-4 text-center">Contact</h1>
      <div class="row">
        <div class="col-12 col-md-6">
          <h4>Address:</h4>
          <address>
            <strong>BIET, Jhansi</strong><br />
            Panchawati Hostel<br />
            Jhansi, Uttar Pradesh<br />
            <abbr title="Telephone">T:</abbr
            ><a href="tel:+919721304421">+91-9876543210</a><br />
            <abbr title="Mail">M:</abbr
            ><a href="mailto:info@domain.com">info@domain.com</a>
          </address>
        </div>
        <div class="col-12 col-md-6">
          <h4>Opening hours:</h4>
          <p>
            Mon-Sat:<span class="float-right"> 9 am - 4 pm</span><br />
            Sunday:<span class="float-right"> Off</span><br />
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 mb-3">
          <h4>Send us a message</h4>
          <form action="#">
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="name">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="telephone">Telephone</label>
                  <input
                    type="tel"
                    id="telephone"
                    class="form-control"
                    placeholder="9876543210"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="select">Department:</label>
                  <select
                    id="select"
                    class="form-control"
                    aira-describedby="select-helpBlock"
                    required
                  >
                    <option value="">- select here -</option>
                    <option value="business">Business</option>
                    <option value="Sale">Sale</option>
                    <option value="Support">Support</option>
                  </select>
                  <small id="select-helpBlock" class="form-text"
                    >Please select the recipient of your message.</small
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="textarea">Message:</label>
              <textarea
                id="textarea"
                class="form-control"
                rows="5"
                placeholder="Write your message here.."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
          </form>
        </div>
        <div class="col-12 col-lg-6">
          <h4>Where to find us:</h4>
          
        </div>
      </div>
    </div>
</section>
</>
)
export default Contact
