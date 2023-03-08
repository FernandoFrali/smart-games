import React from 'react';
import '../../styles/global.css';
import games from './games.jpg';

export const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <h1 className="logo">Smart Games</h1>
        <input className="search" type="text" placeholder="Pesquise aqui..." />
      </div>
      <img src={games} alt="Diversos consoles" className="bigImg" />
    </>
  );
};
