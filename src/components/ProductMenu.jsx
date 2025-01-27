import React, { useState } from "react";
import { Star } from "lucide-react";

const ProductMenu = () => {
  const [products, setProducts] = useState([
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-1.png",
      name: "Black T-shirt",
      sizes: ["S", "M", "L", "XL"],
      price: "$80.00",
      stock: { left: 486, sold: 155 },
      category: "Fashion",
      rating: { value: 4.5, reviews: 55 },
    },
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-2.png",
      name: "Olive Green Leather Bag",
      sizes: ["S", "M"],
      price: "$136.00",
      stock: { left: 784, sold: 674 },
      category: "Hand Bag",
      rating: { value: 4.1, reviews: 143 },
    },
    {
      image: "https://techzaa.in/larkon/admin/assets/images/product/p-4.png",
      name: "Women Golden Dress",
      sizes: ["S", "M"],
      price: "$219.00",
      stock: { left: 769, sold: 180 },
      category: "Fashion",
      rating: { value: 4.4, reviews: 174 },
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
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">All Product List</h2>
        <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md">
          <a href="/new">Add Product</a>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-md">
          <thead className="text-left text-sm uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">Product Name & Size</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t text-gray-700">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Size: {product.sizes.join(", ")}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">{product.price}</td>
                <td className="px-4 py-3">
                  <p>{product.stock.left} Item Left</p>
                  <p className="text-sm text-gray-500">{product.stock.sold} Sold</p>
                </td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3 flex items-center space-x-1">
                  <Star className="text-yellow-500 w-4 h-4" />
                  <span>{product.rating.value}</span>
                  <p className="text-sm text-gray-500">
                    ({product.rating.reviews} Reviews)
                  </p>
                </td>
                <td className="px-4 py-3 flex justify-center items-center space-x-4">
                  <button
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => handleView(product)}
                  >
                    <span className="text-black left-40 bottom-14 relative" role="img" aria-label="view">
                      👁️
                    </span>
                  </button>
                  <button
                    className="p-2 rounded-md hover:bg-gray-100 left-36 bottom-14 "
                    onClick={() => handleEdit(product)}
                  >
                    <span className="text-black left-36 bottom-14 relative" role="img" aria-label="edit">
                      ✏️
                    </span>
                  </button>
                  <button
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => handleDelete(product)}
                  >
                    <span className="text-black left-32 bottom-14 relative" role="img" aria-label="delete">
                      🗑️
                    </span>
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
