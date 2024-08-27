import React from 'react';
import '../styles/History.css';
import NavBar from './NavBar';

export const History = () => {
    return (
        <>
        <NavBar />
        <div className="history-container">
            <h1>History</h1>
            <p>Rail was introduced in Sri Lanka in 1864 to transport coffee from plantations...</p>
            <p>To serve the coconut plantations flourishing in the west, southwest...</p>
            <p>An extension of the Main Line to Kandy was made north to the ancient city...</p>
            <p>Towards the east, there was little economic justification...</p>
            <p>Up country, a similar branch line was laid from Nanu Oya...</p>
            <p>In the early days of the railways, the bulk of the freight was...</p>
        </div>
        </>
    );
};

export default History;
