import React, { useState } from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  const [rating, setRating] = useState(parseInt(player.rating));

  return (
    <div className="card-container">
      <div className="card">
        <div className="player-card">
          <h3>{player.name}</h3>
          <p>"{player.description}"</p>
        </div>
        <div className="ratings">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`circle ${value <= rating ? 'shaded' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
