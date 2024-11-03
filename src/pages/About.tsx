import React from 'react';
import TeamMember from '../components/TeamMember';
import { Building2, Users2, Target, Award } from 'lucide-react';

const stats = [
  {
    label: 'Years of Experience',
    value: '15+',
    icon: Building2,
  },
  {
    label: 'Projects Completed',
    value: '500+',
    icon: Target,
  },
  {
    label: 'Team Members',
    value: '50+',
    icon: Users2,
  },
  {
    label: 'Awards Won',
    value: '25+',
    icon: Award,
  },
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Principal Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'With over 15 years of experience in interior design, Sarah leads our creative vision and ensures every project exceeds client expectations.',
    email: 'sarah@mmprojects.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Michael Chen',
    role: 'Project Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Michael oversees project execution and ensures seamless coordination between different teams for timely delivery.',
    email: 'michael@mmprojects.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Priya ensures smooth operations and maintains our high standards of quality across all projects.',
    email: 'priya@mmprojects.com',
    linkedin: 'https://linkedin.com',
  },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We are a team of passionate professionals dedicated to creating
            exceptional spaces that inspire and delight.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg">
              Founded in 2008, MM Projects Infra has grown from a small design studio
              to one of India's leading interior design and construction firms. Our
              commitment to excellence, innovation, and customer satisfaction has
              earned us the trust of countless clients across the country.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the experts behind our success. Our leadership team brings together
              decades of experience in design, construction, and project management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries to deliver unique and creative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-300">
                Quality is at the heart of everything we do, from design to execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We maintain the highest standards of professionalism and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;