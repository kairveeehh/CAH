import React, { useState } from 'react';

const CardChooser = ({ set, onChooseCard }) => {
    const [currentBlackCard, setCurrentBlackCard] = useState(null);
    const [hiddenWhiteCards, setHiddenWhiteCards] = useState([]);
    const [showWhiteCards, setShowWhiteCards] = useState(false);

    const drawBlackCard = () => {
        const randomIndex = Math.floor(Math.random() * set.black.length);
        setCurrentBlackCard(set.black[randomIndex]);
        drawWhiteCards();
        setShowWhiteCards(false);
    };

    const drawWhiteCards = () => {
        const newWhiteCards = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * set.white.length);
            newWhiteCards.push(set.white[randomIndex]);
        }
        setHiddenWhiteCards(newWhiteCards);
    };

    const revealWhiteCards = () => {
        setShowWhiteCards(true);
    };

    return (
        <div>
            <h2>Draw a Black Card</h2>
            {currentBlackCard ? (
                <div>
                    <p>{currentBlackCard.text}</p>
                </div>
            ) : (
                <button onClick={drawBlackCard}>Draw Black Card</button>
            )}

            {currentBlackCard && (
                <div>
                    <h2>Draw White Cards</h2>
                    {!showWhiteCards ? (
                        <button onClick={revealWhiteCards}>Reveal White Cards</button>
                    ) : (
                        <ul>
                            {hiddenWhiteCards.map((card, index) => (
                                <li key={index}>
                                    <button onClick={() => onChooseCard(currentBlackCard, card)}>{card.text}</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default CardChooser;
