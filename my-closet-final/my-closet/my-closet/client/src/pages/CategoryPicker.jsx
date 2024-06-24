import React from 'react';
import categoryMap from '../Maps/CategoryMap';

const CategoryPicker = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(categoryMap).map((category) => (
        <div
          key={category}
          className={`cursor-pointer p-1 m-1 rounded ${selectedCategory === category ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          <img
            src={categoryMap[category]}
            alt={category}
            className="w-12 h-12"
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryPicker;
