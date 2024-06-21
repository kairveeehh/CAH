import React from 'react';
import Game from './components/Game';
import './App.css';
import Cards from './components/Cards';

const App = () => {
    return (
        <div className="App">
            <Game />
            <Cards />
        </div>
    );
};

export default App;
