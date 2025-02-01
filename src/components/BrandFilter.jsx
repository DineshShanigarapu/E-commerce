import React, { useState } from "react";

export default function BrandFilter() {
  const [brands, setBrands] = useState({
    ecomus: true,
    msh: true,
  });

  const handleChange = (e) => {
    setBrands({ ...brands, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <h3 className="font-semibold text-lg mb-2"></h3>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="ecomus" checked={brands.ecomus} onChange={handleChange} />
        <span>Ecomus (9)</span>
      </label>
      <label className="flex items-center space-x-2 mt-2">
        <input type="checkbox" name="msh" checked={brands.msh} onChange={handleChange} />
        <span>MSH (3)</span>
      </label>
    </div>
  );
}
