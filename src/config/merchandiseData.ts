interface MerchandiseItem {
    id: number;
    image: string;
    name: string;
    price: string;
    tags: string[];
}

const merchandiseData: MerchandiseItem[] = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "T-Shirt 1",
        price: "19.99",
        tags: ["shirts", "id_lace"],
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Jacket 1",
        price: "29.99",
        tags: ["jackets", "id_lace"],
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "T-Shirt 2",
        price: "39.99",
        tags: ["shirts", "id_lace"],
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        name: "Merchandise 4",
        price: "49.99",
        tags: ["shirts", "id_lace"],
    },
    {
        id: 5,
        image: "https://via.placeholder.com/150",
        name: "Merchandise 5",
        price: "59.99",
        tags: ["shirts", "id_lace"],
    },
    {
        id: 6,
        image: "https://via.placeholder.com/150",
        name: "Merchandise 6",
        price: "69.99",
        tags: ["shirts", "id_lace"],
    },
    {
        id: 7,
        image: "https://via.placeholder.com/150",
        name: "Merchandise 7",
        price: "79.99",
        tags: ["shirts", "id_lace"],
    },
    // Add more items as needed
];

export default merchandiseData;
