import React from "react";
import styles from '../style/header.module.scss';
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header_wrap}>
      <div className={styles.logo}>
        <Link href='/'>Logo</Link>
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
    </header>
  );
};

export default Header;
