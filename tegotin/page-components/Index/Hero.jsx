// Bismillahirahmanirahim



import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';
import { Mmger } from '@/components/mmtab';



const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Fer</span>
          <span className={styles.mongodb}>henga</span>
          <span>Mela</span>
        </h1>

        <div style={{justifySelf:"center"}}> <Mmger /></div>
       
       <br></br><br></br>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Bixwîne</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
        
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
