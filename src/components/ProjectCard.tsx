import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  images: ProjectImage[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  location,
  images,
  onClick,
}) => {
  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={images[0].url}
          alt={images[0].alt}
          className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-white flex items-center">
            View Project <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;