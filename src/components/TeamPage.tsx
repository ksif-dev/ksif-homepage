import type { ReactNode } from 'react';
import { InnerPageBanner } from './InnerPageBanner';
import { TeamSidebar } from './TeamSidebar';

interface Section {
  title: string;
  body: string;
}

interface TeamPageProps {
  title: string;
  lead: string;
  sections: Section[];
  children?: ReactNode;
}

export const TeamPage = ({
  title,
  lead,
  sections,
  children,
}: TeamPageProps) => {
  return (
    <>
      <InnerPageBanner title={title} />
      <section className="bg-white px-8 py-16">
        <div className="max-w-245 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
            <article>
              <p className="text-[22px] font-normal leading-6 text-[#25282b] mb-10 pl-5 border-l-4 border-[#e60000]">
                {lead}
              </p>
              {children}
              <div className="flex flex-col gap-10">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="border-t border-[#f2f2f2] pt-8"
                  >
                    <h2 className="text-[32px] font-bold leading-tight text-[#25282b] mb-4">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {section.body.split('\n\n').map((para) => (
                        <p
                          key={para.slice(0, 20)}
                          className="text-[18px] font-normal leading-7 text-[#7e7e7e]"
                        >
                          {para.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <TeamSidebar />
          </div>
        </div>
      </section>
    </>
  );
};
