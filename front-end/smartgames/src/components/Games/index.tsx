import React from 'react';
import '../../styles/global.css';

interface Game {
  name: string;
  urlImg: string;
  platforms: string;
  price: number;
}

export const Games: React.FC = () => {
  const [games, setGames] = React.useState<Game[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:6060/games');
      const data = await response.json();
      setGames(data);
    } catch (error) {
      setError(
        'Ocorreu um erro ao processar os jogos. Reinicie a página, caso não funcione, mande mensagem para: johndoe@email.com'
      );
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="game-container">
      {games ? (
        games.map((game) => (
          <div className="game-card">
            <h2 className="game-title">{game.name}</h2>
            <img className="game-img" src={game.urlImg} />
            <p className="game-plat">{game.platforms}</p>
            <p className="game-price">R$ {game.price}</p>
            <button className="buy-btn">Comprar</button>
          </div>
        ))
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
