import React from 'react';

const FavoritesGallery = ({ favorites }) => {
  return (
    <div className="favorites-gallery mt-8">
      <h2 className="text-2xl mb-4 text-center">Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map(image => (
          <div key={image._id} className="relative overflow-hidden rounded-lg shadow-md">
            <img src={image.url} alt={image.public_id} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesGallery;