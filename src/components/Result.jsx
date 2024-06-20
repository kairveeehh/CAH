import React from 'react';

const Result = ({ blackCard, whiteCard }) => {
    return (
        <div>
            <h2>Result</h2>
            <p><strong>Black Card:</strong> {blackCard.text}</p>
            <p><strong>White Card:</strong> {whiteCard.text}</p>
        </div>
    );
};

export default Result;
