import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/max.png';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section 1: Introduction */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforming Ideas into Digital Experiences</h1>
        <h2 className="text-2xl md:text-3xl mb-8">Hi, I'm Maxwel, a passionate Web Developer and Blogger helping brands create websites that engage, convert, and grow.</h2>
        <div className="flex space-x-4">
          <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore My Services
          </Link>
          <Link to="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Section 2: About Me with Photo */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <img 
            src={myPhoto} 
            alt="Maxwel" 
            className="rounded-full w-80 h-80 object-cover mx-auto aspect-square"
          />        
          </div>
        <div className="md:w-1/2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-lg mb-4">
              I'm a web developer with a passion for creating beautiful, functional, and user-friendly websites. With years of experience in both development and content creation, I bring a unique perspective to every project.
            </p>
            <p className="text-lg">
              My goal is to help businesses and individuals establish a strong online presence that truly represents their brand and engages their audience.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
      <section className="mt-16">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">What I Offer</h3>
          <p className="text-lg mb-8">
            I specialize in building user-friendly websites and crafting SEO-optimized content. Whether you're looking to establish an online presence or boost your digital marketing efforts, I'm here to help. Let's collaborate and turn your ideas into reality.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Custom Web Development</li>
            <li>Responsive Design</li>
            <li>SEO Optimization</li>
            <li>Content Creation</li>
            <li>Website Maintenance</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
