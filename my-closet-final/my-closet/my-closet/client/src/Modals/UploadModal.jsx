import React, { useState } from 'react';
import axios from 'axios';
import ColorPicker from '../pages/ColorPicker';
import CategoryPicker from '../pages/CategoryPicker';
import { useSelector } from 'react-redux';

const UploadModal = ({ isOpen, onClose, onUpload }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const { currentUser } = useSelector((state) => state.user);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('category', category);
    formData.append('color', color);
    formData.append('size', size);

    try {
      const response = await axios.post('/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      onUpload(response.data);
      onClose();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Upar imagem</h2>
        <div className="mb-4 flex justify-center">
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            {preview ? (
              <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded" />
            ) : (
              <img
                src="/assets/choose-file-icon.png"
                alt="Choose file"
                className="w-12 h-12"
              />
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="mb-4">
          <CategoryPicker selectedCategory={category} onCategorySelect={setCategory} />
        </div>
        <div className="mb-4">
          <ColorPicker selectedColor={color} onColorSelect={setColor} />
        </div>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        >
          <option value="">Selecionar Tamanho</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
        </select>
        <div className="mt-4">
          <button
            onClick={handleUpload}
            className="bg-black text-white px-4 py-2 rounded mr-2 hover:bg-slate-500"
          >
            Adicionar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
