import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import L from "leaflet";
import NavBar from './NavBar';

const redIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="40" fill="red" />
    </svg>
  `),
  iconSize: [20, 20],
  iconAnchor: [12.5, 12.5],
});

const orangeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="40" fill="orange" />
    </svg>
  `),
  iconSize: [20, 20],
  iconAnchor: [12.5, 12.5],
});

export const Map = () => {
  const { id } = useParams();
  const [trainLocations, setTrainLocations] = useState({
    lat: 0,
    lon: 0,
    location: "",
    trainName: "",
    speed: 0,
  });
  const [startLocation, setStartLocation] = useState(null);
  const [path, setPath] = useState([]);

  useEffect(() => {
    const fetchTrainLocation = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/web/train/get/${id}`
        );
        const data = await res.json();
        const currentLocation = {
          lat: data.lat,
          lon: data.lon,
          location: data.location,
          trainName: data.trainName,
          speed: data.speed,
        };

        setTrainLocations(currentLocation);

        if (!startLocation) {
          setStartLocation(currentLocation);
        }

        setPath((prevPath) => [...prevPath, [data.lat, data.lon]]);
      } catch (error) {
        console.error("Error fetching train location: ", error);
      }
    };

    fetchTrainLocation();
    const intervalId = setInterval(fetchTrainLocation, 60000);

    return () => clearInterval(intervalId);
  }, [id, startLocation]);

  if (!trainLocations.lat && !trainLocations.lon) {
    return <p>Loading map...</p>;
  }

  return (
    <>
    <NavBar /> 
    <MapContainer
      center={[trainLocations.lat, trainLocations.lon]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {startLocation && (
        <Marker position={[startLocation.lat, startLocation.lon]} icon={orangeIcon}>
          <Tooltip permanent>
            <div>
              <strong>Start Location: {startLocation.location}</strong><br />
              {/* Train ID: {id}<br /> */}
              Train Name: {trainLocations.trainName}<br />
              Lat: {startLocation.lat}, Lon: {startLocation.lon}<br />
            </div>
          </Tooltip>
        </Marker>
      )}
      <Marker position={[trainLocations.lat, trainLocations.lon]} icon={redIcon}>
        <Tooltip permanent>
          <div>
            <strong>Current Location: {trainLocations.location}</strong><br />
            {/* Train ID: {id}<br /> */}
            Lat: {trainLocations.lat}, Lon: {trainLocations.lon}<br />
            <strong>Train Name: {trainLocations.trainName}</strong><br />
            Speed: {trainLocations.speed.toFixed(0)} km/h
          </div>
        </Tooltip>
      </Marker>
      <Polyline positions={path} color="blue" />
    </MapContainer>
    </>
  );
};

export default Map;