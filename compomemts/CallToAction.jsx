import React from "react";
import styles from "../style/callToAction.module.scss";
import Image from 'next/image'
import ImgFonFirstSection from '../public/img/fon-img-firsht-second2.png'
const CallToAction = () => {
  return (
    <div className={styles.call_to_action_wrap}>
      <div className={styles.call_to_action_content_wrap}>
        <div className={styles.call_to_action_main_text}>
          <p className={styles.call_to_action_main_text_developer}>Розробка</p>
          <div className={styles.call_to_action_main_text_site_block}>
          <p className={styles.call_to_action_main_text_site}>Сайтів</p>
          <div className={styles.call_to_action_individual_approach_wrap}>
            <p className={styles.call_to_action_individual_approach_text}>
              З індивідуальним підходом
            </p>
          </div>
          </div>
          <p className={styles.call_to_action_main_text_buisness}>ДЛЯ БІЗНЕСУ</p>
        </div>
        <div className={styles.call_to_action_list_wrap}>
          <p>- Розробимо ефективний інструмент продажу</p>
          <p>- Збільшимо впізнаванність бренду</p>
          <p>- Залучимо потік клієнтів</p>
        </div>
        <div className={styles.call_to_action_create_button_wrap}>
          <button className={styles.call_to_action_create_button}>
            Створити сайт
          </button>
        </div>
      </div>
      <div className={styles.call_to_action_img_wrap}>
        {/* <Image className={styles.call_to_action_img} 
        src={ImgFonFirstSection} 
        alt="call-to-action"
        width={1000}
        height={1000}/> */}
      </div>
    </div>
  );
};

export default CallToAction;
