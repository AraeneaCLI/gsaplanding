"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import styles from '@/app/styles/home.module.scss';

import {fan} from '@/app/img/fan.png';
import {osm} from '@/app/img/osmanthus.png';

const FlipText = () => {
    const aRef = useRef();
    const iRef = useRef();
    const contRef = useRef();
    const mRef = useRef();
    const hzRef = useRef();
    const hzmovRef = useRef();
    const nmorf = useRef();
    const uptodwn = useRef();

    useEffect(() => {
        gsap.to(aRef.current, { y: -45, duration: 2 , repeat: 1, yoyo: true, ease: 'elastic'});
        gsap.to(iRef.current, { scaleY: -1, duration: 2, repeat: -1, repeatDelay: 3, yoyo: true, ease: 'power1.inOut'});
        gsap.fromTo( mRef.current,{ x: 0}, { x: 100, duration: 1 , repeat: 1, yoyo: true});
        gsap.to(hzRef.current, { x: -45, duration: 0.5 , repeat: 1, yoyo: true});
        gsap.fromTo( hzmovRef.current,{ x: -10}, { x: 10, duration: 1 , repeat: 1, yoyo: true});
        gsap.to(nmorf, {
          duration: 2,
          text: "N",
          ease: "power1.inOut",
        });
        gsap.fromTo(uptodwn.current, { y: -100 }, {y: 0, duration: 0.5});
        gsap.to(uptodwn.current, {}); 
        }, []);

    return(
        <div className={styles.colcontainer}>

        <div className={styles.lftcontainer}>
          <div className={styles.fontele} ref={aRef}>A</div>
          <div>
            <div>
              <Image src={fan} alt="" width={50} height={50} />
            </div>
            <div className={styles.fontele} ref={nmorf}>n</div>
          </div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele} ref={mRef}>m</div>
          <div className={styles.fontele} ref={hzmovRef}>a</div>
          <div className={styles.fontele} ref={uptodwn}>t</div>
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
          <Image src={osm} alt='' width={30} height={30}/>
        </div>
        </div>

      </div>
    )
};

export default FlipText;