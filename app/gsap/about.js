import gsap from "gsap";

import styles from '@/app/styles/about.module.scss';

const About = () => {
    return(
        <div className={styles.screencont}>
            <div>
                <div>
                    <div className={styles.firstscreen}>
                        <div className={styles.fbox}>
                            Animate Anything
                        </div>

                        <div className={styles.sbox}>
                            Whether you're animating UI, SVG or creating immersive WebGL experiences, GSAP has your back
                        </div>
                    </div>

                    <div className={styles.secondscreen}>
                        <div>
                            Nice and
                        </div>

                        <div>
                            Easy
                        </div>

                        <div className={styles.fontele}>
                            Easing
                        </div>

                        <div>
                            <div className={styles.fontele}>
                                add personality to your animations with a huger variety of 
                            </div>

                            <div>
                                Super
                            </div>

                            <div>
                                Plug-and-Play
                            </div>

                            <div className={styles.fontele}>
                                eases, or build your own custom curves
                            </div>

                            <div>
                                Choreograph
                            </div>

                            <div>
                                Animation
                            </div>

                            <div>
                                Sequences
                            </div>

                            <div className={styles.fontele}>
                                in a Snap
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;