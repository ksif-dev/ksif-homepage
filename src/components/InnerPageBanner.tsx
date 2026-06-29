interface InnerPageBannerProps {
  title: string;
}

export const InnerPageBanner = ({ title }: InnerPageBannerProps) => {
  return (
    <section className="bg-[#f7f7f7] px-6 pt-12 pb-8">
      <div className="max-w-245 mx-auto">
        <h1 className="text-[28px] font-bold leading-[1.43] text-[#222222]">
          {title}
        </h1>
        <div className="mt-8 border-t border-[#dddddd]" />
      </div>
    </section>
  );
};
