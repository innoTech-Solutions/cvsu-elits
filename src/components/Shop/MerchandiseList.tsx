import React from "react";
import MerchandiseCard from "./MerchandiseCard";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {items.slice(0, 3).map((item) => (
                <div key={item.id} className="w-full sm:w-auto">
                    <MerchandiseCard
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        onBuy={() => handleBuy(item)}
                    />
                </div>
                // <MerchandiseCard
                //   key={item.id}
                //   image={item.image}
                //   name={item.name}
                //   price={item.price}
                //   onBuy={() => handleBuy(item)}
                // />
            ))}
        </div>
    );
};

export default MerchandiseList;
