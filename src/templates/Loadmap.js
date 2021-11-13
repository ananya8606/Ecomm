import React, { useState, useEffect } from 'react';
import GMap from './GMap';

// API key of the google map
const GOOGLE_MAP_API_KEY = '<ABQIAAAAvZMU4-DFRYtw1UlTj_zc6hT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQcT1h-VA8wQL5JBdsM5JWeJpukvw>';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const Loadmap = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />
      {!loadMap ? <div>Loading...</div> : <GMap />}
      <br/><br/>
      <small><b>Note:</b> In order to make it work, you have to set the YOUR_GOOGLE_MAP_API_KEY in App.js file. </small>
    </div>
  );
}

export default Loadmap;