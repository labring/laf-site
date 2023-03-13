import React from 'react'
import styles from './wecan.module.css'
type Props = {}

const choose = (props: Props) => {
  return (
    <>
      {/* function */}
      <div className={styles.threeparts}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <img
              src="./functionword.svg"
              className={styles.titleword}
            />
          </div>

          <div className={styles.contents}>
            <div className={styles.conttitle}>5秒创建你的第一个函数</div>
            <div className={styles.contdesc}>laf 拥有强大的在线编辑器界面，让你一站式完成创建、调试和发布</div>
          </div>

          <a href="#" className={styles.getinfo}>
            了解详情 →
            </a>
        </div>
        <div className={styles.right}>
          <img
            src="./func1.svg"
            className={styles.func}
          />
          <img
            src="./addfunc.svg"
            className={styles.addfunc}
          />
        </div>
      </div>

    {/* database */}
      <div className={styles.container}>
        <div className={styles.databaseleft}>
          <img
            src="./databasebg.svg"
            className={styles.database}
          />
          <img
            src="./databasefront.svg"
            className={styles.adddatabase}
          />
        </div>
        <div className={styles.databaseright}>
          <div className={styles.databasetitle}>
            <img
              src="./databaseword.svg"
              className={styles.databasetitleword}
            />
          </div>
          <div className={styles.contents}>
            <div className={styles.conttitle}>无需创建数据库，开箱即用</div>
            <div className={styles.contdesc}>你可以在集合界面上方便地管理你应用的数据，也可以通过 sdk 做相关的数据操作</div>
          </div>
          <a href="#" className={styles.getinfo}>
            了解详情 →
            </a>
        </div>
      </div>

      {/* storage */}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.storagetitle}>
            <img
              src="./storageword.svg"
              className={styles.titleword}
            />
          </div>
          <div className={styles.contents}>
            <div className={styles.conttitle}>创建属于你的云储存<br></br>
              管理文件更简单</div>
            <div className={styles.contdesc}>你可以在界面上方便地管理你应用的文件，也可以
              通过 sdk 做相关的文件操作</div>
          </div>
          <a href="#" className={styles.getinfo}>
            了解详情 →
            </a>
   
        </div>
        <div className={styles.right}>
          <img
            src="./storagebg.svg"
            className={styles.func}
          />
          <img
            src="./storagefront.svg"
            className={styles.addstorage}
          />
        </div>
      </div>
      </div>
    </>
  )
}

export default choose