import React from 'react'

type Props = {}

const hero = (props: Props) => {
  return (
    <>
      <div className="pt-40 lg:pt-32  lg:h-screen flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl">写博客一样，写函数</h1>
        <p className="mt-8 px-10 lg:mt-5 lg:w-[550px] text-center text-xl">
          Laf 是一个集函数、数据库、存储为一体的云开发平台
          <br />
          随时随地，发布上线
        </p>

        <div className="mt-8 lg:mt-6">
          <button className="z-10 bg-primary py-4 px-12 rounded-md text-white">
            在线体验
          </button>
        </div>

        {/* <img className='hidden lg:block lg:absolute lg:top-1/2'
          src="./video.svg"
        >
        </img> */}

        <img className="mt-24 lg:hidden" src="./video1.svg"></img>
        <div className='h-1/2'>
        <img className="hidden lg:block mx-auto mt-[-100px]" src="./video.svg"></img>
        <img className="z-10 mt-[-200px] mx-auto hidden lg:block" src="./play.svg"></img>
      </div></div>
    
       
    </>
  )
}

export default hero
