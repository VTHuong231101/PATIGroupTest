export const ProductJudge = () => {
  const cells = [
    {
      image:
        'https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800',
      content:
        'Your stomach is flat in the morning, but by evening you look six months pregnant.',
    },
    {
      image:
        'https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799',
      content: 'Your ankles disappear into "kankles" by the end of the day.',
    },
    {
      image:
        'https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801',
      content:
        "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    },
    {
      image:
        'https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799',
      content: "You feel foggy and exhausted even after a full night's sleep.",
    },
    {
      image:
        'https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799',
      content: 'You wake up stiff and achy, like your body aged overnight.',
    },
  ];
  return (
    <div className="px-[1.5rem] md:max-w-[1340px] md:mx-auto">
      <div className="product-judge__container md:max-w-[800px] md:mx-auto">
        <h2 className="product-section_title text-center text-[24px] font-(family-name:--heading-font) md:text-[32px] md:my-[16px]">
          Why Your{' '}
          <span className="text-(--dark-green)">
            Bloating, Brain Fog &amp; Swollen Legs
          </span>{' '}
          Are Actually Connected
        </h2>

        <div className="product-judge__content text-center font-(family-name:--body-font) text-[16px] my-[16px] md:text-[18px]">
          If you're experiencing more than one of these symptoms, your body is
          trying to tell you something:
        </div>
      </div>
      <div className="why-bloating__grid flex flex-col gap-[16px] mb-[32px] md:flex-row md:mt-[40px] md:mb-[0px]">
        {cells.map((cell, index) => (
          <div key={index} className="why-bloating__cell flex md:flex-col md:w-[25%] md:rounded-[6px] md:overflow-hidden">
            <div className="w-[50%] md:w-full">
              <img src={cell.image} alt="" className="lg:min-h-[150px] lg:w-full"/>
            </div>
            <div className="why-bloating__cell--description w-[50%] bg-[#f7f7f7] flex items-center md:w-full md:min-h-[150px] md:items-start md:p-[16px]">
              <p className="text-center text-[16px] font-(family-name:--body-font)">
                {cell.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
