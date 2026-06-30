import { useEffect, useState } from 'react';
import { InnerPageBanner } from '@/components/InnerPageBanner';

interface ManagementFellow {
  name: string;
  fellow: string;
  home?: string;
  linkedin?: string;
}

const GlobeIcon = () => (
  <svg
    width="14"
    aria-hidden="true"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M1.5 7H12.5M1.5 7C1.5 7 3.5 2 7 2C10.5 2 12.5 7 12.5 7M1.5 7C1.5 7 3.5 12 7 12C10.5 12 12.5 7 12.5 7M7 2V12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="14"
    aria-hidden="true"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <rect
      x="1"
      y="1"
      width="12"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M3 5.5V10M3 3.5V3.6M6 10V7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5V10M6 5.5V10"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const AlumniMgmr = () => {
  const [fellows, setFellows] = useState<ManagementFellow[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/management-fellows.json`)
      .then((r) => r.json() as Promise<ManagementFellow[]>)
      .then(setFellows);
  }, []);

  return (
    <>
      <InnerPageBanner title="Past Management Fellows" />

      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fellows.map((fellow) => (
              <div
                key={fellow.name}
                className="bg-white border border-[#dddddd] rounded-[14px] p-6 flex flex-col gap-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[16px] font-semibold leading-tight text-[#222222]">
                    {fellow.name}
                  </p>
                  <div className="flex gap-1.5 text-[#222222]">
                    {fellow.home && (
                      <a
                        href={fellow.home}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="홈페이지"
                        className="w-8 h-8 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#ebebeb] transition-colors"
                      >
                        <GlobeIcon />
                      </a>
                    )}
                    {fellow.linkedin && (
                      <a
                        href={fellow.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-8 h-8 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#ebebeb] transition-colors"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[14px] font-normal leading-[1.43] text-[#6a6a6a]">
                  {fellow.fellow}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
