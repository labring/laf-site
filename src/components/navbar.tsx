import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.left}>
    <div className={styles.logo}>LOGO</div>

      <Link href="#home">
        <div className={styles.item}>Home</div>
      </Link>
      <Link href="#pricing">
        <div className={styles.item}>Pricing</div>
      </Link>
      <Link href="#showcase">
        <div className={styles.item}>Showcase</div>
      </Link>
      <Link href="#aboutus">
        <div className={styles.item}>About US</div>
      </Link>
      <Link href="#faq">
        <div className={styles.item}>FAQ</div>
      </Link>
      </div>
    <div className={styles.right}>
    <Link href="#">
        <div className={styles.item}>github</div>
      </Link>
      <Link href="#">
        <div className={styles.item}>docs</div>
      </Link>
      <Link href="#">
        <div className={styles.item}>EN</div>
      </Link>
      <Link href="#">
        <div className={styles.item}>立即使用</div>
      </Link>
    </div>
    </div>
    </>
  )
}