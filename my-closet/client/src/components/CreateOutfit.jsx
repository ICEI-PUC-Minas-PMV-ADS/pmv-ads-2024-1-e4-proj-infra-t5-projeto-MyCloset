import React, { useState } from 'react';
import axios from 'axios';
import ImageSelectionModal from '../Modals/ImageSelectionModal';

const CreateOutfit = ({ onOutfitCreated }) => {
  const [topImage, setTopImage] = useState(null);
  const [bottomImage, setBottomImage] = useState(null);
  const [isTopModalOpen, setIsTopModalOpen] = useState(false);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);

  const handleCreateOutfit = async () => {
    try {
      const response = await axios.post('/api/outfit/merge', {
        topId: topImage._id,
        bottomId: bottomImage._id,
      });
      onOutfitCreated(response.data);
      setTopImage(null);
      setBottomImage(null);
    } catch (error) {
      console.error('Error creating outfit:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-8">
      <div className="flex flex-col items-center mb-4 space-y-8">
        <div className="text-center mt-4">
          <button
            onClick={() => setIsTopModalOpen(true)}
            className="w-40 h-40 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center"
          >
            {topImage ? <img src={topImage.url} alt="Top" className="w-full h-full object-cover" /> : '+'}
          </button>
          <p className="mt-2">Parte de cima</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => setIsBottomModalOpen(true)}
            className="w-40 h-40 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center"
          >
            {bottomImage ? <img src={bottomImage.url} alt="Bottom" className="w-full h-full object-cover" /> : '+'}
          </button>
          <p className="mt-2">Parte de baixo</p>
        </div>
      </div>
      <button
        onClick={handleCreateOutfit}
        className="bg-black text-white px-6 py-3 rounded w-64 disabled:opacity-50"
        disabled={!topImage || !bottomImage}
      >
        Criar Look
      </button>
      <ImageSelectionModal
        isOpen={isTopModalOpen}
        onClose={() => setIsTopModalOpen(false)}
        onSelectImage={setTopImage}
        filter="Top"
      />
      <ImageSelectionModal
        isOpen={isBottomModalOpen}
        onClose={() => setIsBottomModalOpen(false)}
        onSelectImage={setBottomImage}
        filter="Bottom"
      />
    </div>
  );
};

export default CreateOutfit;
