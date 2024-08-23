import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapContainerStyle = {
  height: '400px',
  width: '800px',
};

const center = {
  lat: 25.3176, // Latitude of Varanasi
  lng: 82.9739, // Longitude of Varanasi
};

const locations = [
  { lat: 25.3176, lng: 82.9739 }, // Varanasi, India
  { lat: 28.6139, lng: 77.2090 }, // New Delhi, India
  { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
  { lat: 22.5726, lng: 88.3639 }, // Kolkata, India
  { lat: 13.0827, lng: 80.2707 }, // Chennai, India
];

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5} // Adjust zoom level as needed
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
