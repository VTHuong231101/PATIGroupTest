import { ProductImage } from '../../components/ProductImage/ProductImage';
import { ProductDetails } from '../ProductDetails/ProductDetails';
export const ProductInformation = () => {
  return (
    <section id="product-info" className='py-[32px]'>
      <div className="page-width px-[1.5rem] md:flex md:gap-[64px] md:px-[5rem] lg:mx-auto md:max-w-[1340px]">
        {/* các section bên trong từ image đến product accordion */}
        <ProductImage />
        <ProductDetails />
      </div>
    </section>
  );
};
