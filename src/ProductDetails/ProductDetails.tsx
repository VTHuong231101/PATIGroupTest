import { AddToCart } from '../AddToCart/AddToCart';
import { ATCFooterLine } from '../ATCFooterLine/ATCFooterLine';
import { Coupons } from '../Coupons/Coupons';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { ProductAccordion } from '../ProductAccordion/ProductAccordion';
import { ProductBundles } from '../ProductBundles/ProoductBundles';
import { ProductDelivery } from '../ProductDelivery/ProductDelivery';
import { ProductFrontRow } from '../ProductFrontRow/ProductFrontRow';
import { ProductIconList } from '../ProductIconList/ProductIconList';
import { ProductReviews } from '../ProductReviews/ProductReviews';
import { ProductStars } from '../ProductStars/ProductStars';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import { ProductFeatures } from './../ProductFeatures/ProductFeatures';

export const ProductDetails = () => {
  // container của phần details
  return (
    <div className="product-detail">
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
