import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagePreviewModal from '../Modals/ImagePreviewModal';

const OutfitsGallery = () => {
  const [outfits, setOutfits] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const response = await axios.get('/api/outfit');
        setOutfits(response.data);
      } catch (error) {
        console.error('Error fetching outfits:', error);
      }
    };

    fetchOutfits();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="outfits-gallery mt-8">
      <h2 className="text-2xl mb-4 text-center"></h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {outfits.map(outfit => (
          <div
            key={outfit._id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-60"
            onClick={() => openModal(outfit.url)}
          >
            <img src={outfit.url} alt={outfit.public_id} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
      <ImagePreviewModal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default OutfitsGallery;
