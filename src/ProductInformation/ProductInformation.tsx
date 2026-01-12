import { ProductImage } from './../ProductImage/ProductImage';
import { ProductDetails } from './../ProductDetails/ProductDetails';
export const ProductInformation = () => {
  return <section id="product-info py-[32px]">
    <div className="page-width px-[1.5rem]">
      {/* các section bên trong từ image đến product accordion */}
      <ProductImage />
      <ProductDetails />
    </div>
  </section>;
};
