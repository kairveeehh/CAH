import React from 'react';

const SetSelector = ({ sets, onSelectSet }) => {
    return (
        <div>
            <h2>Select a Set</h2>
            <ul>
                {sets.map((set, index) => (
                    <li key={index}>
                        <button onClick={() => onSelectSet(index)}>{set.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SetSelector;
