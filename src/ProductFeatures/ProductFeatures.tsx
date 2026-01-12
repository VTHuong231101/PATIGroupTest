import feature1 from '../assets/images/feature-1.png';
import feature2 from '../assets/images/feature-2.webp';
import feature3 from '../assets/images/feature-3.webp';
import feature4 from '../assets/images/feature-4.webp';
import feature5 from '../assets/images/feature-5.png';
import feature6 from '../assets/images/feature-6.webp';

export const ProductFeatures = () => {
  return (
    <div className="product-features font-(family-name:--body-font) shrink-[0]">
      {/* 1 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature1} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>Join over 93 Thousand who say - it WORKS!</p>
        </div>
      </div>

      {/* 2 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature2} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>Restores your body’s natural 24-hour lymphatic cycle</p>
        </div>
      </div>

      {/* 3 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature3} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>
            Helps reduce fluid retention and the appearance of puffiness and
            bloating
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature4} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>
            Helps fall asleep faster, stay asleep longer and wake up energized
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature5} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>
            Eliminates joint stiffness, pain, morning creakiness and feel more
            grounded
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="feature-line flex shrink-[0] items-center gap-[12px] my-[16px]">
        <div className="w-[10%]">
          <img src={feature6} alt="" className="w-full" />
        </div>
        <div className="text-[16px] w-[100%]">
          <p>Boosts energy, mental clarity and emotional balance</p>
        </div>
      </div>
    </div>
  );
};
