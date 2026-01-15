import stars from '../../assets/images/stars-review.png';
import verifiedIcon from '../../assets/images/verified.avif';
import reviewOwner from '../../assets/images/review-owner.webp';

export const ProductReviews = () => {
  return (
    <div className="review bg-(--yellow-background) mt-[24px] p-[12px] rounded-[12px]">
      <div className="review__head flex gap-[16px] mb-[8px]">
        <div className="review__head--avatar w-[15%]">
          <img src={reviewOwner} alt="" />
        </div>

        <div className="review__head--details w-[100%]">
          <p className="details__name text-[16px] flex items-center gap-[8px] leading-[1.3em]">
            Margaret Ellison | FL
            <span className="flex items-center text-[16px] max-w-[120px]">
              <img src={verifiedIcon} alt="" />
            </span>
          </p>

          <div className="stars max-w-[100px]">
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
      <div className="review-description text-[16px] font-(family-name:--body-font)">
        <p className="mb-[8px] font-medium">
          <strong>Even my husband noticed... the spark came back.</strong>
        </p>
        <p>
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I’ve been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It’s hard to explain, but
          once you try it you’ll get it. I’d recommend this to my closest
          friends without question.
        </p>
      </div>
    </div>
  );
};
