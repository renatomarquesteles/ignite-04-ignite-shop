import Image from 'next/image';

import shirt1 from '../assets/shirts/1.png';
import shirt2 from '../assets/shirts/2.png';
// import shirt3 from '../assets/shirts/3.png';
import { HomeContainer, Product } from '../styles/pages/home';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={480} />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 19.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} alt="" width={520} height={480} />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 19.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
