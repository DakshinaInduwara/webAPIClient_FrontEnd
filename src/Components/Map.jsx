import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios';

export const Map = () => {
    const [trainLocation, setTrainLocation] = useState(null);
      const { id } = '66c4bf46ad7afb106b82296f'; // Correctly destructure trainID from useParams
    
      useEffect(() => {
        const fetchTrainLocation = async () => {
          try {
            const res = await axios.get(
              `http://localhost:5000/web/train/get/66c4bf46ad7afb106b82296f`
            );
            const data = await res.json();
            setTrainLocation({
              latitude: data.lat,
              longitude: data.lon,
              location: data.location,
            });
          } catch (error) {
            console.error("Error fetching train location: ", error);
          }
        };
        fetchTrainLocation();
    
        const intervalId = setInterval(fetchTrainLocation, 60000); // Fetch location every minute
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, [id]); // Use trainID as the dependency
    
      if (!trainLocation) {
        return <div>Loading map...</div>;
      }
    
      return (
        <MapContainer
          center={[trainLocation.lat, trainLocation.lon]}
          zoom={10}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[trainLocation.lat, trainLocation.lon]}>
            <Popup>
              {trainLocation.location} <br />
              {`Lat: ${trainLocation.lat}, Lng: ${trainLocation.lon}`}
            </Popup>
          </Marker>
        </MapContainer>
  )
}
export default Map;