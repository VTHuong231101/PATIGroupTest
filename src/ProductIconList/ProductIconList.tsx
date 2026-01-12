export const ProductIconList = () => {
  <div className="product__icon-list">
    <div className="icon-list__first flex items-center gap-[8px] my-[12px]">
      <div className="icon-list__icon w-[5%]">
        <img src="images/60-days.webp" alt="" />
      </div>
      <div className="icon-list__description text-[16px] font-(family-name:--body-font)">
        <p>60-Day Money-Back Guarantee</p>
      </div>
    </div>
    <div className="icon-list__second flex items-center gap-[8px] my-[12px">
      <div className="icon-list__icon w-[5%]">
        <img src="images/Frame-american.webp" alt="" />
      </div>
      <div className="icon-list__description text-[16px] font-(family-name:--body-font)">
        <p>Free Shipping From USA Included</p>
      </div>
    </div>
  </div>;
};
