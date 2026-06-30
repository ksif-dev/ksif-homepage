import { Link, useLocation } from 'react-router';

const teams = [
  { to: '/team/saa', label: 'Strategic Asset Allocation' },
  { to: '/team/lmi', label: 'Large-cap & Market-based Investment' },
  { to: '/team/qvi', label: 'Quantitative Value Investing' },
];

export const TeamSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="sticky top-20">
      <div className="bg-[#f2f2f2] rounded-md p-6">
        <p className="text-[12px] font-semibold leading-4 tracking-[0.57px] uppercase text-[#7e7e7e] mb-4">
          Our Team
        </p>
        <ul className="flex flex-col gap-1">
          {teams.map((team) => {
            const active = pathname === team.to;
            return (
              <li key={team.to}>
                <Link
                  to={team.to}
                  className={`flex items-start gap-2 px-3 py-2.5 rounded-md text-[16px] font-normal leading-tight transition-colors ${
                    active
                      ? 'bg-white text-[#25282b] border-l-2 border-[#e60000]'
                      : 'text-[#7e7e7e] hover:text-[#25282b]'
                  }`}
                >
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
