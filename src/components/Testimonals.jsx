import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      title: "Best Online Fashion Site",
      description:
        "Always find something stylish and affordable on this fashion web site.",
      name: "Robert Smith",
      location: "Customer from USA",
      product: {
        name: "Jersey thong body",
        price: "From 1999",
        image:
          "https://ecomusnext-themesflat.vercel.app/images/shop/products/img-p2.png",
      },
    },
    {
      title: "Great Selection and Quality",
      description:
        "I love the verity of style and quality clothing on this website.",
      name: "Allen Lyn",
      location: "Customer from France",
      product: {
        name: "Ribbed modal T-shirt",
        price: "From 2499",
        image:
          "https://ecomusnext-themesflat.vercel.app/images/shop/products/img-p4.png",
      },
    },
    {
      title: "Best Customer Service",
      description:
        "I finally found a web fashion site with stylish and flattering options in my size.",
      name: "Peter Rope",
      location: "Customer from USA",
      product: {
        name: "Ribbed modal T-shirt",
        price: "From 1999",
        image:
          "	https://ecomusnext-themesflat.vercel.app/images/shop/products/img-p5.png",
      },
    },
    {
      title: "Amazing Deals",
      description:
        "Great prices and fantastic customer service! Highly recommended.",
      name: "Jane Doe",
      location: "Customer from UK",
      product: {
        name: "Denim jacket",
        price: "From 39999",
        image:
          "https://ecomusnext-themesflat.vercel.app/images/shop/products/img-p3.png",
      },
    },
 
  ];

  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100" >
      <div className="relative w-full max-w-6xl" >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - 3}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8594;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96" >
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-bold">{testimonial.title}</h2>
              <p className="text-gray-700 mt-4">{testimonial.description}</p>
              <div className="mt-14">
                <p className="font-bold ml-5">{testimonial.name}</p>
                <p className="text-sm text-gray-500 ml-5">{testimonial.location}</p>
              </div>
              <hr className="mt-12" />
              <div className="mt-12 flex items-center">
                <img
                  src={testimonial.product.image}
                  alt="Product"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm">{testimonial.product.name}</p>
                  <p className="text-sm font-bold">{testimonial.product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
