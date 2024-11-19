import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>FİR</span>
          <span className={styles.mongodb}>DEVS</span>
          <span>Kapısı</span>
        </h1>
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

        Cihekî hûn bi berfirehî ramanê xwe parvebikin. <br><br/>Slav li Şex Ehmed ê Xanî :
<br><br/>
"Nînin li me fikrû zikrek
<br><br/>
 Nakin bi zebanî hemd û şukrek"
      </div>
    </Wrapper>
  );
};

export default Hero;
