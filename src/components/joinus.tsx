import React from 'react'
import styles from './joinus.module.css'
type Props = {}

export default function ({ }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.desc}>
            <div className={styles.title}>
              <img
                src="./joinustitle.svg"
              ></img>
            </div>
            <div className={styles.content}>在这里你可以在第一时间体验laf的最新版本，以及在 Slack 或微信群与开发者和用户保持沟通</div>
          <div className={styles.socials}>
            <a href="#">
              <img src="./weibo.svg" className={styles.icon}></img>
            </a>
            <a href="#">
              <img src="./weixin.svg" className={styles.icon}></img>
            </a>
            <a href="#">
              <img src="./zhihu.svg" className={styles.icon}></img>
            </a>
          </div>
          </div>
          
        </div>
        <div className={styles.right}>
          <img src="./joinus.svg"></img>
        </div>
      </div>
    </>
  )
}