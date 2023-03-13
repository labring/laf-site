import React from 'react'
import styles from './banner.module.css'
type Props = {}

const banner = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>像写博客一样写函数</p>
        <p>随时随地上线</p>
      </div>
        <button className={styles.button}>立即使用</button>
    </div>
  )
}

export default banner