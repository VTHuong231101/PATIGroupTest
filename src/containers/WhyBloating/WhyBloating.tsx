import { Arrow } from '../../components/Arrow/Arrow';
import { MissingPiece } from '../../components/MissingPiece/MissingPiece';
import { ProductJudge } from '../../components/ProductJudge/ProductJudge';
import { WhyBloatingConnection } from '../../components/WhyBloatingConnection/WhyBloatingConnection';
import { WhyBloatingNote } from '../../components/WhyBloatingNote/WhyBloatingNote';
import { WhyBloatingSystem } from '../../components/WhyBloatingSystem/WhyBloatingSystem';
import { WhyNothing } from '../../components/WhyNothing/WhyNoting';

export const WhyBloating = () => {
  return (
    <section className="page-width pt-[32px] md:pt-[5rem]]">
      <ProductJudge />
      <WhyBloatingNote />
      <Arrow />
      <WhyBloatingConnection />
      <Arrow />
      <WhyBloatingSystem />
      <WhyNothing />
      <MissingPiece />
    </section>
  );
};
