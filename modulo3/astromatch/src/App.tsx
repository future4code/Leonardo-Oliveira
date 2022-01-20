import React from 'react';
import { Card } from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Card />
    </div>
  );
};

export default App;
