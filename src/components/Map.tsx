import { MapContainer, Marker, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";

type Props = {}

export default function Map({}: Props) {
  return (
    <MapContainer 
        center={[10, 20]}
        zoom={5}
        style={{ height: "500px", width: "500px" }}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10, 20]} />
    </MapContainer>
  )
}