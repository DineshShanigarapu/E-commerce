import React, { useState } from "react";

export default function AvailabilityFilter() {
  const [availability, setAvailability] = useState({
    available: true,
    outOfStock: true,
  });

  const handleChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="available" checked={availability.available} onChange={handleChange} />
        <span>Available (9)</span>
      </label>
      <label className="flex items-center space-x-2 mt-2">
        <input type="checkbox" name="outOfStock" checked={availability.outOfStock} onChange={handleChange} />
        <span>Out of Stock (3)</span>
      </label>
    </div>
  );
}
