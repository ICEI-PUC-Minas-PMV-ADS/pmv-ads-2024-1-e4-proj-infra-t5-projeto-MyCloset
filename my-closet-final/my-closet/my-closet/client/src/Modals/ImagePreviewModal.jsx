import React from 'react';

const ImagePreviewModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-full sm:max-w-md sm:max-h-md md:max-w-lg md:max-h-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 rounded-full"
        >
          Fechar
        </button>
        <img src={imageUrl} alt="Preview" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default ImagePreviewModal;
