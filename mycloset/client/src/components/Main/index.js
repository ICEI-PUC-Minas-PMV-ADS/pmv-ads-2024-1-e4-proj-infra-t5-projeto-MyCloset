import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AddItemModal from './AddItemModal';
import ItemDetailsModal from './ItemDetailsModal';
import { getDownloadURL, ref, listAll, deleteObject } from 'firebase/storage';
import { storage } from './firebase';
import styles from './styles.module.css';
import { Navigate } from 'react-router-dom';
import { Route, useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [images, setImages] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const bottomImageList = await listAll(ref(storage, 'images/bottom'));
      const topImageList = await listAll(ref(storage, 'images/top'));
      const shoesImageList = await listAll(ref(storage, 'images/shoes'));

      const processImageList = async (imageList) => {
        return await Promise.all(imageList.items.map(async (imageRef) => {
          const url = await getDownloadURL(imageRef);
          return { url, refPath: imageRef.fullPath };
        }));
      };

      const bottomImages = await processImageList(bottomImageList);
      const topImages = await processImageList(topImageList);
      const shoesImages = await processImageList(shoesImageList);

      const allImages = [...bottomImages, ...topImages, ...shoesImages];
      
      setImages(allImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openItemDetails = (item) => {
    setSelectedItem(item);
    setIsItemDetailsOpen(true);
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
    setIsItemDetailsOpen(false);
  };

  const handleAddItem = async (newItem) => {
    try {
      setImages([...images, newItem]);
      await fetchImages();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const removeImage = async (selectedItem) => {
    try {
      await deleteObject(ref(storage, selectedItem.refPath));
      const newImages = images.filter(item => item.refPath !== selectedItem.refPath);
      setImages(newImages);
      closeItemDetails();
    } catch (error) {
      console.error('Error removing image:', error);
    }
  };

  const filterByCategory = (category) => {
    setCategoryFilter(category);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  const navigate = useNavigate();

  const handleProfileRedirect = () => {
    navigate('/Profile');
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
  <a href="https://seusite.com"><img src="https://i.ibb.co/tqYY1Ds/958f1359-906f-4eea-ae4b-36645dfedb78.png" alt="Logo" className={styles.logo} /></a>

        <button className={styles.white_btn} onClick={handleProfileRedirect}>
                  Perfil
        </button>

        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className={styles.search_line}></div>
      <div className={styles.item_list}>
        <button className={`${styles.white_btn} ${styles.item}`} onClick={() => filterByCategory(null)}>All</button>
        <button className={`${styles.white_btn} ${styles.item}`} onClick={() => filterByCategory('bottom')}>Bottom</button>
        <button className={`${styles.white_btn} ${styles.item}`} onClick={() => filterByCategory('top')}>Top</button>
        <button className={`${styles.white_btn} ${styles.item}`} onClick={() => filterByCategory('shoes')}>Shoes</button>
      </div>
      <div className={styles.item_list}>
        {images
          .filter((image) => !categoryFilter || (image.refPath && image.refPath.includes(categoryFilter)))
          .map((image, index) => (
            <div key={index} className={styles.item}>
              <img src={image.url} alt={`Preview ${index}`} className={styles.item_image} />
              <button className={styles.detailsButton} onClick={() => openItemDetails(image)}>...</button>
            </div>
        ))}
      </div>
      <button onClick={openModal} className={`${styles.fixed_button} ${styles.fixed_button_container}`}>+</button>
      <AddItemModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSubmit={handleAddItem}
      />
      {selectedItem && (
        <ItemDetailsModal
          isOpen={isItemDetailsOpen}
          onRequestClose={closeItemDetails}
          selectedItem={selectedItem}
          onRemoveItem={removeImage}
        />
      )}
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
