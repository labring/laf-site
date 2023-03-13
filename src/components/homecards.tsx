import React from 'react'
import styles from './home.module.css'
import Homecard from './homecard'

type Props = {}

const homecards = (props: Props) => {
  return (
    <>
  
    <div className={styles.cards}>
      <div className={styles.title}>
          我们的能力
      </div>
      <div className={styles.part1}>
        <div className={styles.part1card}>
          <div className={styles.part1title}>FUNCTIONS</div>
          <div className={styles.part1content}>发布你的第一个函数，仅需5秒</div>
        </div>
        <div className={styles.part1card}>
          <div className={styles.part1title}>DATABASE</div>
          <div className={styles.part1content}>无需创建数据库，仅需一行代码，存储你的数据</div>
        </div>
        <div className={styles.part1card}>
          <div className={styles.part1title}>STORAGE</div>
          <div className={styles.part1content}>创建属于你的storage，文件存储更简单</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default homecards