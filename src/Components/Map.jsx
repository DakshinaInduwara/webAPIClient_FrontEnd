import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";

export const Map = () => {
  const { id } = useParams();
  const [trainLocations, setTrainLocations] = useState({
    lat: 0,
    lon: 0,
    location: "",
    speed: 0,
  });

  useEffect(() => {
    const fetchTrainLocation = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/web/train/get/${id}`
        );
        const data = await res.json();
        setTrainLocations({
          lat: data.lat,
          lon: data.lon,
          location: data.location,
          speed: data.speed,
        });
      } catch (error) {
        console.error("Error fetching train location: ", error);
      }
    };

    fetchTrainLocation();
    const intervalId = setInterval(fetchTrainLocation, 60000);

    return () => clearInterval(intervalId);
  }, [id]);

  // Return null or a loader until the data is fetched
  if (!trainLocations.lat && !trainLocations.lon) {
    return <p>Loading map...</p>;
  }

  console.log(trainLocations)
  return (
    <MapContainer
      center={[trainLocations.lat, trainLocations.lon]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[trainLocations.lat, trainLocations.lon]}>
        <Popup>
          {trainLocations.location} <br />
          {`Lat: ${trainLocations.lat}, Lon: ${trainLocations.lon}`}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
