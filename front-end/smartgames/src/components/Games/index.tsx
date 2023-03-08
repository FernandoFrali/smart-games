import React, { useContext } from 'react';
import '../../styles/global.css';
import Modal from 'react-modal';
import Map from '../Map/index';
import { GlobalContext } from '../../GlobalContext';
import { Subtitle } from './Interfaces';
import { customStyles } from './styles/CustomStyle';

Modal.setAppElement('#root');

export const Games: React.FC = () => {
  let subtitle: Subtitle | null;
  const { input = '', games, setGames, error } = useContext(GlobalContext);
  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let gameKeys = [];

  const filteredGames = games?.filter((game) =>
    game.name.toLowerCase().includes(input.toLowerCase())
  );

  const afterOpenModal = () => {
    if (subtitle) subtitle.style.color = 'blue';
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedGameIndex(false);
    setIsOpen(false);
  };

  const handleBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const game = event?.currentTarget.id;
    alert(`Compra concluída com sucesso! Você comprou: ${game}`);
  };

  if (games && games.length > 0 && filteredGames) {
    gameKeys = Object.keys(filteredGames[0] || {});
  }

  return (
    <div className="game-container">
      {filteredGames ? (
        filteredGames.map((game, index) => (
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
                  <div>
                    <p>Onde comprar:</p>
                    <Map stores={game.stores} />
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
