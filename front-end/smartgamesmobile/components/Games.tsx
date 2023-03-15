import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';

interface IStyles {
  container: ViewStyle;
  gameContainer: ViewStyle;
  text: TextStyle;
  smallTexts: TextStyle;
  image: ImageStyle;
  modalContainer: ViewStyle;
  modalContent: ViewStyle;
  modalText: TextStyle;
}

interface IGame {
  id: number;
  name: string;
  platforms: string;
  price: number;
  urlImg: string;
  description: string;
}

export const Games: React.FunctionComponent = () => {
  const [games, setGames] = React.useState<IGame[]>([]);
  const [isVisible, setVisible] = React.useState(false);
  const [error, setError] = React.useState('');

  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);

  const closeModal = () => {
    setSelectedGameIndex(false);
    setVisible(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.0.193:19001/games');
      const data = await response.json();
      console.log(data, 'texto');
      setGames(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const postData = async (game: string, id: number) => {
    try {
      const response = await fetch('http://10.0.0.193:19001/purchased', {
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

  const styles = StyleSheet.create<IStyles>({
    container: {
      display: 'flex',
    },
    gameContainer: {
      alignItems: 'center',
    },
    text: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    smallTexts: {
      marginBottom: 5,
    },
    image: {
      width: '50%',
      height: 350,
    },
    modalContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 4,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
  console.log(games);
  return (
    <View style={styles.container}>
      {games.length ? (
        <FlatList
          data={games}
          renderItem={({ item: game, index }) => (
            <View style={styles.gameContainer} key={game.id}>
              <Text style={styles.text}>{game.name}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: game.urlImg,
                }}
              />
              <Text>{game.platforms}</Text>
              <Text style={styles.smallTexts}>R$ {game.price}</Text>
              <Button
                title="Comprar"
                color="#841584"
                onPress={() => setSelectedGameIndex(index)}
              />
              <Modal
                visible={selectedGameIndex === index}
                onRequestClose={closeModal}
                onDismiss={closeModal}
              >
                <View style={styles.modalContainer}>
                  <Button title="Fechar" onPress={closeModal} />
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{game.name}</Text>
                    <Image
                      style={styles.image}
                      source={{
                        uri: game.urlImg,
                      }}
                    />
                    <Text style={styles.smallTexts}>{game.description}</Text>
                    <Button
                      title={`Comprar ${game.name}`}
                      onPress={() => handleBuy(game.id, game.name)}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          )}
        />
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};
