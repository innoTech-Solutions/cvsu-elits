import React from 'react';
import MerchandiseCard from './MerchandiseCard';

interface MerchandiseItem {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface MerchandiseListProps {
  items: MerchandiseItem[];
}

const MerchandiseList: React.FC<MerchandiseListProps> = ({ items }) => {
  const handleBuy = (item: MerchandiseItem) => {
    alert(`Buying ${item.name}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-10">
      {items.map((item) => (
        <MerchandiseCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          onBuy={() => handleBuy(item)}
        />
      ))}
    </div>
  );
};

export default MerchandiseList;
