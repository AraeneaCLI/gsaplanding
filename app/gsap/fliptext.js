"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import styles from '@/app/styles/home.module.scss';

import fan from '@/app/img/fan.png';
import osm from '@/app/img/osm.svg';
import loading from '@/app/img/loading.svg';
import pink from '@/app/img/pink.svg';
import worm from '@/app/img/worm.png';
import purple from '@/app/img/purple.svg';

const FlipText = () => {

  const t1 = gsap.timeline();

    const aRef = useRef();
    const iRef = useRef();
    const contRef = useRef();
    const mRef = useRef();
    const hzRef = useRef();
    const hzmovRef = useRef();
    const nmorf = useRef();
    const uptodwn = useRef();
    const rghtmov = useRef();
    const rightflip = useRef();
    const nintydeg = useRef();
    const lfttoright = useRef();
    const disappear = useRef();
    const disappear2 = useRef();
    const disappear3 = useRef();
    const toptobottom = useRef();
    const popout = useRef();

    useEffect(() => {
        gsap.to(aRef.current, { y: -45, duration: 2 , repeat: 1, yoyo: true, ease: 'elastic'});
        gsap.to(iRef.current, { scaleY: -1, duration: 2, repeat: -1, repeatDelay: 3, yoyo: true, ease: 'power1.inOut'});
        gsap.fromTo( mRef.current,{ x: 0}, { x: 50, duration: 1 , repeat: 1, yoyo: true});
        gsap.to(hzRef.current, { y: -150, duration: 1 , repeat: 1, yoyo: true, ease: 'bounce.in'});
        gsap.fromTo( hzmovRef.current,{ x: -10}, { x: 10, duration: 1 , repeat: 1, yoyo: true});
        gsap.to(nmorf, {
          duration: 2,
          text: "A",
          ease: "power1.inOut",
        });
        gsap.fromTo(uptodwn.current, { y: -100 }, {y: 0, duration: 0.5});
        gsap.to(rghtmov.current, {rotation: 90, duration: 2 , repeat: -1, yoyo: true, ease: 'elastic'}); 
        gsap.to(rightflip.current, {rotation: 90, duration: 1 , repeat: 1, yoyo: true, ease: 'circ.in'});
        gsap.to(nintydeg.current, {rotation: 90, duration: 1, repeat: -1, delay:2, repeatDelay:0.5, ease: "power3.in"});
        gsap.fromTo(lfttoright.current, {x:-15, duration:1} , {x:0});
        gsap.fromTo(disappear.current, {opacity:0, duration:0.5}, {opacity:100, delay:3});
        gsap.to(disappear2.current, {opacity:0, duration:2, repeat:1});
        gsap.to(disappear3.current, {y:-45,duration:1, repeat:1, yoyo:true, ease: 'elastic'});
        gsap.fromTo(toptobottom.current, {y:-100, delay:4} , {y:-0, duration:1})
        gsap.to(popout.current, {duration: 1,scale: 1,opacity: 1,ease: 'back.out(1.7)' });
        
        t1.from(disappear3.current, {opacity:0, duration:2, repeat: 1});
        t1.to(popout.current, {y:-60, duration:1, repeat: 0, ease: 'elastic'}, {y:0});
        }, []);
        

    return(
      <div className={styles.colcontainer}>

        <div className={styles.lftcontainer}>
          <div className={styles.rowcontainer}>
          <div className={styles.fontele} ref={aRef}>A</div>

          <div className={styles.fontele}>

          <div>
          <div className={styles.flair}>
            <Image src={osm} alt='' height={100} width={100} ref={nintydeg}/>
          </div>
          
          <div>
            n
          </div>
          </div>
          
          </div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele} ref={mRef}>m</div>
          <div className={styles.fontele} ref={hzmovRef}>
            <div className={styles.flair}>
              <div ref={disappear2}>
                <Image src={pink} alt='' height={75} width={75} ref={lfttoright}/>
              </div>
            </div>
            <div className={styles.fontele} ref={disappear}>
              <div ref={toptobottom}>
                a
              </div>
            </div>
          </div>
          <div className={styles.fontele} ref={uptodwn}>t</div>
          <div className={styles.fontele}>e</div>
        </div>
        </div>

        <div className={styles.rhtcontainer}>
        <div className={styles.rowcontainer}>
          <div className={styles.fontele} ref={hzRef}>a</div>
          <div className={styles.fontele}>n</div>
          <div className={styles.fontele}>y</div>
          <div className={styles.fontele}>t</div>
          <div className={styles.fontele}>
            h
            <div>
              <Image src={worm} alt='' height={130} width={85} className={styles.wormcont}/>
            </div>
          </div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele}>n</div>
          <div className={styles.fontele}>g</div>

          <div className={styles.fan} ref={rghtmov}>
            <Image src={fan} alt='' width={120} height={120}/>
          </div>
        </div>
        </div>

      </div>
    )
};

export default FlipText;