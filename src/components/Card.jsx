// Card.jsx
import React from 'react';

const Card = () => {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer" >
      {  (
        <img src='noo' alt= 'Boobs' width={600} height={400} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Tit Le</h3>
        <p className="text-muted-foreground text-sm sm:text-base">description</p>
      </div>
    </div>
  );
};

export default Card;
