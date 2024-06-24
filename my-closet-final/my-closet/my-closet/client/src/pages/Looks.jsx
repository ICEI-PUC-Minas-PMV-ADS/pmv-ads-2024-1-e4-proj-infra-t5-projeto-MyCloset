import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateOutfit from '../components/CreateOutfit';
import OutfitsGallery from '../components/OutfitsGallery';

const App = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [outfits, setOutfits] = useState([]);

  const handleOutfitCreated = (newOutfit) => {
    setOutfits([newOutfit, ...outfits]);
    toast.success('Outifit salva na galleria');
    setActiveTab('gallery'); // trocar pra tab da galeria dps de criar look
  };

  return (
    <div className="App">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center my-8">Meus outfits</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`  rounded px-4 py-2 mr-2 ${activeTab === 'create' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('create')}
        >
          Adicionar
        </button>
        <button
          className={`rounded px-4 py-2 ${activeTab === 'gallery' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('gallery')}
        >
          Lookbook
        </button>
      </div>
      {activeTab === 'create' && <CreateOutfit onOutfitCreated={handleOutfitCreated} />}
      {activeTab === 'gallery' && <OutfitsGallery outfits={outfits} />}
    </div>
  );
};

export default App;
