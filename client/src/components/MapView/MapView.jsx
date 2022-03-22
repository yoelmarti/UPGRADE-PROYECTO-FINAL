import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const position =[40.44308157522387, -3.67440921463872]

const MapView = () => {
  return (
    <MapContainer className='w-3/5 h-[600px] m-auto' center={position} zoom={6}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  )
}

export default MapView