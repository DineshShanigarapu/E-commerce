import React, { useState } from "react";

export default function SizeFilter() {
  const [sizes, setSizes] = useState({
    S: true,
    M: true,
    L: true,
    XL: true,
  });

  const handleChange = (e) => {
    setSizes({ ...sizes, [e.target.name]: e.target.checked });
  };

  return (
    <div>
    
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="S" checked={sizes.S} onChange={handleChange} />
        <span>S (5)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="M" checked={sizes.M} onChange={handleChange} />
        <span>M (1)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="L" checked={sizes.L} onChange={handleChange} />
        <span>L (1)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="XL" checked={sizes.XL} onChange={handleChange} />
        <span>XL (7)</span>
      </label>
    </div>
  );
}
