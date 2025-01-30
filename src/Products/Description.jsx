import React from 'react';

const Description = () => (
    <div className="p-6 bg-white border rounded-md">
    <h1 className="text-2xl  mb-4">Product Description & Care Instructions</h1>
    <p className="mb-4">
      This clothing item is made from LENZING™ ECOVERO™ Viscose, produced through a sustainable process that
      reduces the impact on forests, biodiversity, and water supply.
    </p>
    
    <h2 className="text-xl mb-2">Features</h2>
    <ul className="list-disc list-inside mb-4  text-gray-500">
      <li>Front button placket</li>
      <li>Adjustable sleeve tabs</li>
      <li>Babaton embroidered crest at placket and hem</li>
    </ul>
    
    <h2 className="text-xl  mb-2">Materials Care</h2>
    <p className="mb-4  text-gray-500">Content: 100% LENZING™ ECOVERO™ Viscose</p>
    <p className="mb-4  text-gray-500">Care: Hand wash</p>
    <p className="mb-4  text-gray-500">Imported</p>
    
    <h2 className="text-xl mb-2">Washing Instructions</h2>
    <ul className="list-disc list-inside mb-4 text-gray-500">
      <li>Machine wash max. 30°C. Short spin.</li>
      <li>Iron maximum 110°C.</li>
      <li>Do not bleach/bleach.</li>
      <li>Do not dry clean.</li>
      <li>Tumble dry, medium heat.</li>
    </ul>
  </div>
);

export default Description;
