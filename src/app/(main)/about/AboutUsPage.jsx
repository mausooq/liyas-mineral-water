import React from 'react'

const flavours = [
  { id: 1, name: 'Cranberry', price: '₹120.00' },
  { id: 2, name: 'Lime', price: '₹120.00' },
  { id: 3, name: 'Blueberry', price: '₹120.00' },
  { id: 4, name: 'Orange', price: '₹120.00' },
]

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `Bacardi Breezer ${i + 1}`,
  flavour: flavours[i % flavours.length].name,
  price: '₹120.00',
}))

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] leading-none font-black text-transparent select-none tracking-tighter opacity-[0.03]" style={{ WebkitTextStroke: '2px #e5e7eb' }}>
            BREEZER
          </h1>
        </div>

        <div className="absolute top-8 left-8 w-12 h-12 lg:w-16 lg:h-16">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-full transform -rotate-12"></div>
        </div>
        <div className="absolute top-20 right-12 w-16 h-16 lg:w-20 lg:h-20">
          <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-400 rounded-[30%] transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 left-4 w-8 h-16 lg:w-10 lg:h-20 bg-gradient-to-b from-orange-300 to-orange-400 transform rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-red-400 rounded-full"></div>

        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Bacardí <span className="block">Breezer is</span> <span className="block">a colour for</span> <span className="block">life. It's a fruit-</span> <span className="block">flavour alcoholic</span> <span className="block">drink which comes</span> <span className="block">in many flavours</span>
            </h2>

            <div className="mt-10 flex gap-8 lg:gap-12 items-start">
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black tracking-tight">10+</span>
                <span className="text-xs lg:text-sm text-gray-500 mt-2 leading-tight">More than<br />Flavours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black tracking-tight">21+</span>
                <span className="text-xs lg:text-sm text-gray-500 mt-2 leading-tight">Year Old<br />Can Drink</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black tracking-tight">4%</span>
                <span className="text-xs lg:text-sm text-gray-500 mt-2 leading-tight">Alcohol<br />Content</span>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] lg:h-[600px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[15deg] w-48 h-80 lg:w-56 lg:h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-[15deg] w-48 h-80 lg:w-56 lg:h-96 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlavourPreview() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute bottom-8 left-8 w-12 h-12 lg:w-16 lg:h-16">
        <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-orange-300 transform rotate-45"></div>

      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <h2 className="text-[200px] md:text-[300px] lg:text-[400px] leading-none font-black text-transparent select-none tracking-tighter opacity-[0.02]" style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12">
          <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">
            Breezer Flavours
          </h3>
          <p className="text-gray-600 max-w-xl text-sm lg:text-base">
            Bacardí Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {flavours.map((f) => (
            <div key={f.id} className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-32 h-48 lg:w-40 lg:h-56 mb-6 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl"></div>
              <div className="font-black text-xs lg:text-sm tracking-wider uppercase">{f.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <button className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
            View all
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ p }) {
  return (
    <div className="bg-white rounded-2xl p-5 lg:p-6 flex flex-col border border-gray-100 hover:shadow-xl transition-shadow group">
      <div className="aspect-[3/4] mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="w-24 h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl group-hover:scale-105 transition-transform"></div>
      </div>
      <h4 className="font-black text-base lg:text-lg mb-1 tracking-tight">{p.name}</h4>
      <p className="text-xs lg:text-sm text-gray-400 mb-5 font-medium">{p.flavour}</p>
      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="text-sm lg:text-base font-black tracking-tight">{p.price}</div>
        <button className="border-2 border-black px-4 py-2 rounded-lg text-xs lg:text-sm font-bold hover:bg-black hover:text-white transition-all uppercase tracking-wide">
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

function ProductsGrid() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-16 right-16 w-16 h-16 lg:w-20 lg:h-20">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-500 rounded-full absolute bottom-0 left-0"></div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-500 rounded-full absolute bottom-0 right-0"></div>
        <div className="w-1 h-6 lg:h-8 bg-green-700 absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
        <h2 className="text-[200px] md:text-[300px] lg:text-[400px] leading-none font-black text-transparent select-none tracking-tighter opacity-[0.02]" style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">
              Our Product
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              Bacardí Breezer a fruit-flavour alcoholic drink which comes<br className="hidden lg:block" /> in many flavours and loved by all for its amazing taste
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-3 border-2 border-black px-8 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all group">
            View all
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-16 left-16 w-20 h-20 lg:w-24 lg:h-24">
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-indigo-600 rounded-full absolute top-0 left-0 opacity-80"></div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-500 rounded-full absolute bottom-0 right-0 opacity-80"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-3"></div>
      </div>
      <div className="absolute bottom-16 right-16 w-12 h-16 lg:w-16 lg:h-20 bg-gradient-to-b from-red-400 to-red-500 transform -rotate-12"></div>

      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <h2 className="text-[200px] md:text-[300px] lg:text-[400px] leading-none font-black text-transparent select-none tracking-tighter opacity-[0.02]" style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">
              About Us
            </h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
              Bacardí Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours. This template is responsive and uses placeholders so you can easily drop in your own bottle designs.
            </p>

            <div className="space-y-4 mt-8">
              <div className="border-b border-gray-200 pb-4">
                <button className="w-full flex items-center justify-between text-left font-bold text-base lg:text-lg">
                  <span>Why Breezer?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="w-full flex items-center justify-between text-left font-bold text-base lg:text-lg">
                  <span>Our Product</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="w-full flex items-center justify-between text-left font-bold text-base lg:text-lg">
                  <span>How We Work</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="w-full flex items-center justify-between text-left font-bold text-base lg:text-lg">
                  <span>Our Business</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="w-full flex items-center justify-between text-left font-bold text-base lg:text-lg">
                  <span>Contact Us</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-400 to-pink-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 relative overflow-hidden">
      <div className="absolute bottom-8 left-8 w-12 h-12 lg:w-16 lg:h-16">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-full transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-black text-xl">B</div>
              <div className="font-black text-xl tracking-tight">BACARDÍ</div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">© 2025 Bacardí. All Rights Reserved</p>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-6">ABOUT US</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition">Our Values</a></li>
              <li><a href="#" className="hover:text-black transition">Leadership</a></li>
              <li><a href="#" className="hover:text-black transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-6">LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Products</a></li>
              <li><a href="#" className="hover:text-black transition">Flavours</a></li>
              <li><a href="#" className="hover:text-black transition">Recipes</a></li>
              <li><a href="#" className="hover:text-black transition">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-6">STAY IN THE KNOW</h4>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter</p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-8 mb-4">FOLLOW US</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>Privacy Policy • Terms of Service • Cookie Settings</div>
          <div>Drink Responsibly. Must be 21+</div>
        </div>
      </div>
    </footer>
  )
}

export default function BreezerLandingPage() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      <header className="py-5 bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-lg">B</div>
            <div className="font-black text-lg tracking-tight">Bacardí</div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
            <a href="#" className="hover:text-gray-600 transition">Home</a>
            <a href="#" className="hover:text-gray-600 transition">Flavours</a>
            <a href="#" className="hover:text-gray-600 transition">Product</a>
            <a href="#" className="hover:text-gray-600 transition">About Us</a>
            <a href="#" className="hover:text-gray-600 transition">Contact Us</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border-2 border-black px-6 py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all">Shop Now</button>
            <button className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <FlavourPreview />
        <ProductsGrid />
        <About />
      </main>
    
      <Footer />
    </div>
  )
} 