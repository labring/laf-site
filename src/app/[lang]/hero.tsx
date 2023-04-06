/* eslint-disable @next/next/no-img-element */
'use client'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = {}

const DynamicComponentWithNoSSR = dynamic(() => import('./video'), {
  ssr: false,
})

const Hero = (props: Props) => {
  const [play, setPlay] = useState(false)
  const t = useTranslations()

  return (
    <>
      <div className="pt-36 lg:pt-44 h-auto lg:h-[720px] overflow-hidden flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl">{t(`HomePage.slogan`)}</h1>
        <p className="mt-8 px-10 lg:mt-5 lg:w-[600px] text-center text-xl z-10">
          {t(`HomePage.content1`)}
          <br />
          {t(`HomePage.content2`)}
        </p>

        <div className="z-10 mt-8 lg:mt-6">
          <a
            href={t(`LafLink`)}
            className="z-40  bg-primary h-[48px] w-[144px] text-[16px] flex justify-center items-center rounded-md text-white hover:active:bg-[#00AFA3]"
          >
            {t(`HomePage.start`)}
          </a>
        </div>
        <div className="hidden lg:flex w-[968px] justify-center absolute top-[324px] h-[375px] bg-center mx-auto bg-no-repeat bg-contain bg-[url('/videobg.png')]">
          <img
            src="/play.svg"
            alt="play"
            className="absolute top-[200px] z-10 hover:cursor-pointer "
            onClick={() => setPlay(true)}
          ></img>
        </div>
        <img
          className="lg:hidden w-[350px] object-cover h-[200px] hover:cursor-pointer"
          src="./videomobile.png"
          alt="video"
          onClick={() => setPlay(true)}
        ></img>

        <div
          className={
            play
              ? 'fixed z-50 top-0 inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 h-full w-full'
              : ' hidden'
          }
          id="my-modal"
        >
          <div className={play ? 'relative top-10 mx-auto' : 'hidden'}>
            <div className="w-3/4 mx-auto relative">
              <button
                className="pt-2 pr-2 absolute z-20 right-0 top-0"
                onClick={() => setPlay(false)}
              >
                <Image
                  width={24}
                  height={24}
                  className="bg-black rounded-2xl hover:cursor-pointer hover:bg-gray-600"
                  src="/cancelbtn.svg"
                  alt="cancelbtn"
                ></Image>
              </button>
              {play ? <DynamicComponentWithNoSSR /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
