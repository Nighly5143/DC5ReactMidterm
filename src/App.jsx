import React from 'react';
import PlayerCard from './Components/PlayerCard';
import './App.css';

const App = () => {
  const player = [
    { "name": "Federer, Roger", "description": "Legendary tennis player known for his incredible skill and sportsmanship.", "rating": "5" },
    { "name": "Nadal, Rafael", "description": "One of the greatest tennis players of all time, famous for his powerful play and never-give-up attitude.", "rating": "4" },
    { "name": "Sinner, Jannik", "description": "Talented young tennis player with a promising future in the sport.", "rating": "2" }
  ];

  return (
    <div className="app">
      <h2>Player Lists</h2>
      <div className="cards">
        {player.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default App;
