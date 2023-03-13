import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
    <div className={styles.like}>
      <img src="./ifyoulike.svg" className={styles.iflike}></img>
      <img src="./cancel.svg"></img>
    </div>

    <div className={styles.container}>
    <div className={styles.left}>
    <div className={styles.logo}>
    <img
            src="/icon.svg"
            className={styles.img}
          />
      </div>

      <Link href="/">
        <div className={styles.item}>主页</div>
      </Link>
      <Link href="pricing">
        <div className={styles.item}>价格</div>
      </Link>
      <Link href="showcase">
        <div className={styles.item}>案例</div>
      </Link>
      <Link href="aboutus">
        <div className={styles.item}>关于我们</div>
      </Link>
      <Link href="faq">
        <div className={styles.item}>FAQ</div>
      </Link>
      </div>
    <div className={styles.right}>
    <Link href="#">
        <img src="./doc.svg"></img>
      </Link>
      <Link href="#">
        <img src="./language.svg"></img>
      </Link>
      <Link href="#">
        <img src="./github.svg"></img>
      </Link>
  
    </div>
    </div>
    </>
  )
}