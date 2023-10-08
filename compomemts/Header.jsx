import React from "react";
import styles from '../style/header.module.scss';
import Link from "next/link";
import ChangeColor from "./ChangeColor/ChangeColor";
import Image from 'next/image'
import Logo from '../public/logo-header.svg'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

const Header = async ({lang}) => {
  const { page } = await getDictionary(lang)
  return (
    <header className={styles.header_wrap}>
      <div className={styles.header_box}>
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
            <Link href='/'>{page.Header.link1}</Link>
            <Link href='/services'>{page.Header.link2}</Link>
            <Link href='/portfolios'>{page.Header.link3}</Link>
            <Link href='/aboutus'>{page.Header.link4}</Link>
            <Link href='/contsct'>{page.Header.link5}</Link>
            <Link href='/calculation'>{page.Header.link6}</Link>
          </ul>
        </nav>
        <ChangeColor/>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
