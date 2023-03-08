import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import '../../styles/global.css';
import game from './games.jpg';

export const Header: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);
  const { input = '', setInput, games } = React.useContext(GlobalContext);

  return (
    <>
      <div className="header">
        <h1 className="logo">Smart Games</h1>
        <input
          className="search"
          type="text"
          placeholder="Pesquise aqui..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <img src={game} alt="Diversos consoles" className="bigImg" />
    </>
  );
};
