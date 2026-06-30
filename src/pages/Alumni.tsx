import { useEffect, useState } from 'react';
import { InnerPageBanner } from '@/components/InnerPageBanner';

interface FellowClass {
  label: string;
  count: number;
  names: string;
}

interface ManagementFellow {
  name: string;
  fellow: string;
}

export const Alumni = () => {
  const [classes, setClasses] = useState<FellowClass[]>([]);
  const [mgmtFellows, setMgmtFellows] = useState<ManagementFellow[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/fellows.json`)
      .then((r) => r.json() as Promise<FellowClass[]>)
      .then(setClasses);
    fetch(`${import.meta.env.BASE_URL}data/management-fellows.json`)
      .then((r) => r.json() as Promise<ManagementFellow[]>)
      .then(setMgmtFellows);
  }, []);

  return (
    <>
      <InnerPageBanner title="Alumni" />

      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
          <h2 className="text-[20px] font-semibold leading-tight text-[#222222] mb-8">
            Fellows
          </h2>
          <div className="flex flex-col divide-y divide-[#ebebeb]">
            {classes.map((cls) => (
              <div
                key={cls.label}
                className="py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 items-baseline"
              >
                <div>
                  <p className="text-[16px] font-semibold leading-tight text-[#222222]">
                    {cls.label}
                  </p>
                  <p className="text-[14px] font-normal leading-[1.43] text-[#6a6a6a] mt-1">
                    {cls.count}명
                  </p>
                </div>
                <p className="text-[16px] font-normal leading-normal text-[#3f3f3f]">
                  {cls.names}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t-8 border-[#f2f2f2]" />

      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
          <h2 className="text-[20px] font-semibold leading-tight text-[#222222] mb-8">
            Management Fellows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {mgmtFellows.map((fellow) => (
              <div
                key={fellow.name}
                className="bg-white border border-[#dddddd] rounded-[14px] p-6 flex flex-col gap-2 hover:shadow-md transition-shadow"
              >
                <p className="text-[16px] font-semibold leading-tight text-[#222222]">
                  {fellow.name}
                </p>
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
