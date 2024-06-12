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
    const nmorf = useRef();

    useEffect(() => {
        gsap.to(aRef.current, { scaleY: 1, duration: 1 , repeat: 1, yoyo: true, ease: 'elastic'});
        gsap.to(iRef.current, { y: -1, duration: 1 , repeat: -1, yoyo: true, ease: 'power1.inOut'});
        gsap.to(mRef.current, { x: 15, duration: 1 , repeat: -1, yoyo: true, repeatDelay: 2});
        gsap.to(hzRef.current, { x: 15, duration: 1 , repeat: -1, yoyo: true});
        gsap.fromTo( hzmovRef,{ x: -40}, { x: 40});
        gsap.to(nmorf, {
          duration: 2,
          text: "N",
          ease: "power1.inOut",
        });
        }, []);

    return(
        <div className={styles.colcontainer}>

        <div className={styles.lftcontainer}>
          <div className={styles.fontele} ref={aRef}>A</div>
          <div>
            <div className={styles.fontele} ref={nmorf}>n</div>
          </div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele} ref={mRef}>m</div>
          <div className={styles.fontele} ref={hzmovRef}>a</div>
          <div className={styles.fontele} ref={hzmovRef}>t</div>
          <div className={styles.fontele}>e</div>
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