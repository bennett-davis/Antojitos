import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
    
  };

  const defaultCenter = {
    lat: 33.18721,
    lng: -87.52795,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} title="Antojitos Izcalli" />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
