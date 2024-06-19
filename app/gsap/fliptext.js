"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

import styles from '@/app/styles/home.module.scss';

import fan from '@/app/img/fan.png';
import osm from '@/app/img/osm.svg';
import loading from '@/app/img/loading.svg';
import pink from '@/app/img/pink.svg';
import worm from '@/app/img/worm.png';
import purple from '@/app/img/purple.svg';
import t from '@/app/img/t.svg';

const FlipText = () => {

    gsap.registerPlugin(TextPlugin);

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
    const textmorph = useRef();
    const ayaxisflip =  useRef();
    const flwrlefttoright = useRef();
    const svgRef = useRef();

    const thormovdown = useRef();

    var tl = gsap.timeline({repeat:0, repeatDelay: 2});
    var t2 = gsap.timeline();
    var t3 = gsap.timeline({repeat:0});
    var t4 = gsap.timeline({repeat:-1, yoyo:true});

    useEffect(() => {

        gsap.to(iRef.current, { scaleY: -1, duration: 0.5, repeat: -1, repeatDelay: 2, yoyo: true, ease: 'power1.inOut'});
        gsap.to(hzRef.current, { y: -150, duration: 1 , repeat: 1, yoyo: true, ease: 'bounce.in'});
        gsap.fromTo(uptodwn.current, { y: -100 }, {y: 0, duration: 0.5});
        gsap.to(rghtmov.current, {rotation: 90, duration: 2 , repeat: -1, yoyo: true, ease: 'elastic'}); 
        gsap.to(rightflip.current, {rotation: 90, duration: 1 , repeat: 1, yoyo: true, ease: 'circ.in'});
        gsap.to(disappear3.current, {y:-45,duration:1, repeat:1, yoyo:true, ease: 'elastic'});
        gsap.to(popout.current, {duration: 1,scale: 1,opacity: 1,ease: 'back.out(1.7)' });
        gsap.to(nintydeg.current, {rotation: 360, duration: 0.5, repeat: -1, repeatDelay:3, ease: "power3.in"})


        tl
        .fromTo(flwrlefttoright.current, {x:-90} , {x:800})
        .fromTo(flwrlefttoright.current, {x:800} , {x:0})
        .to(nintydeg.current, {rotation: 360, duration: 0.5, ease: "power3.in"})
        .to(textmorph.current, {
          duration: 4,
          text: "n",
          ease: "slow",
        });

        t2
        .fromTo(ayaxisflip.current, {x:-45, duration: 2, yoyo:true, ease: 'elastic'}, {x:0})
        .fromTo(aRef.current, { y: -45, duration: 2 , yoyo: true, ease: 'elastic'}, {y: 0});

        t3
        .fromTo( mRef.current, { x: 0}, { x: 100, duration: 1 , yoyo: true})
        .fromTo( mRef.current, { x: 100}, { x: 0, duration: 1 , yoyo: true})
        .fromTo( hzmovRef.current,{ x: -10}, { x: 10, duration: 1 , yoyo: true})
        .fromTo( hzmovRef.current,{ x: 10}, { x: 0, duration: 1 , yoyo: true})
        .to(disappear2.current, {opacity:0})
        .fromTo(disappear.current, {opacity:0, duration:0.5}, {opacity:100})
        .fromTo(toptobottom.current, {y:-100, delay:4} , {y:-0, duration:1})
        .fromTo(lfttoright.current, {x:-15, duration:1} , {x:0});

        t3
        .to(svgRef.current, {
          scale: 0.5,
          transformOrigin: "center",
          duration: 1,
          ease: "power1.inOut",
        });
    

        }, []);
        

    return (
      <div className={styles.colcontainer}>
        <div className={styles.lftcontainer}>
          <div className={styles.rowcontainer}>

          <div ref={ayaxisflip}>
          <div className={styles.fontele} ref={aRef}>A</div>
          </div>

          <div className={styles.fontele}>

          <div className={styles.container}>
          
          <div className={styles.flair} ref={flwrlefttoright}>
          <div>
            <Image src={osm} alt='' height={125} width={125} ref={nintydeg}/>
          </div>
          </div>
          
          <div ref={textmorph}>
            a
          </div>
          </div>
          
          </div>
          <div className={styles.fontele} ref={iRef}>i</div>
          <div className={styles.fontele} ref={mRef}>m</div>

          <div className={styles.fontele}>
            <div className={styles.flair2} ref={hzmovRef}>
              <div ref={disappear2}>
                <Image src={pink} alt='' height={125} width={125} ref={lfttoright}/>
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
          <div className={styles.fontele}>
            <div>
              t
            </div>
            <div>
              <Image src={t} alt='' height={140} width={100} useRef={svgRef}/>
            </div>
          </div>
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
            <Image src={fan} alt='' width={150} height={150}/>
          </div>
        </div>
        </div>

      </div>
    )
};

export default FlipText;