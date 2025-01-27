import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { name: 'Pharma-Product', status: 'Active', price: 59999, stock: 125, active: true },
    { name: 'Iphone', status: 'Active', price: 99999, stock: 50, active: true },
    { name: 'Samsung S24', status: 'Active', price: 10000, stock: 100, active: true },
    { name: 'Watch', status: 'Active', price: 5000, stock: 100, active: true },
  ]);

  const handleToggle = (index) => {
    const newProducts = [...products];
    newProducts[index].active = !newProducts[index].active;
    setProducts(newProducts);
  };

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Active</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.status}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={product.active}
                  onChange={() => handleToggle(index)}
                />
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-blue-500 hover:underline mx-2">Edit</button>
                <button
                  className="text-red-500 hover:underline mx-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
