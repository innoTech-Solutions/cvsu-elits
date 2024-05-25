interface MerchandiseItem {
    id: number;
    image: string;
    name: string;
    price: string;
  }
  
  const merchandiseData: MerchandiseItem[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Merchandise 1',
      price: '19.99',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Merchandise 2',
      price: '29.99',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Merchandise 3',
      price: '39.99',
    },
  ];
  
  export default merchandiseData;
  