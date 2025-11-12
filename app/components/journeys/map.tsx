"use client";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import React from "react";
import { Route } from "./list-of-journeys";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapProps {
  routes: Route[];
}

const defaultCenter: [number, number] = [51.5083, -0.128108];
export default function Map({ routes }: MapProps) {
  return (
    <MapContainer
      center={
        routes && routes[0].markers.length > 0
          ? routes[0].markers[0]
          : defaultCenter
      }
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <React.Fragment></React.Fragment>
      {routes.map((route) => (
        <React.Fragment key={route.journeyId}>
          <Polyline positions={route.markers} color={route.colour} />

          {route.markers.map((position, idx) => (
            <Marker position={position} key={idx}>
              <Popup>Journey {route.title[idx]}</Popup>
            </Marker>
          ))}
        </React.Fragment>
      ))}
    </MapContainer>
  );
}
