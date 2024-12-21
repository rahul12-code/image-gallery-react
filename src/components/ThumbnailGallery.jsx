import React from 'react';

const ThumbnailGallery = ({ images, onImageClick }) => {
  return (
    <div className="flex flex-row justify-center items-center mt-12 cursor-pointer">
      {images.map((image, index) => (
        <img
          key={index}
          onClick={onImageClick}
          src={image.src}
          id={index + 1}
          className="w-[180px] h-[180px] border rounded-md shadow-custom ml-3 object-cover transition-transform duration-300 hover:scale-110"
        />
      ))}
    </div>
  );
};

export default ThumbnailGallery;
