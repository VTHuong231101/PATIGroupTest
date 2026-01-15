import leftNavigation from '../../assets/images/nav-left.webp';
import rightNavigation from '../../assets/images/nav-right.webp';
import mainImage1 from '../../assets/images/main-image-1.webp';
import mainImage2 from '../../assets/images/main-image-2.webp';
import mainImage3 from '../../assets/images/main-image-3.webp';
import mainImage4 from '../../assets/images/main-image-4.webp';
import saleBadge from '../../assets/images/badge-sale.avif';
import nutriInfo from '../../assets/images/nutri-info.png';

export const ProductImage = () => {
  return (
    <div className="product-image md:w-full">
      <div className="desktop hidden md:block">
        <div className="Desktop_only main_product-images">
          <div className="main_product-image relative flex justify-center">
            <img
              loading="eager"
              src="//trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"
              className='rounded-[8px]'
            />
            <div className="nutri-info flex gap-[8px] justify-center max-w-[290px] bg-[#ffffffd9] rounded-[24px] border border-black absolute bottom-[32px] px-[24px] py-[8px]">
              <span>
                <img src={nutriInfo} alt="" className="w-[24px] h-[24px]" />
              </span>
              <span className="font-(family-name:--other-font) text-[14px] flex items-center">
                Nutritional Information
              </span>
            </div>

            <img
              className="main-producT_bf_badge absolute max-w-[120px] top-[16px] right-[16px]"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
            />
          </div>
          <div className="main_product-2nd flex gap-[16px] mt-[16px]">
            <div>
              <img
                loading="eager"
                src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
                className='rounded-[8px]'
              />
            </div>

            <div>
              <img
                loading="eager"
                src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
                className='rounded-[8px]'
              />
            </div>
          </div>
          <div className="main_product-3rd flex gap-[16px] mt-[16px]">
            <div>
              <img
                loading="eager"
                src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
                className='rounded-[8px]'
              />
            </div>

            <div>
              <img
                loading="eager"
                src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
                className='rounded-[8px]'
              />
            </div>

            <div>
              <img
                loading="eager"
                src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
                className='rounded-[8px]'
              />
            </div>
          </div>
          <div className="main_product-2nd bottom flex gap-[16px] mt-[16px]">
            <div>
              <img
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
                className='rounded-[8px]'
              />
            </div>

            <div>
              <img
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
                className='rounded-[8px]'
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile mb-[8px] md:hidden">
        <div className="product-image__carousel relative">
          <button
            type="button"
            className="navigation-left w-[32px] h-[32px] absolute top-[50%] left-[24px]"
          >
            <img src={leftNavigation} alt="" className="" />
          </button>
          <div className="product-image__carousel--main flex justify-center">
            <img
              src={mainImage1}
              alt=""
              className="product-image__feature rounded-lg"
            />
            <img
              src={saleBadge}
              alt=""
              className="product-image__badge w-[80px] absolute top-[15px] right-[15px]"
            />
            <div className="nutri-info flex gap-[8px] justify-center max-w-[290px] bg-[#ffffffd9] rounded-[24px] border border-black absolute bottom-[32px] px-[24px] py-[8px]">
              <span>
                <img src={nutriInfo} alt="" className="w-[24px] h-[24px]" />
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
            <img src={rightNavigation} alt="" className="" />
          </button>
        </div>
        <div className="product-image__carousel--thumbnail mt-[8px] grid grid-cols-4 gap-[8px]">
          <div>
            <img src={mainImage1} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={mainImage2} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={mainImage3} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={mainImage4} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
