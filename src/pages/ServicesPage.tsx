import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; items: string[] }> = ({ title, description, items }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-lg mb-4">{description}</p>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Your website is your digital storefront, and I'm here to make sure it leaves a lasting impression. From simple landing pages to complex multi-page sites, I build fast, secure, and responsive websites that are designed to scale with your business.",
      items: [
        "Custom Website Design",
        "Responsive & Mobile-First Development",
        "WordPress Development & Customization",
        "Website Maintenance & Updates"
      ]
    },
    {
      title: "Copywriting",
      description: "Words matter, especially online. I create clear, concise, and engaging copy that aligns with your brand's voice and resonates with your audience. Whether it's for a blog, landing page, or product description, my copy will help drive conversions.",
      items: [
        "Website Content Writing",
        "SEO-Optimized Blog Posts",
        "Product Descriptions & Marketing Copy",
        "Digital Campaign Copywriting"
      ]
    },
    {
      title: "Blogging",
      description: "Blogs are a powerful tool for driving organic traffic and building your brand authority. I write SEO-friendly blog posts that not only rank well in search engines but also provide value to your readers. Let's tell your story and keep your audience coming back for more.",
      items: [
        "Blog Strategy & Planning",
        "SEO Research & Keyword Optimization",
        "Engaging, Informative Blog Posts",
        "Ongoing Blog Management"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;