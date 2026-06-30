import { useEffect, useState } from 'react';
import { InnerPageBanner } from '@/components/InnerPageBanner';

interface FellowClass {
  label: string;
  count: number;
  names: string;
}

export const Alumni = () => {
  const [classes, setClasses] = useState<FellowClass[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/fellows.json`)
      .then((r) => r.json() as Promise<FellowClass[]>)
      .then(setClasses);
  }, []);

  return (
    <>
      <InnerPageBanner title="Past Fellows" />

      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
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
    </>
  );
};
