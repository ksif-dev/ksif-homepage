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
    fetch(`${import.meta.env.BASE_URL}data/home.json`)
      .then((r) => r.json() as Promise<HomeData>)
      .then(setData);
  }, []);

  return (
    <>
      {/* ── Hero — ink dark band ──────────────────────────────────── */}
      <section className="bg-[#25282b] px-8 pt-32 pb-24">
        <div className="max-w-245 mx-auto">
          <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-6">
            Since 2008
          </p>
          <h1 className="text-[90px] font-extrabold leading-[84px] tracking-[-1px] uppercase text-white">
            KAIST
            <br />
            Student
            <br />
            Investment
            <br />
            Fund
          </h1>
        </div>
      </section>

      {/* ── About — light content band ────────────────────────────── */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-245 mx-auto">
          <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-4">
            KSIF 소개
          </p>
          <div className="flex flex-col gap-4 text-[18px] font-normal leading-7 text-[#7e7e7e] max-w-180">
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
          </div>
          <div className="mt-12">
            <Link
              to="/about-us"
              className="inline-flex items-center px-6 py-3 bg-[#e60000] text-white text-[18px] font-normal leading-7 rounded-[60px] border border-[#e60000] transition-colors hover:bg-[#cc0000] hover:border-[#cc0000]"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Team ─────────────────────────────────────────────── */}
      <section className="bg-[#f2f2f2] px-8 py-20">
        <div className="max-w-245 mx-auto">
          <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-4">
            Our Team
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(data?.teams ?? []).map((team) => (
              <Link
                key={team.to}
                to={team.to}
                className="group bg-white rounded-md p-6 flex flex-col"
              >
                <span className="text-[12px] font-semibold leading-4 tracking-[0.57px] uppercase text-[#7e7e7e]">
                  {team.abbr}
                </span>
                <h3 className="mt-3 mb-3 text-[24px] font-bold leading-none text-[#25282b] whitespace-pre-line">
                  {team.title}
                </h3>
                <p className="text-[16px] font-normal leading-tight text-[#7e7e7e] flex-1">
                  {team.desc}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 border border-[#e60000] text-[#e60000] text-[16px] font-normal rounded-[60px] group-hover:bg-[#e60000] group-hover:text-white transition-colors">
                    더 알아보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsored by ─────────────────────────────────────────── */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-245 mx-auto">
          <p className="text-[12px] font-semibold leading-4 tracking-[0.57px] uppercase text-[#bebebe] mb-10 text-center">
            Sponsored by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {(data?.sponsors ?? []).map((s) => {
              const img = (
                <img
                  key={s.alt}
                  src={`${import.meta.env.BASE_URL}${s.img.replace(/^\//, '')}`}
                  alt={s.alt}
                  className="h-8 w-auto object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
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
