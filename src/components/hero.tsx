import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'

type Props = {}

const hero = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        
      <div className={styles.left}>
        <div className={styles.description}>
          <p className={styles.title}>像写博客一样，写函数</p>
          <p className={styles.contents}>laf 是一个集函数、数据库、存储为一体的云开发平台，随时随地，部署上线</p>
          <button className={styles.button}>在线体验</button>
        </div>
      </div>

        <div className={styles.right}>
   
          <img
            src="/console.svg"
            className={styles.img}
          />
        </div>

      </div>
    </>
  )
}

export default hero