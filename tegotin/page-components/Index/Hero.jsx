import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Nizanim</span>
          <span className={styles.mongodb}>wisa</span>
          <span>TêGotin...</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Bixwîne</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://https://www.yekazadsoftwarecenter.vercel.app"
              type="secondary"
              className={styles.button}
            >
              Têkilî
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        </p>

        Cihekî hûn bi berfirehî ramanê xwe parvebikin. Medya yek civakî jibo Agirî yê,slav li Şex Ehmed ê Xanî
      </div>
    </Wrapper>
  );
};

export default Hero;
