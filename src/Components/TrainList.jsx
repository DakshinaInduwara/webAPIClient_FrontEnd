import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TrainList = () => {
const [Trains, setTrains] = useState([]);
const navigate = useNavigate()
const handleNavigate = (trainId) =>{
    navigate(`/trainlist/${trainId}`)
}
useEffect(() =>{
    const fetchAllTrains = async () => {
        try {
            const res = await axios.get("http://localhost:5000/web/train/get")
            setTrains (res.data)
        } catch (error) {
            throw error
        }
    }
    fetchAllTrains();
},[])
  return (
    <div>
        {Trains.map((item)=>(
            <div>
                <p>{item.trainId}</p>
                <p>{item.location}</p>
                <button onClick={()=>handleNavigate(item._id)}>Check Location</button>
            </div>
        ))}
    </div>
  )
}

export default TrainList