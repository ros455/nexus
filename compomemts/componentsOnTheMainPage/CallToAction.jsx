import React from "react";
import styles from "../../style/callToAction.module.scss";
import Image from 'next/image'
import ImgFonFirstSection from '../../public/img/fon-img-firsht-second2.png'
import { getDictionary } from '@/lib/dictionary';

const CallToAction = async ({lang}) => {
  const { page } = await getDictionary(lang)
  return (
    <div className={styles.call_to_action_wrap}>
      <div className={styles.call_to_action_content_wrap}>
        <div className={styles.call_to_action_main_text}>
          <p className={styles.call_to_action_main_text_developer}>{page.CallToAction.title_p1}</p>
          <div className={styles.call_to_action_main_text_site_block}>
          <p className={styles.call_to_action_main_text_site}>{page.CallToAction.title_p2}</p>
          <div className={styles.call_to_action_individual_approach_wrap}>
            <p className={styles.call_to_action_individual_approach_text}>
            {page.CallToAction.title_p3}
            </p>
          </div>
          </div>
          <p className={styles.call_to_action_main_text_buisness}>{page.CallToAction.title_p4}</p>
        </div>
        <div className={styles.call_to_action_list_wrap}>
          <p>- {page.CallToAction.list_1}</p>
          <p>- {page.CallToAction.list_2}</p>
          <p>- {page.CallToAction.list_3}</p>
        </div>
        <div className={styles.call_to_action_create_button_wrap}>
          <button className={styles.call_to_action_create_button}>
          {page.CallToAction.button_text}
          </button>
        </div>
      </div>
      <div className={styles.call_to_action_img_wrap}>
        <Image className={styles.call_to_action_img} 
        src={ImgFonFirstSection} 
        alt="call-to-action"
        width={1000}
        height={1000}/>
      </div>
      </div>
  );
};

export default CallToAction;
