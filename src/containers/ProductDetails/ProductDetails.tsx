import { AddToCart } from '../../components/AddToCart/AddToCart';
import { ATCFooterLine } from '../../components/ATCFooterLine/ATCFooterLine';
import { Coupons } from '../../components/Coupons/Coupons';
import { PaymentMethods } from '../../components/PaymentMethods/PaymentMethods';
import { ProductAccordion } from '../../components/ProductAccordion/ProductAccordion';
import { ProductBundles } from '../../components/ProductBundles/ProoductBundles';
import { ProductDelivery } from '../../components/ProductDelivery/ProductDelivery';
import { ProductFrontRow } from '../../components/ProductFrontRow/ProductFrontRow';
import { ProductIconList } from '../../components/ProductIconList/ProductIconList';
import { ProductReviews } from '../../components/ProductReviews/ProductReviews';
import { ProductStars } from '../../components/ProductStars/ProductStars';
import { ProductTitle } from '../../components/ProductTitle/ProductTitle';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';

export const ProductDetails = () => {
  // container của phần details
  return (
    <div className="product-detail py-[32px] md:py-[0] md:w-full">
      <ProductStars />
      <ProductTitle />
      <ProductFeatures />
      <ProductFrontRow />
      <ProductBundles />
      <ProductDelivery />
      <AddToCart />
      <ATCFooterLine />
      <PaymentMethods />
      <Coupons />
      <ProductIconList />
      <ProductReviews />
      <ProductAccordion />
    </div>
  );
};
