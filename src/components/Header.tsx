import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about-us', label: 'About Us' },
];

const teamLinks = [
  { to: '/team/saa', label: 'SAA' },
  { to: '/team/lmi', label: 'LMI' },
  { to: '/team/qvi', label: 'QVI' },
];

const alumniLinks = [
  { to: '/alumni', label: 'Past Fellows' },
  { to: '/alumni-mgmr', label: 'Past Management Fellows' },
];

const DropdownMenu = ({
  links,
}: {
  links: { to: string; label: string }[];
}) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-45 z-50">
      <ul className="bg-white border border-[#dddddd] rounded-lg py-1 shadow-sm">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-2 text-[14px] font-normal leading-[1.43] transition-colors ${
                  isActive
                    ? 'text-[#ff385c]'
                    : 'text-[#222222] hover:text-[#ff385c]'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Header = () => {
  const [teamOpen, setTeamOpen] = useState(false);
  const [alumniOpen, setAlumniOpen] = useState(false);
  const teamRef = useRef<HTMLLIElement>(null);
  const alumniRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (teamRef.current && !teamRef.current.contains(e.target as Node))
        setTeamOpen(false);
      if (alumniRef.current && !alumniRef.current.contains(e.target as Node))
        setAlumniOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-[#dddddd]">
      <div className="max-w-360 mx-auto px-5 h-full relative flex items-center">
        {/* Desktop nav — absolutely centered */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-[16px] font-semibold leading-tight whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-[#ff385c]'
                    : 'text-[#222222] hover:text-[#ff385c]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Our Team dropdown */}
          <li
            ref={teamRef}
            className="relative list-none"
            onMouseEnter={() => setTeamOpen(true)}
            onMouseLeave={() => setTeamOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-[16px] font-semibold text-[#222222] hover:text-[#ff385c] transition-colors"
              onClick={() => setTeamOpen((o) => !o)}
            >
              Our Team
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {teamOpen && <DropdownMenu links={teamLinks} />}
          </li>

          {/* Alumni dropdown */}
          <li
            ref={alumniRef}
            className="relative list-none"
            onMouseEnter={() => setAlumniOpen(true)}
            onMouseLeave={() => setAlumniOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-[16px] font-semibold text-[#222222] hover:text-[#ff385c] transition-colors"
              onClick={() => setAlumniOpen((o) => !o)}
            >
              Alumni
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {alumniOpen && <DropdownMenu links={alumniLinks} />}
          </li>
        </nav>
      </div>
    </header>
  );
};
