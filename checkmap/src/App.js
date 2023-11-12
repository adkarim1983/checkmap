//  lien de pratique: https://www.techomoro.com/add-or-embed-a-google-map-location-on-a-react-app/
// installation de bootstrap & google map
import React from 'react';
import Salon from './Salon';
import GoogleMapReact from 'google-map-react';
import './style.css';

function App() {
  return (
    <div className="App">
      <Salon />
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9326764934553!2d-7.6264809245971525!3d33.55512547334822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d6f15b9e2cb%3A0xb4a7ba82d2e4a855!2sSalon%20EMPREINTE!5e0!3m2!1sfr!2sma!4v1699809556030!5m2!1sfr!2sma"
       width="600" 
       height="450" 
       style={{ border: "0" }}
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
  )
}

export default App;