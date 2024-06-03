import React from 'react';
import colorMap from '../Maps/ColorMap';

const ColorPicker = ({ selectedColor, onColorSelect }) => {
  return (
    <div className="flex flex-wrap">
      {Object.keys(colorMap).map((color) => (
        <div
          key={color}
          className={`cursor-pointer p-1 m-1 rounded-full ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => onColorSelect(color)}
        >
          <img
            src={colorMap[color]}
            alt={color}
            className="w-8 h-8 rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
