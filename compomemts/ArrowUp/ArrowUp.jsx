"use client";

import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styles from "../../style/arrowUp.module.scss";
export const ArrowUp = () => {
  const [isBool, setIsBool] = useState(false);

  useEffect(() => {
    console.log('Effect work');
    document.addEventListener('scroll', scrollHandller)
    return () => document.removeEventListener('scroll', scrollHandller)
  }, [])

  const scrollHandller = (e) => {
    console.log('function efect work');
    if(window.scrollY > 300) {
        setIsBool(true)
    }
    else{
        setIsBool(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



  // const scrollHandller = (e) => {
  //   if (document.body.scrollTop > 300) {
  //     setIsBool(true);
  //   } else {
  //     setIsBool(false);
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener('scroll', scrollHandller)
  //   return () => document.body.removeEventListener('scroll', scrollHandller)
  // }, [])

  // console.log('document.body.scrollTop',document.body.scrollTop);


  // const scrollTop = () => {
  //   // Вимкнути скрол
  //   document.body.style.overflow = 'hidden';
  
  //   const scrollToTop = () => {
  //     const currentScroll = window.scrollY;

  //     let scrolBefore = window.scrollY;
  
  //     if (currentScroll > 20) {
  //       window.requestAnimationFrame(scrollToTop);
  //       window.scrollTo(0 ,currentScroll - currentScroll / 30); // Змінюйте число для більшої або меншої плавності
  //     } else {
  //       // Після завершення прокрутки включити скрол назад
  //       document.body.style.overflow = 'auto';
  //     }
  
  //     let scrolAfter = window.scrollY;
  //     if (scrolBefore < scrolAfter) {
  //       return;
  //     }
  //   };
  
  //   scrollToTop();
  // };
  
  return (
    <>
      {isBool && (
        <div className={styles.arrow_up}>
          <button onClick={scrollTop}>
            <FaArrowAltCircleUp className={styles.arrow_up_icon} />
          </button>
        </div>
      )}
    </>
  );
};
