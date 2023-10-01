import React from "react";
import styles from "../style/footer.module.scss";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { SiViber } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { getDictionary } from '@/lib/dictionary';
const Footer = async ({lang}) => {
  const { page } = await getDictionary(lang)
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.first_block}>
        <div className={styles.work_schedule_wrap}>
          <div className={styles.work_schedule_icon_wrap}>
            <BiLogoTelegram className={styles.work_schedule_icon}/>
            <SiViber className={styles.work_schedule_icon}/>
            <BsWhatsapp className={styles.work_schedule_icon}/>
          </div>
          <div className={styles.work_schedule_text_wrap}>
            <p className={styles.work_schedule_text}>{page.Footer.Work_schedule}</p>
            <p>{page.Footer.Schedule}</p>
          </div>
        </div>
          <nav>
            <div className={styles.footer_links_wrap}>
              <div className={styles.footer_link}>
                <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link1}</Link>
              </div>
              <div className={styles.footer_link}>
              <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link2}</Link>
              </div>
              <div className={styles.footer_link}>
              <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link3}</Link>
              </div>
              <div className={styles.footer_link}>
              <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link4}</Link>
              </div>
              <div className={styles.footer_link}>
              <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link5}</Link>
              </div>
              <div className={styles.footer_link}>
              <p className={styles.footer_link_round}></p>
                <Link href='/'>{page.Footer.link6}</Link>
              </div>
            </div>
          </nav>
        <div className={styles.footer_contacts_wrap}>
            <div className={styles.footer_contacts_numbers_wrap}>
                <div className={styles.footer_contacts_numbers_icon_wrap}>
                <BsFillTelephoneFill className={styles.footer_contacts_numbers_icon}/>
                </div>
                <div className={styles.footer_contacts_numbers_block}>
                    <p className={styles.footer_contacts_number}>+38 (000) 000 00 00</p>
                    <p className={styles.footer_contacts_number}>+38 (000) 000 00 00</p>
                </div>
            </div>
            <div className={styles.footer_button_wrap}>
              <button className={styles.footer_button}>{page.Footer.back_call}</button>
            </div>
            <div className={styles.footer_contacts_post_wrap}>
                <SiMaildotru className={styles.footer_contacts_post_icon}/>
                <p className={styles.footer_contacts_post_text}>nexuslab2000@gmail.com</p>
            </div>
        </div>
      </div>
      <div className={styles.bottom_text}>{page.Footer.rules}</div>
    </div>
  );
};

export default Footer;
