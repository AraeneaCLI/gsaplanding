import { gsap } from "gsap";

import styles from '@/app/styles/home.module.scss';

import FlipText from '@/app/gsap/fliptext';
import Navbar from '@/app/gsap/navbar';
import Button from '@/app/gsap/button';

const Home = () => {

  return(
    <div>
      <div className={styles.screencont}>
      <Navbar/>
      <FlipText/>
      <Button/>
      </div>
    </div>
  )
}

export default Home;