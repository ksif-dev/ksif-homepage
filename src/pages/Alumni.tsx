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

      {/* Fellows */}
      <section className="bg-white px-8 py-16">
        <div className="max-w-245 mx-auto">
          <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-4">
            Fellows
          </p>
          <h2 className="text-[40px] font-light leading-11 text-[#25282b] mb-10">
            역대 Fellows
          </h2>
          <div className="flex flex-col divide-y divide-[#f2f2f2]">
            {classes.map((cls) => (
              <div
                key={cls.label}
                className="py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 items-baseline"
              >
                <div>
                  <p className="text-[16px] font-bold leading-tight text-[#25282b]">
                    {cls.label}
                  </p>
                  <p className="text-[12px] font-semibold leading-4 tracking-[0.57px] uppercase text-[#bebebe] mt-1">
                    {cls.count}명
                  </p>
                </div>
                <p className="text-[16px] font-normal leading-tight text-[#7e7e7e]">
                  {cls.names}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Fellows */}
      <section className="bg-[#f2f2f2] px-8 py-16">
        <div className="max-w-245 mx-auto">
          <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-4">
            Management Fellows
          </p>
          <h2 className="text-[40px] font-light leading-11 text-[#25282b] mb-10">
            역대 Management Fellows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mgmtFellows.map((fellow) => (
              <div
                key={fellow.name}
                className="bg-white rounded-md p-6 flex flex-col gap-2"
              >
                <p className="text-[16px] font-bold leading-tight text-[#25282b]">
                  {fellow.name}
                </p>
                <p className="text-[12px] font-semibold leading-4 tracking-[0.57px] uppercase text-[#7e7e7e]">
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
