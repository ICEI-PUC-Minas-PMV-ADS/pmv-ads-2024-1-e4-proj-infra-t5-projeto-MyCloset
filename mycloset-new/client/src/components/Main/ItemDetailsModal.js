import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from "./styles.module.css";

const ItemDetailsModal = ({ isOpen, onRequestClose, selectedItem, onRemoveItem }) => {
  if (!selectedItem) {
    return null;
  }

  // Function to extract the category from the Firebase reference path
  const getCategoryFromRefPath = (refPath) => {
    const parts = refPath.split('/');
    const category = parts.length > 1 ? parts[1] : 'Unknown'; // Assumes the category is in the second part of the path
    return category.charAt(0).toUpperCase() + category.slice(1); // Capitalizes the first letter of the category
  };

  const category = getCategoryFromRefPath(selectedItem.refPath);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Item Details"
      className={styles.modal}
      overlayClassName={styles.overlay}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '300px',
          maxWidth: '600px',
          maxHeight: '80%',
          overflowY: 'auto'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <button onClick={onRequestClose} className={styles.closeButton}>&times;</button>
      <h2>{selectedItem.itemName}</h2>
      <p>{selectedItem.itemDescription}</p>
      {selectedItem.url && (
        <div>
          <h3></h3>
          <img src={selectedItem.url} alt={`Preview of ${selectedItem.itemName}`} className={styles.item_preview} />
        </div>
      )}
      <div className={styles.actionsContainer}>
        <button onClick={() => onRemoveItem(selectedItem)}>Delete</button>
        <span className={styles.categoryLabel}>Category: {category}</span> {/* Category between the button and the preview */}
      </div>
    </Modal>
  );
};

ItemDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    itemDescription: PropTypes.string.isRequired,
    url: PropTypes.string,
    refPath: PropTypes.string.isRequired
  }),
  onRemoveItem: PropTypes.func.isRequired
};

export default ItemDetailsModal;