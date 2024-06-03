import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UploadModal from '../Modals/UploadModal';
import ItemDetailsModal from '../Modals/ItemDetailsModal';
import { FiMoreVertical } from 'react-icons/fi';
import { HeartIcon } from '@heroicons/react/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const profilePlaceholderUrl = 'https://via.placeholder.com/40'; 

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
        setFilteredImages(response.data);
        setFavorites(response.data.filter(image => image.favorite));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/images/${id}`);
      setImages(images.filter((image) => image._id !== id));
      setFilteredImages(filteredImages.filter((image) => image._id !== id));
      setFavorites(favorites.filter((image) => image._id !== id));
      setIsDetailsModalOpen(false); 
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleUpload = (newImage) => {
    setImages([newImage, ...images]);
    setFilteredImages([newImage, ...images]);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = images.filter(
      (image) =>
        image.color.toLowerCase().includes(query) ||
        image.category.toLowerCase().includes(query)
    );
    setFilteredImages(filtered);
  };

  const handleDetailsClick = (image) => {
    setSelectedImage(image);
    setIsDetailsModalOpen(true);
  };

  const toggleFavorite = async (image) => {
    try {
      const updatedImage = { ...image, favorite: !image.favorite };
      const response = await axios.put(`/api/images/${image._id}`, updatedImage);
      setImages(images.map(img => img._id === image._id ? response.data : img));
      setFilteredImages(filteredImages.map(img => img._id === image._id ? response.data : img));
      setFavorites(response.data.favorite ? [...favorites, response.data] : favorites.filter(fav => fav._id !== image._id));
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const displayedImages = showFavorites ? favorites : filteredImages;

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <div className="pl-5 flex flex-col items-start mb-4 w-full sm:w-1/2 mt-4 ml-2">
        <div className="flex items-center w-full mb-4">
          <Link to="/profile" className="flex items-center">
            <img
              src={currentUser ? currentUser.profilePicture : profilePlaceholderUrl}
              alt="profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            {currentUser && (
              <span className="font-bold ml-2 text-lg">Bem Vindo, {currentUser.username}.</span>
            )}
          </Link>
        </div>
        <div className="pr-5 flex items-center w-full">
          <input
            type="text"
            placeholder="Cor, Tamanho..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 border rounded flex-grow"
          />
          <button
            onClick={toggleShowFavorites}
            className="ml-2 text-gray-700 hover:text-red-500"
          >
            {showFavorites ? (
              <HeartIcon className="h-8 w-8 text-red-500" />
            ) : (
              <HeartIconOutline className="h-8 w-8 text-gray-500" />
            )}
          </button>
        </div>
      </div>
      {displayedImages.length === 0 ? (
        <p className="text-gray-500">No images available</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
          {displayedImages.map((image) => (
            <div key={image._id} className="relative overflow-hidden rounded-lg shadow-md flex flex-col">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={image.url}
                  alt={image.public_id}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => handleDetailsClick(image)}
                  className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-2 hover:text-black"
                >
                  <FiMoreVertical size={20} />
                </button>
                <button
                  onClick={() => toggleFavorite(image)}
                  className="absolute top-2 left-2 text-gray-700 bg-white rounded-full p-2 hover:text-red-500"
                >
                  {image.favorite ? (
                    <HeartIcon className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIconOutline className="h-6 w-6 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-500 z-50"
      >
        +
      </button>
      <UploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUpload}
      />
      <ItemDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        image={selectedImage}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ImageGallery;
