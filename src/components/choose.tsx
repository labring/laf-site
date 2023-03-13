import React from 'react'
import styles from './choose.module.css'
type Props = {}

export default function choose({ }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.title}>更开放</div>
            <div className={styles.content}>laf 遵循 Apache License 2.0 开源协议</div>
            <div className={styles.icon}>
              <img src="./card1.svg">
              </img>
            </div>
          </div>
          <div className={styles.card}>
          <div className={styles.title}>请求更快</div>
            <div className={styles.content}>没有冷启时间<br></br>让你的请求响应更快</div>
            <div className={styles.icon}>
              <img src="./card2.svg">
              </img>
            </div>
          </div>
          <div className={styles.card}>
          <div className={styles.title}>支持私有化部署</div>
            <div className={styles.content}>担心云服务不稳定？没关系,<br></br>我们支持完全的私有化部署</div>
            <div className={styles.icon}>
              <img src="./card2.svg">
              </img>
          </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.card}>
          <div className={styles.title}>开发更简单</div>
            <div className={styles.content}>无需关心部署、运维，一切都<br></br>是 serverless</div>
            <div className={styles.icon}>
              <img src="./card2.svg">
              </img>
          </div>
          </div>
          <div className={styles.card}>
          <div className={styles.title}>高性价比</div>
            <div className={styles.content}>1000 次调用，仅需 0.1 元
体验更多的价格方案 <a href="#" className={styles.site}>请点击</a></div>
            <div className={styles.icon}>
              <img src="./card2.svg">
              </img>
          </div>
          </div>
          <div className={styles.card6}>
            <img src="./card6.svg"></img>
            <div className={styles.card6content}></div>
            <button className={styles.button}>立即体验 &gt;</button>
          </div>
        </div>
      </div>
    </>
  )
}