import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function BreezerLandingPage() {
  const flavours = [
    { id: 1, name: 'Cranberry', price: '₹120.00', color: 'from-red-400 to-red-500' },
    { id: 2, name: 'Lime', price: '₹120.00', color: 'from-green-400 to-green-500' },
    { id: 3, name: 'Blueberry', price: '₹120.00', color: 'from-blue-400 to-blue-500' },
    { id: 4, name: 'Orange', price: '₹120.00', color: 'from-orange-400 to-orange-500' },
  ];

  const products = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: `Bacardi Breezer ${i + 1}`,
    flavour: flavours[i % flavours.length].name,
    price: '₹120.00',
  }));

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
          <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            style={{ WebkitTextStroke: '2px #e5e7eb' }}>
            BREEZER
          </h1>

          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Bacardí <span className="block">Breezer is</span> <span className="block">a colour for</span> <span className="block">life.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                It's a fruit-flavoured alcoholic drink available in many refreshing flavours, made to colour your vibe.
              </p>

              <div className="mt-10 flex gap-8 items-start">
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">10+</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Flavours</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">21+</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Legal Age</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">4%</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Alcohol</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg h-[500px]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[15deg] w-48 h-80 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-[15deg] w-48 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section id="flavours" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl font-black mb-12">Explore Our Flavours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {flavours.map((flavour) => (
              <div key={flavour.id} className={`p-8 rounded-3xl bg-gradient-to-br ${flavour.color} text-white shadow-lg hover:scale-105 transform transition`}>
                <h3 className="text-2xl font-bold mb-4">{flavour.name}</h3>
                <p className="text-lg">{flavour.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl font-black mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p) => (
              <div key={p.id} className="border rounded-3xl p-8 shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
                <p className="text-gray-500 mb-2">Flavour: {p.flavour}</p>
                <p className="text-lg font-bold">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl font-black mb-8">About Bacardí Breezer</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Bacardí Breezer is a refreshing, fruit-based alcoholic beverage made for vibrant individuals who love colour, taste, and energy. 
            Since its creation, Breezer has become a symbol of modern, fun, and expressive lifestyle across the world.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BreezerLandingPage;
