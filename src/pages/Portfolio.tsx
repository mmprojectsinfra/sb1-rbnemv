import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Home',
    description: 'Complete interior renovation with custom furniture',
    location: 'Mumbai, Maharashtra',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
        alt: 'Modern living room with minimalist design'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        alt: 'Kitchen with white cabinets and marble countertops'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80',
        alt: 'Master bedroom with custom wardrobes'
      }
    ],
    details: 'A complete home transformation project featuring custom-built furniture, smart storage solutions, and a cohesive design language throughout the space. The project focused on maximizing natural light and creating an open, flowing layout.'
  },
  {
    id: 2,
    title: 'Corporate Office Space',
    description: 'Modern workspace design with collaborative areas',
    location: 'Bangalore, Karnataka',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        alt: 'Modern office space with meeting rooms'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
        alt: 'Collaborative workspace area'
      }
    ],
    details: 'A modern office design that promotes collaboration and productivity. The space includes flexible workstations, meeting rooms, and recreational areas, all designed with employee comfort in mind.'
  },
  {
    id: 3,
    title: 'Luxury Restaurant',
    description: 'High-end dining experience with custom woodwork',
    location: 'Delhi, NCR',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
        alt: 'Elegant restaurant interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
        alt: 'Custom bar area'
      }
    ],
    details: 'An upscale restaurant featuring custom millwork, ambient lighting, and carefully curated materials. The design creates an intimate dining atmosphere while maintaining operational efficiency.'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our collection of completed projects, showcasing our commitment
            to excellence and attention to detail.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;