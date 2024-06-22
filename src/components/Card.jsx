// Card.jsx
import React from 'react';

const Card = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={onClick}>
      {imageSrc && (
        <img src={imageSrc} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
