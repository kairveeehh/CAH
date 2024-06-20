import React, { useState } from 'react';
import cardData from '../data/cards.json';
import SetSelector from './SetSelector';
import CardChooser from './CardChooser';
import Result from './Result';

const Game = () => {
    const [ss, setSelectedSetIndex] = useState(null);
    const [cbc, setcbc] = useState(null);
    const [cwc, setcwc] = useState(null);

    const handleSetSelect = (index) => {
        setSelectedSetIndex(index);
        setcbc(null);
        setcwc(null);
    };

    const handleCardChoice = (blackCard, whiteCard) => {
        setcbc(blackCard);
        setcwc(whiteCard);
    };

    return (
        <div className="game-container">
            <h1>CAH</h1>
            {ss === null ? (
                <SetSelector sets={cardData} onSelectSet={handleSetSelect} />
            ) : (
                <CardChooser set={cardData[ss]} onChooseCard={handleCardChoice} />
            )}
            {cbc && cwc && (
                <Result blackCard={cbc} whiteCard={cwc} />
            )}
        </div>
    );
};

export default Game;
