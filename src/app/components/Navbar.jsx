import React from 'react';

const Navbar = () => {
  return (
    <header className="py-5 bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-lg">
            B
          </div>
          <div className="font-black text-lg tracking-tight">Bacardí</div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#flavours" className="hover:text-gray-600 transition">Flavours</a>
          <a href="#products" className="hover:text-gray-600 transition">Products</a>
          <a href="#about" className="hover:text-gray-600 transition">About Us</a>
          <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
