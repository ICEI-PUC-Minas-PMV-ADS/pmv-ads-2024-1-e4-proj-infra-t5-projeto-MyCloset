import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import colorMap from '../Maps/ColorMap'
import categoryMap from '../Maps/CategoryMap';

const ItemDetailsModal = ({ isOpen, onClose, image, onDelete }) => {
  if (!isOpen || !image) return null;

  const handleDelete = () => {
    const confirmDelete = window.confirm('Tem certeza que quer excluir essa peça?');
    if (confirmDelete) {
      onDelete(image._id);
      toast.success('Peça excluída com sucesso!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl mb-4"></h2>
        <img src={image.url} alt={image.public_id} className="w-full h-auto mb-4 rounded" />
        <p><strong>Categoria</strong> <img src={categoryMap[image.category]} alt={image.category} className="inline-block w-8 h-8" /></p>
        <p><strong>Cor</strong> <img src={colorMap[image.color]} alt={image.color} className="inline-block w-6 h-6 rounded-full" /></p>
        <p><strong>Size</strong> {image.size}</p>
        <button
          onClick={handleDelete}
          className="mt-4 bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-700"
        >
          Excluir
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetailsModal;
