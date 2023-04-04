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
      <div className="pt-40 lg:pt-44  lg:h-screen lg:max-h-[720px] flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl">{t(`HomePage.slogan`)}</h1>
        <p className="mt-8 px-10 lg:mt-5 lg:w-[600px] text-center text-xl z-10">
          {t(`HomePage.content1`)}
          <br />
          {t(`HomePage.content2`)}
        </p>

        <div className="z-10 mt-8 lg:mt-6">
          <a
            href={t(`LafLink`)}
            className="z-40 inline-block bg-primary py-2 px-8 rounded-md text-white text-lg"
          >
            {t(`HomePage.start`)}
          </a>
        </div>
        <img
          className="mt-24 lg:hidden hover:cursor-pointer"
          src="./video3.svg"
          onClick={() => setPlay(true)}
        ></img>
        <div className="h-1/2">
          <img
            className="hidden lg:block mx-auto mt-[-100px]"
            src="./video2.svg"
          ></img>
          <img
            className=" mt-[-200px] mx-auto hidden lg:block hover:cursor-pointer"
            src="./play.svg"
            onClick={() => setPlay(true)}
          ></img>
        </div>

        <div
          className={
            play
              ? 'fixed z-50 top-0 inset-0 bg-gray-600 bg-opacity-50 h-full w-full'
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
              <DynamicComponentWithNoSSR />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
