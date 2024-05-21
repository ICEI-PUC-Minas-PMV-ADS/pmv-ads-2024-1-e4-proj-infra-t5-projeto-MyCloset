import React, { useState } from 'react';
import Modal from 'react-modal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

const AddItemModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [itemCategory, setItemCategory] = useState('');
  const [itemImage, setItemImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newItemId = uuidv4();

   
    let newItem = { id: newItemId, itemCategory, itemImage: null };

    if (itemImage) {
     
      const imageRef = ref(storage, `images/${itemCategory}/${itemImage.name + newItemId}`);
      await uploadBytes(imageRef, itemImage);
      const imageUrl = await getDownloadURL(imageRef);


      newItem = { ...newItem, itemImage: imageUrl };
    }

  
    onSubmit(newItem);

    setItemCategory('');
    setItemImage(null);
    onRequestClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setItemImage(file);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Item Modal"
    >
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <select
          id="itemCategory"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="bottom">Bottom</option>
          <option value="top">Top</option>
          <option value="shoes">Shoes</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Add Item</button>
        <br></br>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddItemModal;
