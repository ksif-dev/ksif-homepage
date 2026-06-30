import { Link } from 'react-router';

const columns = [
  {
    heading: 'About',
    links: [{ to: '/about-us', label: 'About Us' }],
  },
  {
    heading: 'Our Team',
    links: [
      { to: '/team/saa', label: 'SAA' },
      { to: '/team/lmi', label: 'LMI' },
      { to: '/team/qvi', label: 'QVI' },
    ],
  },
  {
    heading: 'Alumni',
    links: [
      { to: '/alumni', label: 'Past Fellows' },
      { to: '/alumni-mgmr', label: 'Past Management Fellows' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#dddddd]">
      <div className="max-w-360 mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
          {/* Link columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[16px] font-medium leading-tight text-[#222222] mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[14px] font-normal leading-[1.43] text-[#222222] hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="shrink-0">
            <p className="text-[16px] font-medium leading-tight text-[#222222] mb-4">
              Contact
            </p>
            <p className="text-[14px] font-normal leading-[1.43] text-[#222222]">
              KAIST 경영대학 학생투자펀드
            </p>
            <p className="text-[14px] font-normal leading-[1.43] text-[#6a6a6a]">
              서울특별시 동대문구 회기로 85
            </p>
            <p className="text-[14px] font-normal leading-[1.43] text-[#6a6a6a]">
              한국과학기술원
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#dddddd]">
          <p className="text-[13px] font-normal leading-[1.23] text-[#6a6a6a] text-center">
            &copy; 2026 KAIST Student Investment Fund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
