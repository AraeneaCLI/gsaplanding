"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import styles from '@/app/styles/home.module.scss';

const Navbar = () => {

    const GRef = useRef();
    const SRef = useRef();
    const ARef = useRef();
    const PRef = useRef();

    useEffect(() => {
        gsap.to(GRef.current, { x:30, duration: 1 , repeat: 1, yoyo: true});
    }, []);

    return(
        <div className={styles.maincontainer}>
            <div className={styles.centercont}>
                <div className={styles.rowcontainer} ref={GRef}>
                    <div className={styles.Gnavbar}>
                        G
                    </div>

                    <div className={styles.Snavbar}>
                        $
                    </div>

                    <div className={styles.Anavbar}>
                        A
                    </div>

                    <div className={styles.Pnavbar}>
                        P
                    </div>
                </div>
            </div>
            
            <div className={styles.rowcontainer}>
                <div className={styles.navelement}>
                <div className={styles.navfont}>
                    TOOLS
                </div>

                <div className={styles.navfont}>
                    PRICING
                </div>

                <div className={styles.navfont}>
                    SHOWCASE
                </div>

                <div className={styles.navfont}>
                    RESOURCES
                </div>

                <div className={styles.navfont}>
                    COMMUNITY
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
