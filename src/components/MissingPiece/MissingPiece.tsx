export const MissingPiece = () => {
  return (
    <section className="missing-piece px-[1.5rem] bg-(--yellow-background) pb-[70px] mb-[35px]">
      <div className="missing-piece__image">
        <img
          src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
          alt=""
          className="Desktop-only hidden md:block md:max-w-[920px] md:mx-auto"
        />
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
          alt=""
          className="Mobile-only block md:hidden"
        />
      </div>

      <button type="button" className="mt-[24px] text-center w-full">
        <a
          href="https://pay.trysculptique.com/lymphatic/checkout"
          className="product_primary-btn bg-black rounded-[6px] block text-[16px] p-[16px] text-center text-white font-bold font-(family-name:--body-font) cursor-pointer 
          md:inline-block md:py-[18px] md:px-[80px]"
        >
          Try Lymphatic Drainage Risk-Free
        </a>

        <p className="product_primary-btn-footer flex items-center justify-center gap-[16px] md:my-[16px]">
          <span>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              className="w-[24px]"
            />
          </span>
          <span className="md:text-[16px] md:font-semibold">60 day money-back guarantee</span>
        </p>
      </button>
    </section>
  );
};
