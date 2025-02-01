import React, { useState } from 'react';
import Pagination from '../components/Paginaton';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$15', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$20', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$25', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$30', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', price: '$35', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 7, name: 'Product 7', description: 'Description of Product 7', price: '$40', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg' },
  { id: 8, name: 'Product 8', description: 'Description of Product 8', price: '$45', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 9, name: 'Product 9', description: 'Description of Product 9', price: '$50', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg' },
  { id: 10, name: 'Product 10', description: 'Description of Product 10', price: '$55', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg' },
  { id: 11, name: 'Product 11', description: 'Description of Product 11', price: '$60', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg' },
  { id: 12, name: 'Product 12', description: 'Description of Product 12', price: '$65', image: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg' }
];

const ITEMS_PER_PAGE = 6;

const NewArrivals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // We are limiting to 4 pages of 6 items each.

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col items-center px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-8 mt-4">SHOP BY CATEGORIES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full">
        {currentProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-70 object-cover rounded-lg"
            />
            <button className="mt-2 text-lg bg-white hover:bg-black hover:text-white transition duration-300 p-2 rounded">
              {product.name}
            </button>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default NewArrivals;
