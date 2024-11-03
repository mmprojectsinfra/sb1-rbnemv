import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceProgress from '../components/ServiceProgress';
import BookingForm from '../components/BookingForm';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';

const services = {
  carpentry: {
    title: 'Carpentry Services',
    description: 'Expert carpentry solutions for your space',
    fullDescription: `Our carpentry services combine traditional craftsmanship with modern design. 
    We specialize in custom furniture, built-in solutions, and architectural woodwork.`,
    image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80',
    pricing: {
      basic: 'Starting from ₹25,000',
      custom: 'Custom quote based on requirements'
    },
    duration: '2-4 weeks',
    availability: 'Monday to Saturday',
    locations: ['Mumbai', 'Pune', 'Bangalore'],
    stages: [
      {
        title: 'Consultation',
        description: 'Initial meeting to discuss your requirements',
        status: 'completed'
      },
      {
        title: 'Design',
        description: 'Creating detailed designs and plans',
        status: 'current'
      },
      {
        title: 'Production',
        description: 'Crafting your custom pieces',
        status: 'upcoming'
      },
      {
        title: 'Installation',
        description: 'Professional installation at your location',
        status: 'upcoming'
      }
    ]
  },
  painting: {
    title: 'Painting Services',
    description: 'Professional painting solutions for your space',
    fullDescription: `Transform your space with our professional painting services. 
    We offer a wide range of finishes and techniques to bring your vision to life.`,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    pricing: {
      basic: 'Starting from ₹15,000',
      custom: 'Based on area and requirements'
    },
    duration: '1-2 weeks',
    availability: 'Monday to Saturday',
    locations: ['Mumbai', 'Pune', 'Delhi'],
    stages: [
      {
        title: 'Consultation',
        description: 'Initial meeting to discuss your requirements',
        status: 'completed'
      },
      {
        title: 'Color Selection',
        description: 'Choosing the perfect colors',
        status: 'current'
      },
      {
        title: 'Preparation',
        description: 'Surface preparation and priming',
        status: 'upcoming'
      },
      {
        title: 'Painting',
        description: 'Professional painting application',
        status: 'upcoming'
      }
    ]
  },
  'interior-design': {
    title: 'Interior Design',
    description: 'Complete interior design solutions',
    fullDescription: `Our interior design services cover everything from concept to completion. 
    We create beautiful, functional spaces that reflect your style and needs.`,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    pricing: {
      basic: 'Starting from ₹50,000',
      custom: 'Based on project scope'
    },
    duration: '4-8 weeks',
    availability: 'Monday to Friday',
    locations: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
    stages: [
      {
        title: 'Consultation',
        description: 'Initial meeting and requirement gathering',
        status: 'completed'
      },
      {
        title: 'Concept Design',
        description: 'Creating initial design concepts',
        status: 'current'
      },
      {
        title: 'Detailed Design',
        description: 'Finalizing designs and materials',
        status: 'upcoming'
      },
      {
        title: 'Implementation',
        description: 'Executing the approved design',
        status: 'upcoming'
      }
    ]
  },
  turnkey: {
    title: 'Turn Key Projects',
    description: 'End-to-end project management',
    fullDescription: `Our turnkey solutions provide complete project management from start to finish. 
    We handle everything from design to execution, ensuring a hassle-free experience.`,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    pricing: {
      basic: 'Starting from ₹10,00,000',
      custom: 'Based on project requirements'
    },
    duration: '8-16 weeks',
    availability: 'Monday to Saturday',
    locations: ['All major cities in India'],
    stages: [
      {
        title: 'Planning',
        description: 'Project planning and scope definition',
        status: 'completed'
      },
      {
        title: 'Design',
        description: 'Architectural and interior design',
        status: 'current'
      },
      {
        title: 'Execution',
        description: 'Project execution and monitoring',
        status: 'upcoming'
      },
      {
        title: 'Handover',
        description: 'Project completion and handover',
        status: 'upcoming'
      }
    ]
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[50vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200">{service.description}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Service Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Service Overview</h2>
              <p className="text-gray-600 text-lg mb-8">{service.fullDescription}</p>
              
              {/* Service Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Duration</h3>
                    <p className="text-gray-600">{service.duration}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Availability</h3>
                    <p className="text-gray-600">{service.availability}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pricing</h3>
                    <p className="text-gray-600">{service.pricing.basic}</p>
                    <p className="text-gray-600 text-sm">{service.pricing.custom}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Areas</h3>
                    <p className="text-gray-600">{Array.isArray(service.locations) ? service.locations.join(', ') : service.locations}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
              <ServiceProgress stages={service.stages} />
            </div>

            {/* Booking Section */}
            <div className="text-center">
              {!showBookingForm ? (
                <button 
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors"
                  onClick={() => setShowBookingForm(true)}
                >
                  Book This Service
                </button>
              ) : (
                <BookingForm 
                  service={service}
                  onSubmit={() => {
                    // Handle booking submission
                    navigate('/dashboard');
                  }}
                  onCancel={() => setShowBookingForm(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;