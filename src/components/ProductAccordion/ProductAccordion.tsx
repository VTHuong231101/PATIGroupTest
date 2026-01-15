import { useEffect, useState } from 'react';

export const ProductAccordion = () => {
  const [openedAccordion, setOpenedAccordion] = useState<number>(-1);

  const tabs = [
    {
      title: 'Ingredients proven by science',
      image:
        'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844',
      content: (
        <>
          <p className="mb-[12px]">
            <strong>Sculptique Ingredients:</strong>
          </p>
          <ul className="list-disc ps-[40px] my-[15px]">
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
        </>
      ),
    },
    {
      title: 'How does it actually work?',
      image:
        'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844',
      content: (
        <p>
          Sculptique works by improving blood flow and supporting lymphatic
          drainage to reduce fluid buildup that causes puffiness, inflammation,
          and water retention. It also reduces inflammation and boosts collagen
          production to help skin become firmer and smoother.
        </p>
      ),
    },
    {
      title: 'Shipping and returns',
      image:
        'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844',
      content: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <div className="product__accordion mt-[16px]">
      {tabs.map((tab, index) => (
        <div
          onClick={() =>
            setOpenedAccordion((prev) => (prev === index ? -1 : index))
          }
          key={index}
          className="product_tab-block w-[100%] mb-[16px] p-[16px] rounded-[32px] border border-[#d2d2d2]"
        >
          <div className="product_tab-thumb flex justify-between items-center gap-[12px]">
            <p className="text-[16px]">{tab.title}</p>
            <span className="w-[24px]">
              <img
                src={tab.image}
                className={`transition-all duration-300 ease-in-out ${openedAccordion === index ? 'transform-[rotate(45deg)] ' : ''}`}
              />
            </span>
          </div>
          <div
            className={`product_tab-content text-[16px] overflow-hidden transition-all duration-300 ease-in-out
    ${
      openedAccordion === index
        ? 'max-h-[1000px] opacity-100 pt-[16px]'
        : 'max-h-0 opacity-0'
    }`}
          >
            {tab.content}
          </div>
        </div>
      ))}
    </div>
  );
};
