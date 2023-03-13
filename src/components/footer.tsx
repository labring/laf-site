import React from 'react'
import styles from './footer.module.css'

type Props = {}

export default function foot({ }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.title}>Product</div>
          <ul>
            <li>
              <a href="#" target="_blank">laf公有云</a>
            </li>
            <li>
              <a href="#" target="_blank">更新日志</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Developers</div>
          <ul>
            <li>
              <a href="#" target="_blank">如何安装laf</a>
            </li>
            <li>
              <a href="#" target="_blank">open API</a>
            </li>
            <li>
              <a href="#" target="_blank">laf贡献者指南</a>
            </li>
            <li><a href="#" target="_blank">source code</a>
            </li>
          </ul>
        </div>

        <div className={styles.item}>
          <div className={styles.title}>Support</div>
          <ul>
            <li>
              <a href="#" target="_blank">问题反馈</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}