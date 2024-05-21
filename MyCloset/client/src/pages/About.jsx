import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AddItemModal from './AddItemModal';
import ItemDetailsModal from './ItemDetailsModal';
import { getDownloadURL, ref, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../firebase';
import styles from './styles.module.css';

Modal.setAppElement('#root');

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [images, setImages] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false); 
  const [favorites, setFavorites] = useState([]);

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
      console.error('Error adicionando o item:', error);
    }
  };

  const removeImage = async (selectedItem) => {
    try {
      await deleteObject(ref(storage, selectedItem.refPath));
      const newImages = images.filter(item => item.refPath !== selectedItem.refPath);
      setImages(newImages);
      closeItemDetails();
    } catch (error) {
      console.error('Error removendo a image:', error);
    }
  };

  const filterByCategory = (category) => {
    setCategoryFilter(category);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleFavorite = () => {
  };

  const toggleFavorite = (image) => {
    if (isFavorite(image)) {
      removeFromFavorites(image);
    } else {
      addToFavorites(image);
    }
  };

  const isFavorite = (image) => {
    return favorites.some((fav) => fav.refPath === image.refPath);
  };

  const addToFavorites = (image) => {
    setFavorites([...favorites, image]);
  };

  const removeFromFavorites = (image) => {
    const updatedFavorites = favorites.filter((fav) => fav.refPath !== image.refPath);
    setFavorites(updatedFavorites);
  };

  return (
    <div>

      <div className={styles.navbar1}>
        <button className={styles.navButton}>Items</button>
        <button className={styles.navButton}>Outfit</button>
        <button className={styles.navButton}>Lookboard</button>
      </div>

      <div className={styles.navbar}>
        <div className={styles.search_section}>
          <div className={styles.search_container}>
            <input type="text" className={styles.search_input} placeholder="Pesquisar..." />
          </div>
          <button className={styles.favoriteButton} onClick={handleFavorite}>♡</button>
        </div>
        <div>
          <button
            className={`${styles.btn} ${styles.category_popup_button}`}
            onClick={() => setIsCategoryPopupOpen(!isCategoryPopupOpen)}>  </button>
          {isCategoryPopupOpen && (
            <div className={styles.category_popup}>
              <button className={`${styles.white_btn}`} onClick={() => filterByCategory(null)}>All</button>
              <button className={`${styles.white_btn}`} onClick={() => filterByCategory('bottom')}>Bottom</button>
              <button className={`${styles.white_btn}`} onClick={() => filterByCategory('top')}>Top</button>
              <button className={`${styles.white_btn}`} onClick={() => filterByCategory('shoes')}>Shoes</button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.item_list}>
        {images
          .filter((image) => !categoryFilter || (image.refPath && image.refPath.includes(categoryFilter)))
          .map((image, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.favoriteIcon} onClick={() => toggleFavorite(image)}>
                {isFavorite(image) ? '❤️' : '♡'}
              </button>
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
      <Modal isOpen={isSettingsOpen} onRequestClose={closeSettings}>
        <h2>Settings</h2>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={closeSettings}>Close</button>
      </Modal>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;