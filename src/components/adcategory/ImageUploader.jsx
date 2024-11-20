import React from 'react';

const ImageUploader = ({ image, onImageChange }) => (
  <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-6">
    <img src={image} alt="Category" className="w-full h-full object-cover" />
    <label
      htmlFor="imageUpload"
      className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 text-sm rounded-lg cursor-pointer"
    >
      Edit
    </label>
    <input
      type="file"
      id="imageUpload"
      accept="image/*"
      className="hidden"
      onChange={onImageChange}
    />
  </div>
);

export default ImageUploader;
