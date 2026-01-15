import './WhyBloatingSystem.css';

export const WhyBloatingSystem = () => {
  return (
    <div className="px-[1.5rem] md:max-w-[1340px] md:mx-auto md:px-[5rem] md:pb-[56px]">
      <div className="why-bloating-system__container mb-[24px]">
        <h2 className="container__title text-center text-[24px] font-(family-name:--heading-font) md:text-[32px]">
          Your <span className="text-(--dark-green)">Hidden</span> Drainage
          System
        </h2>
      </div>

      <div className="why-bloating-system__grid">
        <div className="first-grid md:flex md:flex-row-reverse md:gap-[100px]">
          <div className="grid__image mb-[24px] md:w-full">
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
              alt=""
              className="Desktop-only hidden md:block"
            />
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
              alt=""
              className="Mobile-only block md:hidden"
            />
          </div>

          <div className="grid__content md:w-full">
            <p>
              Your lymphatic system is your body's internal cleaning crew—a
              network of vessels that processes{' '}
              <strong>
                3-4 liters of cellular waste and excess fluid every single day.
              </strong>
            </p>

            <p>When it's working properly, you don't even know it exists.</p>

            <ul className="check-list">
              <li>Waste gets drained away</li>
              <li>Fluid stays balanced.</li>
              <li>Your body feels light and energized.</li>
            </ul>

            <div className="pick-text bg-[#ffe3e3] rounded-[8px] my-[12px] px-[16px] py-[8px]">
              <p>
                But after age 35, declining estrogen hijacks this system's
                ability to function.
              </p>
            </div>

            <ul className="ignore-list">
              <li>Vessel pumping weakens.</li>
              <li>One-way valves fail.</li>
              <li>Protein clogs form. </li>
              <li>Vessel walls become leaky.</li>
            </ul>

            <p>
              Instead of processing and removing waste, it backs up in your
              tissues.
            </p>
          </div>
        </div>

        <div className="second-grid md:flex md:gap-[100px] md:items-center">
          <div className="grid__image mt-[32px] md:w-full">
            <img
              loading="lazy"
              className="Desktop_only hidden md:block md:w-full"
              src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
            />
            <img
              loading="lazy"
              className="Mobile_only block md:hidden"
              src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
            />
          </div>

          <div className="grid__content mt-[24px] md:w-full">
            <p>
              <strong>
                And it accumulates. Day after day. Week after week.
              </strong>
            </p>

            <p>
              That gallon of fluid your body should be draining every 24 hours?
              It's pooling in your stomach, your legs, your face—anywhere
              gravity and tissue structure allow it to settle.
            </p>

            <div className="pick-text bg-[#ffe3e3] rounded-[8px] my-[12px] px-[16px] py-[8px]">
              <p>
                The metabolic waste your cells produce overnight? It's still
                sitting there at noon. At dinner. While you're trying to fall
                asleep.
              </p>

              <ul className="ignore-list">
                <li>That's why you're bloated. </li>
                <li>That's why your ankles swell.</li>
                <li>That's why you see cellulite.</li>
                <li>That's why you feel exhausted and foggy.</li>
              </ul>
            </div>

            <p>
              <strong>
                Your cells are literally sitting in their own waste—and your
                body can't flush it out.
              </strong>
            </p>

            <p>
              The longer this goes on, the worse it gets. More congestion. More
              inflammation. More pressure on an already compromised system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
