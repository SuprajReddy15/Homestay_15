import React, { useState } from 'react';

const mapContainerStyle = {
  width: '90%', // Reduced width for a smaller container
  height: '400px', // Reduced height for a smaller display
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '0 auto', // Center the map container
};

const center = {
  lat: 40.7128, // Example latitude (New York City)
  lng: -74.0060, // Example longitude (New York City)
};

const iconUrl = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'; // Custom icon URL

const GoogleMapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="map-container">
      <div className="iframe-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6631824262713!2d80.62033751417474!3d16.441923833710877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK+L+University!5e0!3m2!1sen!2sin!4v1562577544229!5m2!1sen!2sin"
          width="100%" 
          height="400" // Match the new reduced height
          style={{ border: '0', borderRadius: '15px', marginTop: '20px' }}
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
