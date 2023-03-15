import React, { useContext } from 'react';
import '../../styles/global.css';
import Modal from 'react-modal';
import Map from '../Map/index';
import { GlobalContext } from '../../GlobalContext';
import { Subtitle } from './Interfaces';
import { customStyles } from './styles/CustomStyle';

Modal.setAppElement('#root');

export const Games: React.FC = () => {
  const { input = '', games, error, setError } = useContext(GlobalContext);
  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let subtitle: Subtitle | null;
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

  const postData = async (game: string, id: number) => {
    try {
      const response = await fetch('http://localhost:19001/purchased', {
        method: 'POST',
        body: JSON.stringify({
          gameName: game,
          gameId: id,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      return response.json();
    } catch (error) {
      setError('Não foi possível realizar a compra');
    }
  };

  const handleBuy = (id: number, name: string) => {
    postData(name, id);
    const buyAlert = error
      ? error
      : `Compra concluída com sucesso! Você comprou: ${name}
      Seu protocolo é: ${id}`;
    alert(buyAlert);
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
                  X
                </button>
                <div className="modal-container">
                  <h2 className="modal-title">{game.name}</h2>
                  <img className="modal-image" src={game.urlImg} />
                  <p className="game-desc">{game.description}</p>
                  {modalIsOpen ? (
                    <div className="modal-map">
                      <strong>Onde comprar:</strong>
                      <Map stores={game.stores} />
                      <p className="stores">{game.stores}</p>
                    </div>
                  ) : null}
                  <button
                    className="buy-modal"
                    onClick={() => handleBuy(game.id, game.name)}
                  >
                    Comprar Jogo
                  </button>
                </div>
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
