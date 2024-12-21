import React from 'react';

const SelectedImage = ({ image }) => {
  if (!image) return null; // Render nothing if no image is selected.

  return (
    <div className="flex flex-col justify-center items-center mt-8 ml-4">
      <h2 className="font-bold mb-3">Selected Image</h2>
      <img
        src={image}
        className="w-[450px] h-[300px] rounded-md shadow-custom1"
      />
    </div>
  );
};

export default SelectedImage;
