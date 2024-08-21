import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import axios from 'axios';

// Custom red icon for the markers
const redIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
            <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
    `),
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
});

const orangeIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
            <circle cx="50" cy="50" r="40" fill="orange" />
        </svg>
    `),
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
});

export const Map = () => {
    const [trainLocation, setTrainLocation] = useState(null);
    const [startLocation, setStartLocation] = useState(null);
    const [path, setPath] = useState([]);

    useEffect(() => {
        const fetchTrainLocation = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/web/train/get/66c4bf46ad7afb106b82296f`
                );
                const data = res.data;

                const currentLocation = {
                    lat: data.lat,
                    lon: data.lon,
                    location: data.location,
                };

                setTrainLocation(currentLocation);

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
    }, [startLocation]);

    if (!trainLocation || !trainLocation.lat || !trainLocation.lon) {
        return <div>Loading train location...</div>;
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
            {startLocation && (
                <Marker position={[startLocation.lat, startLocation.lon]} icon={orangeIcon}>
                    <Tooltip permanent>
                        <div>
                            <strong>Start Location: {startLocation.location}</strong><br />
                            Lat: {startLocation.lat}, Lng: {startLocation.lon}
                        </div>
                    </Tooltip>
                </Marker>
            )}
            <Marker position={[trainLocation.lat, trainLocation.lon]} icon={redIcon}>
                <Tooltip permanent>
                    <div>
                        <strong>Current Location: {trainLocation.location}</strong><br />
                        Lat: {trainLocation.lat}, Lng: {trainLocation.lon}
                    </div>
                </Tooltip>
            </Marker>
            {path.length > 1 && <Polyline positions={path} color="blue" />}
        </MapContainer>
    );
};

const saveStationData = async (stationData) => {
    try {
      const response = await axios.post('http://localhost:5000/web/save-station/66c4bf46ad7afb106b82296f', stationData);
      console.log('Station data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving station data:', error);
    }
  };
  
  // Example station data
  const stationData = {
    stationId: 'station123',
    name: 'Sample Station',
    lat: 7.8731,
    lon: 80.7718,
    capacity: 100,
  };
  
  // Call the function to save station data
  saveStationData(stationData);

export default Map;
