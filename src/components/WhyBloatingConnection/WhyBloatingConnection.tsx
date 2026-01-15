export const WhyBloatingConnection = () => {
  return (
    <div className="px-[1.5rem] md:max-w-[1340px] md:mx-auto">
      <div className="why-bloating-connection__container">
        <h2 className="container__title text-center text-[24px] font-(family-name:--heading-font) md:text-[32px]">
          The Connection{' '}
          <span className="text-(--dark-green)">You've Been Missing</span>
        </h2>
      </div>

      <div className="why-bloating-connection__grid mt-[16px] md:max-w-[920px] md:mx-auto">
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
          alt=""
          className="Desktop-only hidden md:block"
        />
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
          alt="Mobile-only"
          className=" block md:hidden"
        />
      </div>
    </div>
  );
};
