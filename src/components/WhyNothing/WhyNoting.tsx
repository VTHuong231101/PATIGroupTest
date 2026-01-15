import crossIcon from '../../assets/images/cross-icon.png';

export const WhyNothing = () => {
  const cells = [
    {
      image: '//trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360',
      content:
        "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    },
    {
      image: 'https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359',
      content:
        'They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.',
    },
    {
      image:
        '//trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359',
      content:
        "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    },
  ];
  return (
    <div className='bg-(--yellow-background)'>
    <div className="pb-[24px] md:max-w-[1340px] md:mx-auto md:px-[5rem] md:pb-[0px]">
      <div className="why-nothing-container">
        <h2 className="why-nothing__title text-center text-[24px] font-(family-name:--heading-font) my-[16px] md:text-[32px] md:my-[16px]">
          Why Nothing Has <span className="text-(--dark-green)">Worked</span>
        </h2>
      </div>

      <div className="why-nothing__grid grid gap-[8px] px-[1.5rem] md:flex md:gap-[16px] md:mt-[40px]">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="why-nothing__cell rounded-[6px] overflow-hidden md:w-[33.3%]"
          >
            <div>
              <img src={cell.image} />
            </div>

            <div className="cell__content p-[16px] text-[16px] font-(family-name:--heading-font) bg-[#f7f7f7] md:text-[20px] md:text-center md:p-[24px]">
              <h4>
                You cut out gluten, dairy, sugar. You ate clean for months.
              </h4>
              <div className="pick-text bg-[#ffe3e3] rounded-[8px] mt-[12px] px-[16px] py-[8px] md:mt-[24px] md:min-h-[180px]">
                <p className="flex items-center justify-center gap-[6px]">
                  <span className='md:text-[16px] font-(family-name:--body-font) md:font-semibold'>Why it failed</span>
                  <span>
                    <img src={crossIcon} alt="" className="max-w-[24px]" />
                  </span>
                </p>

                <p className="nothing-text font-(family-name:--body-font) md:text-[16px] md:mt-[12px] md:font-bold md:leading-[1.3em]">{cell.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
