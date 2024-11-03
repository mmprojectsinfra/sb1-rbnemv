import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  email,
  linkedin
}) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
          <p className="text-white mb-4">{bio}</p>
          <div className="flex space-x-4">
            <a
              href={`mailto:${email}`}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;