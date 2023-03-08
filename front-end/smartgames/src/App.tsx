import React from 'react';
import { Games } from './components/Games/index';
import { Header } from './components/Header/index';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Header />
        <Games />
      </GlobalStorage>
    </div>
  );
}

export default App;
