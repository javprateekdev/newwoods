import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
 
const containerStyle = {
  width: '600px',
  height: '300px',
  marginTop: '30px',
  marginLeft: '20px',
};
 
const center = {
  lat:28.5590846443457503,
  lng:77.35100115353349
}
function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC4ZG2TRPxqDP93GbCa9uoq_C-FbHxiLCQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
           
        
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MyComponent);