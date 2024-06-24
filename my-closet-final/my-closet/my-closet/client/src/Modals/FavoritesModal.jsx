import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const FavoritesModal = ({ isOpen, onClose, favorites }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl mb-4">Peças</h2>
        {favorites.length === 0 ? (
          <p className="text-gray-500">Sem favoritos ainda ♡ </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favorites.map((image) => (
              <div key={image._id} className="relative overflow-hidden rounded-lg shadow-md w-60 h-60 flex flex-col">
                <div className="w-full h-48 relative">
                  <img
                    src={image.url}
                    alt={image.public_id}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => {}}
                    className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-2 hover:text-black"
                  >
                    <FiMoreVertical size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default FavoritesModal;
