"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import styles from '@/app/styles/home.module.scss';

import {Loading} from '@/app/img/loading.svg';

const FlipText = () => {
    const aRef = useRef();
    const iRef = useRef();
    const contRef = useRef();
    const mRef = useRef();
    const hzRef = useRef();
    const hzmovRef = useRef();

    useEffect(() => {
        gsap.to(aRef.current, { scaleY: 1, duration: 1 , repeat: 1, yoyo: true, ease: 'elastic'});
        gsap.to(iRef.current, { scaleY: -1, duration: 1 , repeat: -1, yoyo: true, ease: 'power1.inOut'});
        gsap.to(mRef.current, { x: 15, duration: 1 , repeat: -1, yoyo: true, repeatDelay: 2});
        gsap.to(hzRef.current, { x: 15, duration: 1 , repeat: -1, yoyo: true});
        gsap.fromTo( hzmovRef,{ x: -40}, { x: 40});

        gsap.to(contRef.current, { x:-15 , y: 60 , repeat:8, yoyo: true,
          stagger: {
            grid: [7,15],
            from: "random",
            axis: "y",
            ease: "power2.in",
            amount: 1.5
          }, ease: "slow(0.7,0.7,false)"});
        }, []);

    return(
        <div className={styles.colcontainer}>

        <div className={styles.lftcontainer} ref={contRef}>
          <div className={styles.fontele} ref={aRef}>A</div>
          <div>
            <div className={styles.fontele}>N</div>
          </div>
          <div className={styles.fontele} ref={hzmovRef}>I</div>
          <div className={styles.fontele} ref={mRef}>M</div>
          <div className={styles.fontele} ref={hzmovRef}>A</div>
          <div className={styles.fontele} ref={hzmovRef}>T</div>
          <div className={styles.fontele}>E</div>
        </div>

        <div className={styles.rhtcontainer}>
        <div className={styles.rowcontainer}>
          <div className={styles.fontele} ref={hzRef}>a</div>
          <div className={styles.fontele}>n</div>
          <div className={styles.fontele}>y</div>
          <div className={styles.fontele}>t</div>
          <div className={styles.fontele}>h</div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele}>n</div>
          <div className={styles.fontele}>g</div>
        </div>
        </div>

      </div>
    )
};

export default FlipText;