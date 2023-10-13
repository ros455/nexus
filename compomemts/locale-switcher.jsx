'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../style/switcherLanguage.module.scss';
import { i18n } from '@/i18n.config'

export default function LocaleSwitcher({lang}) {
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className={styles.switcher_wrap}>
      {i18n.locales.map(locale => {
        return (
          <div key={locale} className={`${styles.switcher_block} ${locale == lang ? styles.switcher_active  : ''}`}>
            <Link
              href={redirectedPathName(locale)}
              className={styles.switcher_item}
            >
              {locale}
            </Link>
          </div>
        )
      })}
    </ul>
  )
}
