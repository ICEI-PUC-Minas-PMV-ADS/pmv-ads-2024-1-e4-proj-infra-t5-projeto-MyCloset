import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const ImageSelectionModal = ({ isOpen, onClose, onSelectImage, filter }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const fetchImages = async () => {
        try {
          const response = await axios.get('/api/images');
          const filteredImages = response.data.filter(image => image.category === filter);
          setImages(filteredImages);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }
  }, [isOpen, filter]);

  if (!isOpen) return null;

  // sempre 9 slides 3 per view
  const totalSlides = Math.max(9, images.length);
  const emptySlides = totalSlides - images.length;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Selecionar {filter}</h2>
        <Swiper spaceBetween={10} slidesPerView={3} loop={false}>
          {images.map(image => (
            <SwiperSlide key={image._id}>
              <div className="cursor-pointer">
                <img
                  src={image.url}
                  alt={image.public_id}
                  onClick={() => {
                    onSelectImage(image);
                    onClose();
                  }}
                  className="w-full h-24 object-contain rounded"
                />
              </div>
            </SwiperSlide>
          ))}
          {Array.from({ length: emptySlides }).map((_, index) => (
            <SwiperSlide key={`empty-${index}`}>
              <div className="w-full h-24 bg-gray-200 rounded"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mt-4">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ImageSelectionModal;
