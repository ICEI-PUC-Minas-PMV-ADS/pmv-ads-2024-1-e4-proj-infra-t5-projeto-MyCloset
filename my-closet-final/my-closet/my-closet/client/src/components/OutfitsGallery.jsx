import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagePreviewModal from '../Modals/ImagePreviewModal';
import { useSelector } from 'react-redux';

const OutfitsGallery = () => {
  const [outfits, setOutfits] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const response = await axios.get('/api/outfit', {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
        setOutfits(response.data);
      } catch (error) {
        console.error('Error fetching outfits:', error);
      }
    };

    fetchOutfits();
  }, [currentUser.token]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const deleteOutfit = async (id) => {
    try {
      await axios.delete(`/api/outfit/${id}`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      setOutfits(outfits.filter(outfit => outfit._id !== id));
    } catch (error) {
      console.error('Error deleting outfit:', error);
    }
  };

  return (
    <div className="outfits-gallery mt-8">
      <h2 className="text-2xl mb-4 text-center"></h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {outfits.map(outfit => (
          <div key={outfit._id} className="relative overflow-hidden rounded-lg shadow-md h-60">
            <img
              src={outfit.url}
              alt={outfit.public_id}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => openModal(outfit.url)}
            />
            <button
              onClick={() => deleteOutfit(outfit._id)}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-800"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <ImagePreviewModal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default OutfitsGallery;
