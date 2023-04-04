/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import React from 'react'
import Circle from './circle'

type Props = {}

const Joinus = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="mt-32">
      <div className="hidden lg:flex lg:flex-row h-auto relative my-8 mx-24 w-auto bg-repeat bg-cover bg-[url('/joinbg.svg')] rounded-3xl">
        <div className="w-2/5 m-16">
          <div className=" text-white text-5xl mb-4 "> {t('Join.title')}</div>
          <div className="text-white text-5xl mb-4">{t('Join.subtitle')}</div>
          <p className="text-white font-thin mb-8">{t('Join.content')}</p>

          <div className="flex justify-start gap-4">
            <a href="https://discord.gg/6VhVrsaS" target="_blank">
              <div className="w-36 h-12 flex border border-opacity-30	 border-blue-200 flex-row justify-center gap-2 items-center bg-gradient-to-r from-[#394DFF1A] to-[#66E3FF33] rounded-md">
                <img src="./game2.svg"></img>
                <p className="text-white">Discord</p>
              </div>
            </a>
            <a
              href="https://w4mci7-images.oss.laf.run/wechat.png"
              target="_blank"
            >
              <div className="w-36 h-12 flex border border-opacity-30	 border-green-200 flex-row justify-center gap-2 items-center bg-gradient-to-r from-[#2CE25E1A] to-[#1DFFD61A] rounded-md">
                <img src="./weixin2.svg"></img>
                <p className="text-white">{t('Join.WeChat')}</p>
              </div>
            </a>
            <a href="https://forum.laf.run/" target="_blank">
              <div className="w-36 h-12 flex border border-opacity-30	 border-blue-300 flex-row justify-center gap-2 items-center bg-gradient-to-r from-[#0B9DFF1A] to-[#4FC67E1A] rounded-md">
                <img src="./forum.svg"></img>
                <p className="text-white">{t('Join.forum')}</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="absolute top-[150px] right-[255px] w-[64px] h-[64px]"
            src="./laflogo1.svg"
          ></img>
          <div className="absolute top-36 right-72">
            <Circle />
          </div>
          <img
            className="border hover:border-primary absolute top-64 right-40 rounded-full h-12 w-12 object-cover"
            src="./p3.png"
          ></img>
          <img
            className="border hover:border-primary absolute top-16 right-48 rounded-full h-12 w-12 object-cover"
            src="./p2.png"
          ></img>
          <img
            className="border hover:border-primary absolute top-28 right-80 rounded-full h-14 w-14 object-cover"
            src="./p1.png"
          ></img>
          <img
            className="border hover:border-primary absolute top-64 right-72 rounded-full h-14 w-14 object-cover"
            src="./p4.png"
          ></img>
          <img
            className="border hover:border-primary absolute top-24 right-96 rounded-full h-12 w-12 object-cover"
            src="./p5.png"
          ></img>
        </div>
      </div>
      <div className="flex relative lg:hidden flex-col items-center mx-8 h-[650px] bg-cover bg-repeat bg-[url('/mobilejoinbg.svg')] rounded-3xl">
        <div className="mt-12 text-white text-center text-4xl mb-4 ]">
          {t('Join.title')}
        </div>
        <div className="text-white text-4xl mb-4">{t('Join.subtitle')}</div>
        <p className="text-white font-thin mb-8 mx-4 text-center">
          {t('Join.content')}
        </p>
        <div className="flex justify-start gap-4">
          <a
            href="https://w4mci7-images.oss.laf.run/wechat.png"
            target="_blank"
          >
            <img className="w-6" src="./weixin1.svg"></img>
          </a>

          <a href="https://discord.gg/6VhVrsaS" target="_blank">
            <img className="w-6" src="./game1.svg"></img>
          </a>
          <a href="https://forum.laf.run/" target="_blank">
            <img className="w-6" src="./forum1.svg"></img>
          </a>
        </div>
        <div className="absolute w-[400px] bottom-48 right-42">
          <div className="absolute border bottom-[-50px] right-[150px] border-gray-400 h-[100px] w-[100px] rounded-full" />
          <div className="absolute border bottom-[-75px] right-[125px] border-gray-400 h-[150px] w-[150px] rounded-full" />
          <div className="absolute border bottom-[-125px] right-[75px] border-gray-400 h-[250px] w-[250px] rounded-full" />
          <div className="absolute border bottom-[-100px] right-[100px] border-gray-400 h-[200px] w-[200px] rounded-full animate-pulse" />
          <img
            className="absolute bottom-[-30px] right-[165px] h-[64px] w-[64px]"
            src="./laflogo1.svg"
          ></img>
          <img
            className="border hover:border-primary absolute  bottom-[-100px] right-[100px] rounded-full h-12 w-12 object-cover"
            src="./p3.png"
          ></img>
          <img
            className="border hover:border-primary absolute  bottom-[-50px] right-[250px] rounded-full h-12 w-12 object-cover"
            src="./p2.png"
          ></img>
          <img
            className="border hover:border-primary absolute  bottom-[-120px] right-[250px]  rounded-full h-14 w-14 object-cover"
            src="./p1.png"
          ></img>
          <img
            className="border hover:border-primary absolute  bottom-[20px] right-[80px]  rounded-full h-14 w-14 object-cover"
            src="./p4.png"
          ></img>
          <img
            className="border hover:border-primary absolute  bottom-[40px] right-[250px] rounded-full h-12 w-12 object-cover"
            src="./p5.png"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Joinus
