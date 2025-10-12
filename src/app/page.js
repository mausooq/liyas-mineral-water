import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Hero from "../app/components/Hero";
import Product from "../app/components/Product";
import About from "../app/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Footer />
      
    </div>
  );
}