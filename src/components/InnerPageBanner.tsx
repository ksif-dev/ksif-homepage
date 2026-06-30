interface InnerPageBannerProps {
  title: string;
}

export const InnerPageBanner = ({ title }: InnerPageBannerProps) => {
  return (
    <section className="bg-[#25282b] px-8 pt-24 pb-16">
      <div className="max-w-245 mx-auto">
        <p className="text-[16px] font-extrabold uppercase text-[#e60000] mb-4">
          KSIF
        </p>
        <h1 className="text-[48px] font-light leading-[52px] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};
