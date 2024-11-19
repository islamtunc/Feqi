// Bismillahirahmanirahim



import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <a className={styles.title}>
          <span className={styles.nextjs}>Firdevs</span>
          <span className={styles.mongodb}>Kapısına</span>
          <span>.....</span>
        </a>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Okumaya Başlayın</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://yekazadsoftwarecenter.vercel.app"
              type="secondary"
              className={styles.button}
            >
              İletişim
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        </p>

        Cihekî hûn bi berfirehî ramanê xwe parvebikin. Slav li Şex Ehmed ê Xanî :

"Nînin li me fikrû zikrek

 Nakin bi zebanî hemd û şukrek"
      </div>
    </Wrapper>   
  );
};

export default Hero;
