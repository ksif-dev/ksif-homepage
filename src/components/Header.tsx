import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about-us', label: 'About' },
];

const teamLinks = [
  { to: '/team/saa', label: 'SAA' },
  { to: '/team/lmi', label: 'LMI' },
  { to: '/team/qvi', label: 'QVI' },
];

const DropdownMenu = ({
  links,
}: {
  links: { to: string; label: string }[];
}) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-40 z-50">
    <ul className="bg-[#25282b] border border-white/20 py-1 rounded-md">
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `block px-4 py-2.5 text-[16px] font-normal leading-tight transition-colors ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
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

export const Header = () => {
  const [teamOpen, setTeamOpen] = useState(false);
  const teamRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (teamRef.current && !teamRef.current.contains(e.target as Node))
        setTeamOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#25282b]">
      <div className="max-w-360 mx-auto px-8 h-full relative flex items-center">
        {/* Wordmark — absolutely centered */}
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-[16px] font-extrabold text-white tracking-[0.5px]"
        >
          KSIF
        </NavLink>

        {/* Nav — left side */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-[16px] font-normal leading-tight transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <li
            ref={teamRef}
            className="relative list-none"
            onMouseEnter={() => setTeamOpen(true)}
            onMouseLeave={() => setTeamOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-[16px] font-normal text-white/60 hover:text-white transition-colors"
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

          <NavLink
            to="/alumni"
            className={({ isActive }) =>
              `text-[16px] font-normal leading-tight transition-colors ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`
            }
          >
            Alumni
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
