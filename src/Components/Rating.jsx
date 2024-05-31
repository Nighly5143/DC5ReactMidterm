import React from 'react';
import './Rating.css';

const Rating = ({ initialValue, onChange }) => {
  const handleClick = (value, event) => {
    event.preventDefault();
    onChange(value);
  };

  return (
    <div className="rating">
      <h1>Rating:</h1>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= initialValue ? 'shaded' : ''}`}
          onClick={(event) => handleClick(value, event)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
