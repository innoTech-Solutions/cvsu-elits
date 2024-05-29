import React from 'react';

interface MerchandiseCardProps {
  image: string;
  name: string;
  price: string;
  onBuy: () => void;
}

const MerchandiseCard: React.FC<MerchandiseCardProps> = ({ image, name, price, onBuy }) => {
  return (
    <div className="w-80 max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 transform transition duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <img className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" src={image} alt={name}/>
      <div className="p-4">
        <div className="font-bold text-2xl mb-2 text-orange-500">{name}</div>
        <p className="text-gray-600 text-base font-semibold">${price}</p>
      </div>
      <div className="p-4">
        <button
          onClick={onBuy}
          className="bg-orange-600 hover:bg-orange-500 hover:text-black w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MerchandiseCard;
