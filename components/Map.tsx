"use client";

import "leaflet/dist/leaflet.css";

import { useMemo } from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { generateMushroomIconUrl } from "@/utils/generateMushroomIconUrl";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Mushroom } from "@/types";

const COORDS = {
  lat: 52.08051175228818,
  lng: 5.236794075596302,
};

const ZOOM = 16;

type GeoData = {
  lat: number;
  lng: number;
};

type MapProps = {
  filteredMarkers: Mushroom[];
};

export default function Map({ filteredMarkers }: MapProps) {
  const ChangeView = ({ coords }: { coords: GeoData }) => {
    const map = useMap();
    map.setView(coords);
    return null;
  };

  const renderMarkers = useMemo(
    () =>
      filteredMarkers.map((mushroom) => (
        <Marker
          key={mushroom.name}
          position={mushroom.latlng}
          icon={L.icon({
            iconUrl: generateMushroomIconUrl(mushroom.color),
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <h1 className="mb-2 font-bold capitalize">{mushroom.name}</h1>
            <h2 className="mb-2">Color: {mushroom.color}</h2>
            <h2 className="mb-2">Spots: {mushroom.spots}</h2>
          </Popup>
        </Marker>
      )),
    [filteredMarkers],
  );

  return (
    <MapContainer center={COORDS} zoom={ZOOM} className="h-full">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderMarkers}
      <ChangeView coords={COORDS} />
    </MapContainer>
  );
}
