import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

function BreezerLandingPage() {
  const flavours = [
    { id: 1, name: 'CRANBERRY', color: 'bg-red-500', image: '/images/bottle.jpg' },
    { id: 2, name: 'LIME', color: 'bg-green-500', image: '/images/bottle.jpg' },
    { id: 3, name: 'BLUEBERRY', color: 'bg-blue-500', image: '/images/bottle.jpg' },
    { id: 4, name: 'ORANGE', color: 'bg-orange-400', image: '/images/bottle.jpg' },
  ];

  const products = [
    { id: 1, name: 'Bacardi® Breezer', flavor: 'Blackberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-purple-600' },
    { id: 2, name: 'Bacardi® Breezer', flavor: 'Jamaican Passion Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-yellow-400' },
    { id: 3, name: 'Bacardi® Breezer', flavor: 'Orange Flavour', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-orange-400' },
    { id: 4, name: 'Bacardi® Breezer', flavor: 'Blueberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-blue-500' },
    { id: 5, name: 'Bacardi® Breezer', flavor: 'Watermelon Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-green-600' },
    { id: 6, name: 'Bacardi® Breezer', flavor: 'Raspberry Flavoured', price: '₹150.00', image: '/images/bottle.jpg', color: 'bg-red-500' },
  ];

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
          {/* Background BREEZER text */}
          <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            style={{ WebkitTextStroke: '2px #e5e7eb' }}>
            BREEZER
          </h1>

          {/* Floating fruit elements */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-green-300 rounded-full opacity-70 animate-float"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-red-300 rounded-full opacity-70 animate-float-delay"></div>
          <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-blue-300 rounded-full opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-yellow-300 rounded-full opacity-70 animate-float-delay"></div>

          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Bacardí® Breezer: <span className="block">Present for short, is a</span> <span className="block">fruit-based alcoholic drink</span> <span className="block">made by Bacardí®.</span>
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

              <div className="mt-12">
                <button className="rounded-full border-2 border-gray-300 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg h-[500px]">
                {/* Orange bottle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[15deg] w-48">
                  <div className="relative h-80 w-full">
                    <Image 
                      src="/images/bottle.jpg" 
                      alt="Orange Breezer" 
                      layout="fill" 
                      objectFit="contain"
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Green bottle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-[15deg] w-48">
                  <div className="relative h-80 w-full">
                    <Image 
                      src="/images/bottle.jpg" 
                      alt="Green Breezer" 
                      layout="fill" 
                      objectFit="contain"
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section id="flavours" className="py-20 bg-gray-50 relative">
        {/* Background BREEZER text */}
        <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h1>
        
        {/* Floating fruit elements */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 rounded-full opacity-70 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-red-300 rounded-full opacity-70 animate-float-delay"></div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <h2 className="text-4xl font-black mb-6">Breezer Flavours</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Bacardí® Breezer™ Present for short, is a fruit-based alcoholic drink available in multiple refreshing flavours.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {flavours.map((flavour) => (
              <div key={flavour.id} className="flex flex-col items-center">
                <div className="relative h-64 w-32 mb-4">
                  <Image 
                    src={flavour.image} 
                    alt={flavour.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="drop-shadow-xl"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase">{flavour.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-8">
            <button className="rounded-full border-2 border-gray-300 p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        {/* Background BREEZER text */}
        <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h1>
        
        {/* Floating fruit elements */}
        <div className="absolute bottom-10 left-10 w-14 h-14 bg-red-300 rounded-full opacity-70 animate-float"></div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <h2 className="text-4xl font-black mb-6">About Us</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Bacardí® Breezer™ Present for short, is a fruit-based alcoholic drink available in multiple refreshing flavours.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image 
                  src="/images/b.jpg" 
                  alt="Breezer Bottles" 
                  layout="fill" 
                  objectFit="contain"
                  className="drop-shadow-xl"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Who Breezer?!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Our Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Our Business</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <img src="/images/b.jpg" alt="Bacardi Logo" className="h-12 w-auto mb-4" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">History</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Values</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">People</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">LINKS</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Products</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Flavours</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">STAY IN THE KNOW</h3>
                <p className="text-gray-600 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Bacardí® and the Bat Device are registered trademarks of Bacardí & Company Limited.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BreezerLandingPage;
