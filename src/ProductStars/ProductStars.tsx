import stars from '../assets/images/stars-review.png';

export const ProductStars = () => {
  return (
    <div className="product-stars flex items-center gap-[15px] mb-[16px]">
      <div className="stars w-[60px] h-auto">
        <img src={stars} alt="" />
      </div>

      <div className="font-(family-name:--body-font) text-[12px] flex items-center">
        <p>4.8/5 Excellent | Based on 2381 Reviews</p>
      </div>
    </div>
  );
};
