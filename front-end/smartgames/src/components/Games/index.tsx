import React from 'react';
import '../../styles/global.css';
import Modal from 'react-modal';
import Map from '../Map/index';

interface Game {
  name: string;
  id: number;
  urlImg: string;
  platforms: string;
  price: number;
  description: string;
}

interface Subtitle {
  style: {
    color: string;
  };
}

interface ModalStyles {
  content: React.CSSProperties;
  overlay: React.CSSProperties;
}

const customStyles: ModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#161313',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#161313',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    display: 'grid',
    justifyItems: 'center',
    gap: '10px',
  },
};
Modal.setAppElement('#root');
export const Games: React.FC = () => {
  let subtitle: Subtitle | null;
  const [games, setGames] = React.useState<Game[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const afterOpenModal = () => {
    if (subtitle) subtitle.style.color = 'blue';
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedGameIndex(false);
    setIsOpen(false);
  };

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

  const handleBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const game = event?.currentTarget.id;
    alert(`Compra concluída com sucesso! Você comprou: ${game}`);
  };

  return (
    <div className="game-container">
      {games ? (
        games.map((game, index) => (
          <div className="game-card" key={game.id}>
            <h2 className="game-title">{game.name}</h2>
            <img className="game-img" src={game.urlImg} />
            <p className="game-plat">{game.platforms}</p>
            <p className="game-price">R$ {game.price}</p>
            <div>
              <button
                className="buy-btn"
                onClick={() => setSelectedGameIndex(index)}
              >
                Comprar
              </button>
              <Modal
                isOpen={selectedGameIndex === index}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => setSelectedGameIndex(null)}
                style={customStyles}
              >
                <button onClick={closeModal} className="close-modal">
                  Fechar
                </button>
                <h2 className="modal-title">{game.name}</h2>
                <img src={game.urlImg} />
                <p className="game-desc">{game.description}</p>
                {modalIsOpen ? (
                  <div className="map">
                    <p>Onde comprar:</p>
                    <Map />
                  </div>
                ) : null}
                <span className="stores">{game.stores}</span>
                <button
                  className="buy-modal"
                  id={game.name}
                  onClick={handleBuy}
                >
                  Comprar Jogo
                </button>
              </Modal>
            </div>
          </div>
        ))
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
