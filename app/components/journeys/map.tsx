"use client";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import { Journey, JournalEntry } from "./list-of-journeys";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapProps {
  journeys: Journey[];
  journalEntries: JournalEntry[];
}

export default function Map({ journeys, journalEntries }: MapProps) {
  return (
    <MapContainer
      center={[journalEntries[0].latitude, journalEntries[0].longitude]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {journalEntries.map((entry: JournalEntry) => {
        return (
          <Marker
            key={entry.id}
            position={[entry.latitude, entry.longitude]}
          ></Marker>
        );
      })}
    </MapContainer>
  );
}
