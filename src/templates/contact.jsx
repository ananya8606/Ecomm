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
var iframe = document.createElement("iframe");
iframe.onload = function() {
   var doc = iframe.contentDocument;
    
   iframe.contentWindow.showNewMap = function() {
    var mapContainer =  doc.createElement('div');
    mapContainer.setAttribute('style',"width: 500px; height: 300px");
    doc.body.appendChild(mapContainer);

    var mapOptions = {
        center: new this.google.maps.LatLng(-35.000009, -58.197645),
        zoom: 5,
        mapTypeId: this.google.maps.MapTypeId.ROADMAP
    }

    var map = new this.google.maps.Map(mapContainer,mapOptions);
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&' + 'callback=showNewMap';
iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
};
document.body.appendChild(iframe);
   </div>
</>
  )
export default Contact
