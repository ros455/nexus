'use client'
import React, {useState} from 'react';
import styles from '../../style/contactForm.module.scss';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiViber} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';
import {SiMaildotru} from 'react-icons/si';
import axios from 'axios';
const ContactForm = ({page}) => {
    const [name, setName] = useState('');
    const [numberOrMail, setNumberOrMail] = useState('');
    const [choseMassanger, setChoseMassanger] = useState('');
    const [messengersArray] = useState([
        {
            icon: <BsFillTelephoneFill className={styles.messenger_icon}/>,
            url: 'Telephone'
        },
        {
            icon: <BiLogoTelegram className={styles.messenger_icon}/>,
            url: 'Telegram'
        },
        {
            icon: <SiViber className={styles.messenger_icon}/>,
            url: 'Viber'
        },
        {
            icon: <BsWhatsapp className={styles.messenger_icon}/>,
            url: 'Whatsapp'
        },
        {
            icon: <SiMaildotru className={styles.messenger_icon}/>,
            url: 'Mail'
        },
    ]);

    const sendData = () => {
        axios.post(`${process.env.BASE_URL}/send-message`, {
                name,
                numberOrMail,
                choseMassanger
        })
        .then(() => window.location.reload())
        .catch((error) => {
            console.log('Request error',error);
        })
    }

    // Problem
    return (
      <div className={styles.contact_form_block}>
        <div className={styles.contact_form_main_url_wrap}>
          <h2 className={styles.contact_form_text_title}>
            {page.ContactForm.title}
          </h2>
        </div>
        <div className={styles.contact_form_name_input_wrap}>
          <p className={styles.contact_form_text}>{page.ContactForm.text1}</p>
          <input
            className={styles.contact_form_input}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.contact_form_phone_input_wrap}>
          <p className={styles.contact_form_text}>{page.ContactForm.text2}</p>
          <div className={styles.contact_form_phone_input_messengers_wrap}>
            {messengersArray.map((item) => (
              <div
                onClick={() => setChoseMassanger(item.url)}
                className={item.url == choseMassanger ? styles.active_icon : ""}
                key={item.url}
              > 
              <div className={styles.contact_form_icons_wrap_one}>
                {item.icon}
              </div>
              </div>
            ))}
          </div>
          <input
            className={styles.contact_form_input}
            onChange={(e) => setNumberOrMail(e.target.value)}
          />
          <p className={styles.contact_form_phone_input_example_phone}>
          {page.ContactForm.text3}
          </p>
        </div>
        <div className={styles.contact_form_button_wrap}>
          <button className={styles.contact_form_button} onClick={sendData}>
          {page.ContactForm.text4}
          </button>
        </div>
      </div>
    );
};

export default ContactForm;