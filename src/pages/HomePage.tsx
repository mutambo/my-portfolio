import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforming Ideas into Digital Experiences</h1>
      <h2 className="text-2xl md:text-3xl mb-8">Hi, I'm Maxwel, a passionate Web Developer and Blogger helping brands create websites that engage, convert, and grow.</h2>
      <p className="text-lg mb-8">Welcome to my portfolio! I specialize in building user-friendly websites and crafting SEO-optimized content. Whether you're looking to establish an online presence or boost your digital marketing efforts, I'm here to help. Let's collaborate and turn your ideas into reality.</p>
      <div className="flex space-x-4">
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore My Services
        </Link>
        <Link to="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default HomePage;