import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('	https://ecomusnext-themesflat.vercel.app/images/slider/about-banner-01.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Empowering women to achieve fitness goals with style</h1>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">We are Ecomus</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">We aim to create timeless women's fashion while ensuring sustainability.</p>
      </section>
      
      {/* Mission Section */}
      <section className="flex flex-wrap md:flex-nowrap items-center px-6 md:px-20 py-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">We empower people through sustainable fashion while promoting inclusivity and body positivity.</p>
        </div>
        <div className="w-full md:w-1/2 flex gap-4">
          <img src="/mission1.jpg" alt="Fashion" className="w-2/3 rounded-lg" />
          <img src="/mission2.jpg" alt="Style" className="w-1/3 rounded-lg" />
        </div>
      </section>
      
      {/* Quality Section */}
      <section className="py-16 bg-gray-100 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Quality is our priority</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-lg">High-Quality Materials</h3>
            <p className="text-gray-600">Crafted using premium materials for comfort and durability.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-lg">Laconic Design</h3>
            <p className="text-gray-600">Minimalist design that speaks volumes.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-lg">Various Sizes</h3>
            <p className="text-gray-600">Embracing diversity with a range of sizes.</p>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Customer’s Reviews</h2>
        <blockquote className="text-gray-600 italic max-w-3xl mx-auto">"Best fashion website with fast shipping and excellent service."</blockquote>
        <p className="mt-2 font-bold">- Robert Smith</p>
      </section>
      
      {/* Shop Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Shop Gram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="	https://ecomusnext-themesflat.vercel.app/images/shop/gallery/gallery-7.jpg" alt="Product 1" className="rounded-lg" />
          <img src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/gallery-3.jpg" alt="Product 2" className="rounded-lg" />
          <img src="	https://ecomusnext-themesflat.vercel.app/images/shop/gallery/gallery-5.jpg" alt="Product 3" className="rounded-lg" />
          <img src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/gallery-8.jpg" alt="Product 4" className="rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;