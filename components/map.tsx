'use client';

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div className=" p-2 h-dvh -z-10">
      <MapContainer
        center={[13.0827, 80.2707]} // Coordinates for Chennai
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        className="-z-10"
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="-z-10"
        />
      </MapContainer>
    </div>
  );
}
