import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";

type Props = {
  coords: Coords // inserting variables varName: varType
  onMapClick: (lat: number, lon: number) => void // inserting function funcName: (funcInputs) => funcReturnVals
}

export default function Map({coords, onMapClick}: Props) {
  const {lat, lon} = coords
  return (
    <MapContainer 
        center={[lat, lon]}
        zoom={5}
        style={{ height: "500px", width: "700px" }}
    >
      <MapClick onMapClick={onMapClick}/>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

function MapClick({onMapClick}: {onMapClick: (lat: number, lon: number) => void}) {
  const map = useMap();

  useMapEvents({
    click: (e) => {
      // console.log(e);
      const {lat, lng} = e.latlng
      map.panTo([lat, lng])
      onMapClick(lat, lng)
    },
  });
  return null;
}