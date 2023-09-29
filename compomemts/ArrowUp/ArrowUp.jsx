"use client";

import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styles from "../../style/arrowUp.module.scss";
export const ArrowUp = () => {
  const [isBool, setIsBool] = useState(false);


  const scrollHandller = (e) => {
    if (document.body.scrollTop > 300) {
      setIsBool(true);
    } else {
      setIsBool(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('scroll', scrollHandller)
    return () => document.body.removeEventListener('scroll', scrollHandller)
  }, [])


  const scrollTop = () => {
    // Вимкнути скрол
    document.body.style.overflow = 'hidden';
  
    const scrollToTop = () => {
      const currentScroll = document.body.scrollTop;

      let scrolBefore = document.body.scrollTop;
  
      if (currentScroll > 20) {
        window.requestAnimationFrame(scrollToTop);
        document.body.scrollTop = currentScroll - currentScroll / 30; // Змінюйте число для більшої або меншої плавності
      } else {
        // Після завершення прокрутки включити скрол назад
        document.body.style.overflow = 'auto';
      }
  
      let scrolAfter = document.body.scrollTop;
      if (scrolBefore < scrolAfter) {
        return;
      }
    };
  
    scrollToTop();
  };
  
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
