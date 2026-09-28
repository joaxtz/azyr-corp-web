import React from 'react';
import { TeamMember } from '../types';
import { MapPin, Briefcase, Award } from 'lucide-react';

interface LeadershipCardProps {
  member: TeamMember;
  showBio?: boolean;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  member,
  showBio = false,
}) => {
  return (
    <div className="bg-white rounded-sm border border-[#e2d5c3]/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Portrait Photo Container */}
      <div className="relative w-full aspect-square bg-[#001f3f] overflow-hidden">
        <img
          src={member.photoUrl}
          alt={`${member.name} - ${member.role}`}
          className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />

        {/* Subtle gold gradient edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001428]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Location badge in photo corner */}
        <div className="absolute top-3 right-3 bg-[#001f3f]/85 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#b8956a]/40 text-[11px] text-[#f5f0e8] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#b8956a]" />
          <span>{member.location.split('/')[0].trim()}</span>
        </div>
      </div>

      {/* Gold Bottom Accent Bar under image / top of details */}
      <div className="w-full h-1 bg-[#b8956a]" />

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#b8956a] mb-1">
            {member.department}
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#001f3f] group-hover:text-[#b8956a] transition-colors">
            {member.name}
          </h3>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#536173] mt-1">
            <Briefcase className="w-3.5 h-3.5 text-[#b8956a]" />
            <span>{member.role}</span>
          </div>

          {showBio && (
            <p className="text-sm text-[#536173] leading-relaxed mt-4 pt-4 border-t border-[#f5f0e8]">
              {member.bio}
            </p>
          )}
        </div>

        {showBio && member.credentials && (
          <div className="pt-3 border-t border-[#f5f0e8]/80">
            <div className="text-xs font-semibold text-[#001f3f] mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>Key Focus & Credentials</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {member.credentials.map((cred, idx) => (
                <span
                  key={idx}
                  className="text-[11px] text-[#536173] bg-[#f5f0e8] px-2 py-0.5 rounded-xs border border-[#e2d5c3]"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Permanent Gold Bottom Accent Bar as requested */}
      <div className="w-full h-1.5 bg-[#b8956a] group-hover:bg-[#001f3f] transition-colors" />
    </div>
  );
};
