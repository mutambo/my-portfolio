import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <p className="text-lg mb-4">
              I'm Maxwel, a web developer, blogger, and copywriter based in Kenya with a background in Information Technology. I'm passionate about creating sleek, responsive websites and writing content that not only attracts but also engages your target audience.
            </p>
            <div className="bg-gray-50 rounded p-4 mb-4">
              <h2 className="text-2xl font-semibold mb-2">Skills & Expertise:</h2>
              <ul className="list-disc list-inside">
                <li>Web Development: HTML, CSS, JavaScript, and WordPress.</li>
                <li>Copywriting: Blog posts, website content, and SEO-driven articles.</li>
                <li>Blogging: Engaging, informative, and reader-friendly content to drive traffic.</li>
              </ul>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Why Work with Me?</h2>
            <p className="text-lg mb-4">
              I understand that your website is the heart of your online presence. I build sites that are not only aesthetically pleasing but also functional and optimized for search engines. My copywriting and blogging services help your brand stand out in a crowded market by delivering compelling, keyword-rich content.
            </p>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-lg italic">
                Fun Fact: When I'm not coding or writing, I enjoy exploring the great outdoors and trying my hand at photography.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg mb-4">
            With a background in Information Technology and a passion for problem-solving, my journey began when I started building websites as a freelancer, transforming ideas into digital experiences. Over the years, I have honed my skills in web development and copywriting, working with clients across various industries, from startups to established businesses.
          </p>
          <p className="text-lg mb-4">
            One of my key achievements was developing a custom e-commerce platform for Kelvin kahuho, which resulted in a 40% increase in online sales within the first six months. I've also collaborated with content teams to create SEO-driven blog strategies that have significantly boosted organic traffic for brands like MyClothest.
          </p>
          <p className="text-lg mb-4">
            Today, I specialize in creating responsive, user-friendly websites and crafting compelling content that engages audiences and drives conversions. My goal is simple: to deliver value through innovation, creativity, and meticulous execution.
          </p>
          <p className="text-lg">
            My combination of technical expertise and creative flair allows me to deliver comprehensive solutions that meet both the functional and aesthetic needs of my clients. Let's work together to bring your digital ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;