import { useEffect, useState } from 'react';
import { InnerPageBanner } from '@/components/InnerPageBanner';

interface MissionStat {
  num: string;
  label: string;
  desc: string;
}

interface AboutData {
  intro: string[];
  missionStats: MissionStat[];
}

export const AboutUs = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/about.json`)
      .then((r) => r.json() as Promise<AboutData>)
      .then(setData);
  }, []);

  return (
    <>
      <InnerPageBanner title="About Us" />

      <section className="bg-white px-8 py-16">
        <div className="max-w-245 mx-auto">
          <div className="flex flex-col gap-4 text-[18px] font-normal 경leading-7 text-[#7e7e7e]">
            {(data?.intro ?? []).map((para) => (
              <p key={para.slice(0, 20)}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
