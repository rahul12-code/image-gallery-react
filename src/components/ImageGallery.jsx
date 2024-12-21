import React, { useState } from 'react';
import cat1 from '../assets/cat1.webp';
import cat2 from '../assets/cat2.webp';
import cat3 from '../assets/cat3.webp';
import cat4 from '../assets/cat4.webp';
import ThumbnailGallery from './ThumbnailGallery';
import SelectedImage from './SelectedImage';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event) => {
    const id = Number(event.target.id);
    setSelectedImage(eval(`cat${id}`)); // Dynamically fetch the image based on ID
  };

  const images = [
    { src: cat1 },
    { src: cat2 },
    { src: cat3 },
    { src: cat4 },
  ];

  return (
    <>
      <ThumbnailGallery images={images} onImageClick={handleImageClick} />
      <SelectedImage image={selectedImage} />
    </>
  );
};

export default ImageGallery;
