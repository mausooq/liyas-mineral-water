import React from 'react';
import Image from "next/image";

const Product = () => {
const products = [
    { id: 1, name: 'Bacardi® Breezer', flavor: 'Blackberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-purple-600' },
    { id: 2, name: 'Bacardi® Breezer', flavor: 'Jamaican Passion Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-yellow-400' },
    { id: 3, name: 'Bacardi® Breezer', flavor: 'Orange Flavour', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-orange-400' },
    { id: 4, name: 'Bacardi® Breezer', flavor: 'Blueberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-blue-500' },
    { id: 5, name: 'Bacardi® Breezer', flavor: 'Watermelon Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-green-600' },
    { id: 6, name: 'Bacardi® Breezer', flavor: 'Raspberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-red-500' },
  ];
  return (
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <h2 className="text-4xl font-black mb-6">Our Product</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Bacardí® Breezer™ Present for short, is a fruit-based alcoholic drink available in multiple refreshing flavours.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col">
                <div className="relative h-64 w-32 mx-auto mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="drop-shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.flavor}</p>
                <p className="text-gray-800 font-semibold mb-3">Size: 275ml</p>
                <p className="font-bold mb-4">{product.price}</p>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">ADD TO CART</button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="rounded-full border-2 border-gray-300 p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
  );
};

export default Product;
