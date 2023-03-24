'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Choice = (props: Props) => {
  const t = useTranslations()
  return (
    <div>
      <h2 className="font-[#152132]"> {t(`Choice.title`)}</h2>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 mx-8 lg:mx-32 space-y-4 lg:space-y-0">
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo1.svg"></img>
          </div>
          <div className="w-3/4 ">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.open`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {' '}
              {t(`Choice.openSub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo2.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.fast`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {t(`Choice.fastSub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo3.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.private`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {t(`Choice.privateSub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo4.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.simple`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {t(`Choice.simplesub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo5.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.cheap`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {t(`Choice.cheapSub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] px-8 pt-12 justify-between h-[200px] border-solid border rounded-md border-border-gray">
          <div className="w-1/4">
            <img src="./logo6.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.service`)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice
