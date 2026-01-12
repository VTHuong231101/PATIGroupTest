export const ProductAccordion = () => {
  return (
    <div className="product__accordion mt-[16px]">
      <div className="product_tab-block mb-[16px] p-[16px] rounded-[32px] border border-[#d2d2d2]">
        <div className="product_tab-thumb flex justify-between items-center gap-[12px]">
          <p className="text-[16px]">Ingredients proven by science</p>
          <span className="w-[24px]">
            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844" />
          </span>
        </div>
        <div className="text-[16px] hidden hidden text-[16px]">
          <p>
            <strong>Sculptique Ingredients:</strong>
          </p>
          <ul>
            <li>
              <strong>Echinacea purpurea Extract</strong> – Known for its
              anti-inflammatory properties, it may support skin health.
            </li>
            <li>
              <strong>Dandelion Extract</strong> – Traditionally used as a
              diuretic, it may help reduce water retention.
              <br />
              <strong>Burdock Powder</strong>– Contains antioxidants that may
              promote skin clarity.
            </li>
            <li>
              <strong>Cleavers Extract</strong> – Believed to support lymphatic
              drainage and detoxification.
            </li>
            <li>
              <strong>Rutin</strong> – A flavonoid that may strengthen blood
              vessels and improve circulation.
            </li>
            <li>
              <strong>Bromelain Powder</strong> – An enzyme from pineapple that
              may reduce inflammation and support tissue repair.
            </li>
            <li>
              <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in
              collagen production and skin rejuvenation.
            </li>
            <li>
              <strong>Kelp Extract</strong> – A source of iodine and minerals
              that may support skin metabolism.
            </li>
          </ul>
          <p>
            These natural ingredients work together to reduce puffiness,
            bloating, fluid retention.
          </p>
        </div>
      </div>

      <div className="product_tab-block mb-[16px] p-[16px] rounded-[32px] border border-[#d2d2d2]">
        <div className="product_tab-thumb flex justify-between items-center gap-[12px]">
          <p className="text-[16px]">How does it actually work?</p>
          <span className="w-[24px]">
            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844" />
          </span>
        </div>
        <div className="text-[16px] hidden hidden text-[16px]">
          <p>
            Sculptique works by improving blood flow and supporting lymphatic
            drainage to reduce fluid buildup that causes puffiness,
            inflammation, and water retention. It also reduces inflammation and
            boosts collagen production to help skin become firmer and smoother.
          </p>
        </div>
      </div>

      <div className="product_tab-block mb-[16px] p-[16px] rounded-[32px] border border-[#d2d2d2] active">
        <div className="product_tab-thumb flex justify-between items-center gap-[12px]">
          <p className="text-[16px]">Shipping and returns</p>
          <span className="w-[24px]">
            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844" />
          </span>
        </div>
        <div className="product_tab-content pt-[16px] text-[16px] hidden">
          <p>
            All of Sculptique orders get FREE shipping straight from our USA
            warehouse. Orders are usually shipped out within 1-2 working days,
            and you should receive the order within 3-7 working days for
            domestic USA orders, and within 10 working days for International
            orders.
          </p>
          <p>
            We also offer a 60-day money back guarantee - if you are unsatisfied
            with our product, you can take advantage of our guarantee and ship
            back the product to us to get your return within 60 days of
            receiving your order.
          </p>
        </div>
      </div>
    </div>
  );
};
