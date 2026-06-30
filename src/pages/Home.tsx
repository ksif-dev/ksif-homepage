import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface Team {
  to: string;
  abbr: string;
  title: string;
  desc: string;
}

interface HomeData {
  teams: Team[];
  sponsors: { img: string; alt: string; href?: string }[];
}

export const Home = () => {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    fetch('/data/home.json')
      .then((r) => r.json() as Promise<HomeData>)
      .then(setData);
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-360 mx-auto w-full text-center">
          <h1 className="text-[28px] font-bold leading-[1.43] text-[#222222]">
            KAIST Student Investment Fund
          </h1>
          <p className="mt-3 text-[14px] font-normal leading-[1.43] text-[#6a6a6a]">
            Since 2008
          </p>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] px-6 py-16">
        <div className="max-w-245 mx-auto">
          <h2 className="text-[21px] font-bold leading-[1.43] text-[#222222] text-center">
            KSIF 소개
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-[16px] font-normal leading-normal text-[#3f3f3f] max-w-180 mx-auto">
            <p>
              KSIF는 현장 교육을 통해 학생들에게 효율적이고 실질적인 교육기회를
              제공한다는 교육이념 하에 2008년 2월 15일자로 출범한
              학생투자펀드입니다.
            </p>
            <p>
              KSIF는 창의적이고 혁신적인 교육의 선도적 역할을 하고 있는
              KAIST만의 독창적인 프로그램으로서 사회가 요구하는 전문인력 및
              연구인력을 배출하는 것을 목표로 하고 있습니다.
            </p>
            <div className="mt-6">
              <Link
                to="/about-us"
                className="inline-flex items-center px-6 py-3.5 bg-[#ff385c] text-white text-[16px] font-medium leading-tight rounded-lg transition-colors active:bg-[#e00b41]"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team ─────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
          <h2 className="mb-8 text-[21px] font-bold leading-[1.43] text-[#222222] text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(data?.teams ?? []).map((team) => (
              <Link
                key={team.to}
                to={team.to}
                className="group bg-white border border-[#dddddd] rounded-[14px] p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <span className="text-[12px] font-semibold leading-tight text-[#6a6a6a] uppercase tracking-[0.32px]">
                  {team.abbr}
                </span>
                <h3 className="mt-3 mb-3 text-[16px] font-semibold leading-tight whitespace-pre-line text-[#222222]">
                  {team.title}
                </h3>
                <p className="text-[14px] font-normal leading-[1.43] text-[#3f3f3f] flex-1">
                  {team.desc}
                </p>
                <div className="mt-5">
                  <span className="text-[14px] font-normal leading-[1.43] text-[#222222] group-hover:text-[#ff385c] underline transition-colors">
                    더 알아보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsored by ─────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] px-6 py-16">
        <div className="max-w-245 mx-auto">
          <p className="text-[14px] font-medium leading-[1.29] text-[#6a6a6a] mb-8 text-center uppercase tracking-[0.32px]">
            Sponsored by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {(data?.sponsors ?? []).map((s) => {
              const img = (
                <img
                  key={s.alt}
                  src={s.img}
                  alt={s.alt}
                  className="h-8 w-auto object-contain grayscale opacity-40 hover:opacity-75 hover:grayscale-0 transition-all duration-300"
                />
              );
              return s.href ? (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {img}
                </a>
              ) : (
                <span key={s.alt}>{img}</span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
