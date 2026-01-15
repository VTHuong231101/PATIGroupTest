import couponImage from '../../assets/images/coupon.avif';

export const Coupons = () => {
  return (
    <div className="coupon max-w-full">
      <img src={couponImage} alt="" className='md:w-full'/>
    </div>
  );
};
