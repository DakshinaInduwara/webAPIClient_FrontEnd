import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import axios from 'axios';

const redIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
            <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
    `),
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
});

export const Map = () => {
    const [trainLocation, setTrainLocation] = useState(null);

    useEffect(() => {
        const fetchTrainLocation = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/web/train/get/66c4bf46ad7afb106b82296f`
                );
                const data = res.data;
                setTrainLocation({
                    lat: data.lat,
                    lon: data.lon,
                    location: data.location,
                });
            } catch (error) {
                console.error("Error fetching train location: ", error);
            }
        };
        fetchTrainLocation();

        const intervalId = setInterval(fetchTrainLocation, 60000);

        return () => clearInterval(intervalId);
    }, []);

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
            <Marker position={[trainLocation.lat, trainLocation.lon]} icon={redIcon}>
                <Popup>
                    {trainLocation.location} <br />
                    {`Lat: ${trainLocation.lat}, Lng: ${trainLocation.lon}`}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
