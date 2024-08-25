import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    const images = [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        '/path/to/image3.jpg',
        '/path/to/image4.jpg',
        '/path/to/image5.jpg',
        '/path/to/image6.jpg',
    ];

    return (
        <div className="gallery-container">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
