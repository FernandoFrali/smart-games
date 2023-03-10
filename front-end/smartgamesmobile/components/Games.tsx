import React from 'react';
import { Text, View, Image } from 'react-native';

export const Games: React.FunctionComponent = () => {
  const [games, setGames] = React.useState(null);

  const fetchData = async () => {
    const response = await fetch('http://localhost:6060/games');
    const data = await response.json();

    setGames(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {games ? (
        games.map((game) => (
          <View key={game.id}>
            <Text>{game.name}</Text>
            <Image
              style={{
                width: '100%',
                height: 350,
                borderRadius: 4,
              }}
              source={{
                uri: game.urlImg,
              }}
            />
            <Text>{game.platforms}</Text>
            <Text>R$ {game.price}</Text>
          </View>
        ))
      ) : (
        <Text>Não há jogos</Text>
      )}
    </View>
  );
};
