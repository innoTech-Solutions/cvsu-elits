import Image from 'next/image';
import React from 'react';

interface MerchandiseCardProps {
  image: string;
  name: string;
  price: string;
  onBuy: () => void;
}

const MerchandiseCard: React.FC<MerchandiseCardProps> = ({ image, name, price, onBuy }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <Image className="w-full h-48 object-cover" src={image} alt={name} width={0} height={0} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-orange-600">{name}</div>
        <p className="text-gray-600 text-base">${price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={onBuy}
          className="bg-gray-800 hover:bg-orange-600 w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MerchandiseCard;
