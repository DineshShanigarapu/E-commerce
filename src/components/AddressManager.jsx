import React, { useState } from "react";

const AddressManager = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "themesflat",
      street: "1234 Fashion Street, Suite 567",
      city: "New York",
      email: "info@fashionshop.com",
      phone: "(212) 555-1234",
      isDefault: true,
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    email: "",
    phone: "",
    country: "",
    zip: "",
    isDefault: false,
  });

  const handleAddNew = () => {
    setEditingAddress(null);
    setNewAddress({
      name: "",
      street: "",
      city: "",
      email: "",
      phone: "",
      country: "",
      zip: "",
      isDefault: false,
    });
    setIsFormOpen(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setNewAddress(address);
    setIsFormOpen(true);
  };

  const handleSave = () => {
    if (editingAddress) {
      setAddresses(
        addresses.map((addr) => (addr.id === editingAddress.id ? newAddress : addr))
      );
    } else {
      setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    }
    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="p-6 w-full md:w-2/3 mx-auto">
      {/* Add New Address Button */}
      <button
        onClick={handleAddNew}
        className="bg-black text-white px-6 py-2 rounded-sm hover:bg-gray-800 transition"
      >
        Add a new address
      </button>

      {/* Address Form (Visible only when adding or editing) */}
      {isFormOpen && (
        <div className="mt-6 p-4 ">
          <h2 className="text-2xl font-semibold mb-6">
            {editingAddress ? "Edit Address" : "Add a new address"}
          </h2>
          <form>
            {/* Input fields in 1 column on mobile, 2 columns on tablet and larger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border rounded-sm focus:outline-none"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border rounded-sm focus:outline-none"
                value={newAddress.street}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, street: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full px-4 py-3 border rounded-sm focus:outline-none mb-4"
              value={newAddress.city}
              onChange={(e) =>
                setNewAddress({ ...newAddress, city: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-3 border rounded-sm focus:outline-none mb-4"
              value={newAddress.email}
              onChange={(e) =>
                setNewAddress({ ...newAddress, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 border rounded-sm focus:outline-none mb-4"
              value={newAddress.phone}
              onChange={(e) =>
                setNewAddress({ ...newAddress, phone: e.target.value })
              }
            />
            {/* Country select dropdown */}
            <div className="mb-4">
              <select
                className="w-full px-4 py-3 border rounded-sm focus:outline-none"
                value={newAddress.country}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, country: e.target.value })
                }
              >
                <option value="">Country/Region</option>
                <option value="">India</option>
                <option value="">USA</option>
                <option value="">UK</option>
                <option value="">Canada</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Postal/ZIP code"
              className="w-full px-4 py-3 border rounded-sm focus:outline-none mb-4"
              value={newAddress.zip}
              onChange={(e) =>
                setNewAddress({ ...newAddress, zip: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 border rounded-sm focus:outline-none mb-4"
              value={newAddress.phone}
              onChange={(e) =>
                setNewAddress({ ...newAddress, phone: e.target.value })
              }
            />
            {/* Default address checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="defaultAddress"
                className="mr-2"
                checked={newAddress.isDefault}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, isDefault: e.target.checked })
                }
              />
              <label htmlFor="defaultAddress">Set as default address</label>
            </div>
            {/* Save and Cancel buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleSave}
                className="bg-black text-white py-2 px-4"
              >
                {editingAddress ? "Save" : "Add address"}
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="bg-gray-300 text-black py-2 px-4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Address List */}
      {addresses.map((address) => (
        <div
          key={address.id}
          className="mt-6 p-4 border rounded-lg shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold">
            {address.isDefault ? "Default" : "Address"}
          </h2>
          <p className="text-gray-700">{address.name}</p>
          <p className="text-gray-700">{address.street}</p>
          <p className="text-gray-700">{address.city}</p>
          <p className="text-gray-700">{address.email}</p>
          <p className="text-gray-700">{address.phone}</p>

          {/* Edit and Delete buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => handleEdit(address)}
              className="bg-black text-white px-4 py-2 rounded-sm"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(address.id)}
              className="border border-black px-4 py-2 rounded-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressManager;
