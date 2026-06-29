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
      <section className="bg-white px-6 py-16">
        <div className="max-w-245 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
            <article>
              <p className="text-[16px] font-normal leading-normal text-[#3f3f3f] mb-10 pl-5 border-l-2 border-[#ff385c]">
                {lead}
              </p>
              {children}
              <div className="flex flex-col gap-10">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="border-t border-[#ebebeb] pt-8"
                  >
                    <h2 className="text-[21px] font-bold leading-[1.43] mb-4 text-[#222222]">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {section.body.split('\n\n').map((para) => (
                        <p
                          key={para.slice(0, 20)}
                          className="text-[16px] font-normal leading-normal text-[#3f3f3f]"
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
