import React, { useState } from "react";
import cardData from "./cards.json"; // Make sure this path is correct based on your file structure
import "./App.css";


const App = () => {
  const [selectedSetIndex, setSelectedSetIndex] = useState(null);
  const [cbc, setcbc] = useState(null);
  const [hiddenWhiteCards, setHiddenWhiteCards] = useState([]);
  const [cwc, setcwc] = useState(null);
  const [showWhiteCards, setShowWhiteCards] = useState(false);
  const [rbc, setrbc] = useState(false);
  const [rwc, setrwc] = useState([false, false, false, false, false]);
  const [revealedCardIndex, setRevealedCardIndex] = useState(null);
  const [image,setImage] = useState(true);

  const handleSetSelect = (index) => {
    setSelectedSetIndex(index);
    setcbc(null);
    setcwc(null);
    setShowWhiteCards(false);
    setrbc(false);
    setrwc([false, false, false, false, false]);
    setRevealedCardIndex(null);
  };
  const drawBlackCard = () => {
    const set = cardData[selectedSetIndex];
    const randomIndex = Math.floor(Math.random() * set.black.length);
    setcbc(set.black[randomIndex]);
    setcwc(null); 
    drawWhiteCards();
    setShowWhiteCards(false);
    setrbc(false);
    setrwc([false, false, false, false, false]);
    setRevealedCardIndex(null);
  };
  
  const combinedText = cbc && cwc && cbc.text.includes('_')
    ? cbc.text.replace(/_+/g, cwc.text)
    : `Q- ${cbc ? cbc.text : ''}  ${cwc ? cwc.text : ''}`;

  const drawWhiteCards = () => {
    const set = cardData[selectedSetIndex];
    const newWhiteCards = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * set.white.length);
      newWhiteCards.push(set.white[randomIndex]);
    }
    setHiddenWhiteCards(newWhiteCards);
    setRevealedCardIndex(null);
  };

  const revealWhiteCards = () => {
    setShowWhiteCards(true);
  };

  const handleBlackCardClick = () => {
    setrbc(true);
  };

  const handleWhiteCardClick = (index) => {
    if (revealedCardIndex === index) {
      setRevealedCardIndex(null);
      setcwc(null);
    } else {
      setRevealedCardIndex(index);
      setcwc(hiddenWhiteCards[index]);
    }
  };

  return (
    <div className="">
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Cards Against Humanity
      </h1>
      <div></div>
      {selectedSetIndex === null ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
         
          {cardData.map((set, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer border border-white"
              onClick={() => handleSetSelect(index)}
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{set.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-center"> 
          <button
            className="bg-yellow-500  text-white px-4 py-2 rounded mt-4"
            onClick={drawBlackCard}
          >
            Draw Black Card
          </button>
          </div>
          <div className="flex justify-center">
          {cbc && (
            <div
              className="bg-black text-white rounded-lg shadow-lg overflow-hidden w-60 h-80 content-center my-4 cursor-pointer p-4 sm:p-6"
              onClick={handleBlackCardClick}
            >
              <img src={rbc ? cbc.text : "https://i.imgur.com/UxZlfpg.png"} className="w-60" alt="" />
              <p className="text-gray-300 text-sm sm:text-base">
                {rbc ? cbc.text : "Click to reveal black card"}
              </p>
            </div>
          )}
          </div > 
          {cbc && !showWhiteCards && (
            <div className="flex justify-center">
            <button
              className="bg-yellow-500  text-white px-4 py-2 rounded mt-4"
              onClick={revealWhiteCards}
            >
              Reveal White Cards
            </button>
            </div>
          )}
          {showWhiteCards && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-4">
                  {hiddenWhiteCards.map((card, index) => (
                    <div
                      key={index}
                      className={`bg-white text-black rounded-lg shadow-lg w-60 h-80 justify-center overflow-hidden cursor-pointer p-4 sm:p-6 ${revealedCardIndex === index ? 'border-2 border-gray-200 text-2xl flex items-center justify-center' : ''}`}
                      onClick={() => handleWhiteCardClick(index)}
                    >
                      {revealedCardIndex === index ? cwc.text : (
                        <>
                          <img src="https://i.imgur.com/UxZlfpg.png" className="bg-gray-200 h-60" alt="" />
                          <p className="text-gray-500 text-sm flex justify-center align-middle sm:text-base">
                            Click to reveal
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          {cwc && (
            <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mt-4">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Combined Card
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {combinedText}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
