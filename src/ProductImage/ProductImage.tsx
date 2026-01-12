export const ProductImage = () => {
  <div className="product-image">
    <div className="desktop"></div>

    <div className="mobile md:w-dvw mb-[8px]">
      <div className="product-image__carousel relative">
        <button
          type="button"
          className="navigation-left w-[32px] h-[32px] absolute top-[50%] left-[24px]"
        >
          <img src="images/nav-left.webp" alt="" className="" />
        </button>
        <div className="product-image__carousel--main flex justify-center">
          <img
            src="images/main-image-1.webp"
            alt=""
            className="product-image__feature rounded-lg"
          />
          <img
            src="images/badge-sale.avif"
            alt=""
            className="product-image__badge w-[80px] absolute top-[15px] right-[15px]"
          />
          <div className="nutri-info flex gap-[8px] justify-center max-w-[290px] bg-[#ffffffd9] rounded-[24px] border border-black absolute bottom-[32px] px-[24px] py-[8px]">
            <span>
              <img
                src="images/nutri-info.png"
                alt=""
                className="w-[24px] h-[24px]"
              />
            </span>
            <span className="font-(family-name:--other-font) text-[14px] flex items-center">
              Nutritional Information
            </span>
          </div>
        </div>
        <button
          type="button"
          className="navigation-right w-[32px] h-[32px] absolute top-[50%] right-[24px]"
        >
          <img src="images/nav-right.webp" alt="" className="" />
        </button>
      </div>
      <div className="product-image__carousel--thumbnail mt-[8px] grid grid-cols-4 gap-[8px]">
        <div>
          <img src="images/main-image-1.webp" alt="" className="rounded-lg" />
        </div>
        <div>
          <img src="images/main-image-2.webp" alt="" className="rounded-lg" />
        </div>
        <div>
          <img src="images/main-image-3.webp" alt="" className="rounded-lg" />
        </div>
        <div>
          <img src="images/main-image-4.webp" alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  </div>;
};
