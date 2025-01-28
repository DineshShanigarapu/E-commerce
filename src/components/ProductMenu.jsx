import React, { useState } from "react";

const ProductMenu = () => {
  const [products, setProducts] = useState([
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-1.png",
      name: "Black T-shirt",
      sizes: ["S", "M", "L", "XL"],
      price: "$80.00",
      stock: { left: 486, sold: 155 },
      category: "Fashion",
      status: "Active",
    },
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-2.png",
      name: "Olive Green Leather Bag",
      sizes: ["S", "M"],
      price: "$136.00",
      stock: { left: 784, sold: 674 },
      category: "Hand Bag",
      status: "Inactive",
    },
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-4.png",
      name: "Women Golden Dress",
      sizes: ["S", "M"],
      price: "$219.00",
      stock: { left: 769, sold: 180 },
      category: "Fashion",
      status: "Active",
    },
  ]);

  const handleView = (product) => {
    alert(`Viewing product: ${product.name}`);
  };

  const handleEdit = (product) => {
    alert(`Editing product: ${product.name}`);
  };

  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      setProducts(products.filter((p) => p !== product));
    }
  };

  return (
    <div className="p-6 bg-white  ">
      <div className="flex justify-between items-center mb-6 top-7">
        <h2 className="text-xl ">All Product List</h2>
        <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md">
          <a href="/new">Add Product</a>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded-lg shadow-md border border-gray-200">
          <thead className="bg-gray-100 text-left text-sm  text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3 w-12">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Product Name & Size</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-center">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">Size: {product.sizes.join(", ")}</p>
                  </div>
                </td>
                <td className="px-4 py-3  text-gray-800">{product.price}</td>
                <td className="px-4 py-3">
                  <p className=" text-gray-800">{product.stock.left} Item Left</p>
                  <p className="text-sm text-gray-500">{product.stock.sold} Sold</p>
                </td>
                <td className="px-4 py-3  text-gray-800">{product.category}</td>
                <td className="px-4 py-3  text-gray-800">{product.status}</td>
                <td className="px-4 py-3 flex justify-center items-center space-x-4">
                  <button
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => handleEdit(product)}
                  >
                    <span role="img" aria-label="edit" className="text-black">✏️</span>
                  </button>
                  <button
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => handleDelete(product)}
                  >
                    <span role="img" aria-label="delete" className="text-black">🗑️</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductMenu;
