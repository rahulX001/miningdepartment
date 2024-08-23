import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '400px',
  width: '800px',
};

const center = {
  lat: 37.7749, // Latitude of the location
  lng: -122.4194, // Longitude of the location
};

const position = {
  lat: 37.7749, // Latitude of the location
  lng: -122.4194, // Longitude of the location
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
