import { Link, useLocation } from 'react-router';

const teams = [
  { to: '/team/saa', label: 'Strategic Asset Allocation' },
  { to: '/team/lmi', label: 'Large-cap & Market-based Investment' },
  { to: '/team/qvi', label: 'Quantitative Value Investing' },
];

export const TeamSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="sticky top-24">
      <div className="bg-[#f7f7f7] rounded-[14px] p-6">
        <p className="text-[14px] font-medium leading-[1.29] text-[#6a6a6a] mb-4">
          Our Team
        </p>
        <ul className="flex flex-col gap-1">
          {teams.map((team) => {
            const active = pathname === team.to;
            return (
              <li key={team.to}>
                <Link
                  to={team.to}
                  className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-[14px] font-normal leading-[1.43] transition-colors ${
                    active
                      ? 'bg-white text-[#ff385c] shadow-sm'
                      : 'text-[#222222] hover:bg-[#f2f2f2]'
                  }`}
                >
                  <svg
                    width="16"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 mt-0.75"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {team.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
