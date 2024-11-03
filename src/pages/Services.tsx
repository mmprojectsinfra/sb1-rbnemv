import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: 'carpentry',
    title: 'Carpentry',
    description: 'Custom woodwork and furniture solutions tailored to your space.',
    image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80',
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Professional painting services for a perfect finish every time.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Complete interior design solutions for your dream space.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
  },
  {
    id: 'turnkey',
    title: 'Turn Key Projects',
    description: 'End-to-end project management and execution.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  },
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            From concept to completion, we offer comprehensive interior solutions
            that bring your vision to life with precision and excellence.
          </p>
        </div>
      </div>

      {/* Business Model Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Business Model</h2>
            <img
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
              alt="Business Model"
              className="w-full rounded-2xl shadow-xl mb-8"
            />
            <p className="text-gray-600 text-lg">
              We follow a client-centric approach, ensuring transparency and quality
              at every step of your project journey. Our process is designed to
              deliver exceptional results while keeping you informed and involved
              throughout.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;