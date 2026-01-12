export const ProductBundles = () => {
  <div className="bundle bg-[#f3eee0] rounded-[8px] p-[12px]">
    {/* mua 1 */}
    <label className="bundle__single-item block border border-(--bundle-primary) rounded-[12px] mb-[12px] font-(family-name:--body-font) overflow-hidden">
      <input
        type="radio"
        name="bundle-select"
        className="peer hidden"
        checked
      />
      <div className="selector__head flex gap-[12px] p-[16px] bg-white peer-checked:[&_.bubble-line]:border-(--bundle-primary) peer-checked:[&_.bubble-inner]:bg-(--bundle-primary)">
        <div className="selector__heade--bubble group">
          <div className="bubble-line flex justify-center items-center w-[26px] h-[26px] border-[2px] border-[rgba(247,160,160,1)] rounded-[50%]">
            <div className="bubble-inner w-[16px] h-[16px] rounded-[50%] bg-white"></div>
          </div>
        </div>

        <div className="selector__head--details w-full">
          <p className="text-[16px] font-semibold leading-[1.3em]">1 Bottle</p>
          <p className="text-[12px]">1 bottle total | Save $27.99</p>
        </div>
        <div className="selector__head--prices text-right text-(--bundle-text)">
          <p className="text-[16px] font-semibold">$31.96</p>
          <s className="text-[14px]">$59.95</s>
        </div>
      </div>
      <div className="selector__perk bg-(--bundle-secondary) peer-checked:bg-(--bundle-primary)">
        {/* free shipping */}
        <div className="flex items-center gap-[8px] px-[8px] py-[4px]">
          <div className="w-[34px]">
            <img src="images/icon-delivery.webp" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>Free USA Shipping</p>
          </div>
        </div>
      </div>
    </label>

    {/* mua 2  */}
    <label className="bundle__buy-two block border border-(--bundle-primary) rounded-[12px] mb-[12px] font-(family-name:--body-font) overflow-hidden">
      <input type="radio" name="bundle-select" id="" className="peer hidden" />
      <div className="selector__head flex gap-[12px] p-[16px] bg-white peer-checked:[&_.bubble-line]:border-(--bundle-primary) peer-checked:[&_.bubble-inner]:bg-(--bundle-primary)">
        <div className="selector__heade--bubble group">
          <div className="bubble-line flex justify-center items-center w-[26px] h-[26px] border-[2px] border-[rgba(247,160,160,1)] rounded-[50%]">
            <div className="bubble-inner w-[16px] h-[16px] rounded-[50%] bg-white"></div>
          </div>
        </div>

        <div className="selector__head--details w-full">
          <p className="text-[16px] font-semibold leading-[1.3em]">
            Buy 2 Get 1 Free
          </p>
          <p className="text-[12px]">3 bottles total | Save $115.93</p>
        </div>
        <div className="selector__head--prices text-right text-(--bundle-text)">
          <p className="text-[16px] font-semibold">$63.92</p>
          <s className="text-[14px]">$179.85</s>
        </div>
      </div>
      <div className="selector__perk bg-(--bundle-secondary) peer-checked:bg-(--bundle-primary)">
        {/* free shipping */}
        <div className="flex items-center gap-[8px] px-[8px] py-[4px] border-b border-white">
          <div className="w-[34px]">
            <img src="images/icon-delivery.webp" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>Free USA Shipping</p>
          </div>
        </div>

        {/* free anti */}

        <div className="flex items-center gap-[8px] px-[8px] py-[4px]">
          <div className="w-[34px]">
            <img src="images/icon-down.webp" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>Free Anti-Bloating Protocol E-book</p>
          </div>
        </div>
      </div>
    </label>

    {/* mua 3 */}
    <label className="bundle__buy-three block border border-(--bundle-primary) rounded-[12px] mb-[12px] font-(family-name:--body-font) overflow-hidden">
      <input type="radio" name="bundle-select" id="" className="peer hidden" />
      <div className="selector__head flex gap-[12px] p-[16px] bg-white peer-checked:[&_.bubble-line]:border-(--bundle-primary) peer-checked:[&_.bubble-inner]:bg-(--bundle-primary)">
        <div className="selector__heade--bubble group">
          <div className="bubble-line flex justify-center items-center w-[26px] h-[26px] border-[2px] border-[rgba(247,160,160,1)] rounded-[50%]">
            <div className="bubble-inner w-[16px] h-[16px] rounded-[50%] bg-white"></div>
          </div>
        </div>

        <div className="selector__head--details w-full">
          <p className="text-[16px] font-semibold leading-[1.3em]">
            Buy 3 Get 2 Free
          </p>
          <p className="text-[12px]">5 bottles total | Save $203.87</p>
        </div>
        <div className="selector__head--prices text-right text-(--bundle-text)">
          <p className="text-[16px] font-semibold">$95.88</p>
          <s className="text-[14px]">$299.75</s>
        </div>
      </div>
      <div className="selector__perk bg-(--bundle-secondary) peer-checked:bg-(--bundle-primary)">
        {/* free shipping */}
        <div className="flex items-center gap-[8px] px-[8px] py-[4px] border-b border-white">
          <div className="w-[34px]">
            <img src="images/icon-delivery.webp" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>Free USA Shipping</p>
          </div>
        </div>

        {/* free anti */}

        <div className="flex items-center gap-[8px] px-[8px] py-[4px] border-b border-white">
          <div className="w-[34px]">
            <img src="images/icon-down.webp" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>Free Anti-Bloating Protocol E-book</p>
          </div>
        </div>

        <div className="flex items-center gap-[8px] px-[8px] py-[4px]">
          <div className="w-[34px]">
            <img src="images/icon-gift.avif" alt="" />
          </div>
          <div className="font-(family-name:--body-font) text-[12px] text-white font-bold">
            <p>$20 Gift Card</p>
          </div>
        </div>
      </div>
    </label>
  </div>;
};
