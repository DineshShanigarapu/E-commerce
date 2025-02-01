import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      image: 'https://ecomusnext-themesflat.vercel.app/images/products/white-1.jpg',
      name: 'Ribbed Tank Top',
      price: 16.95,
      colors: ['White', 'Black'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      image: 'https://ecomusnext-themesflat.vercel.app/images/products/purple.jpg',
      name: 'Ribbed Modal T-shirt',
      price: 18.95,
      colors: ['Brown', 'Green', 'Purple'],
      sizes: [],
    },
    {
      image: 'https://ecomusnext-themesflat.vercel.app/images/products/white-3.jpg',
      name: 'Oversized Printed T-shirt',
      price: 10.00,
      colors: ['-'],
      sizes: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-[65vw]">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
