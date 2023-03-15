import React, { ReactNode } from 'react';

interface GameContextType {
  games: Game[] | null;
  setGames: (games: Game[]) => void | null;
  error: string | null;
  input: string | undefined;
  setInput: (input: string) => void | string | null;
  setError: (error: string) => void | string | unknown;
}

export const GlobalContext = React.createContext<GameContextType>({
  games: null,
  setGames: (games: Game[]) => {},
  error: null,
  input: undefined,
  setInput: (input: string) => '',
  setError: (error: unknown) => '',
});

interface Game {
  name: string;
  id: number;
  urlImg: string;
  platforms: string;
  price: number;
  description: string;
  stores: string;
}

type Props = {
  children: ReactNode;
};

export const GlobalStorage: React.FC<Props> = ({ children }) => {
  const [games, setGames] = React.useState<Game[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [input, setInput] = React.useState('');

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:19001/games');
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
    <GlobalContext.Provider
      value={{ games, setGames, error, input, setInput, setError }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
