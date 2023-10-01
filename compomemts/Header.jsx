import React from "react";
import styles from '../style/header.module.scss';
import Link from "next/link";

import ChangeColor from "./ChangeColor/ChangeColor";
import Image from 'next/image'
import Logo from '../public/logo-header.svg'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

const Header = () => {
  return (
    <header className={styles.header_wrap}>
      <div className={styles.logo}>
        <Link href='/'>
            <Image  
            className={styles.header_logo}
            src={Logo} 
            alt="Logo"
            width={1000}
            height={1000}/>
        </Link>
      </div>
      <nav className={styles.nav_block}>
        <ul className={styles.nav_wrap}>
          <Link href='/'>Головна</Link>
          <Link href='/services'>Послуги</Link>
          <Link href='/portfolios'>Шаблони</Link>
          <Link href='/aboutus'>Про нас</Link>
          <Link href='/contsct'>Контакти</Link>
        </ul>
      </nav>
      <ChangeColor/>
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
