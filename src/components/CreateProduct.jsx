import React from 'react';

const CreateProduct = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
    <div className="p-8 w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
      <h1 className="text-2xl  mb-6">Create Product</h1>
      <form>
        <div className="mb-4">
        
          <input
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="productName"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          
          <input
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="price"
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="mb-4">
          
          <input
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="discount"
            type="number"
            placeholder="Discount in Percentage"
          />
        </div>
        <div className="mb-4">
          
          <input
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="stock"
            type="number"
            placeholder="Stock"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="description"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2" htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border rounded-sm"
            id="thumbnail"
            type="file"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] bg-black text-white py-3 hover:bg-gray-800  rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default CreateProduct;
