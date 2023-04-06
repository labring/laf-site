'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Choice = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="mt-[120px]">
      <h2 className="font-[#152132] mb-[60px]"> {t(`Choice.title`)}</h2>
      <div className="lg:grid lg:grid-cols-3 mx-[16px] lg:gap-6 lg:mx-0 space-y-4 lg:space-y-0">
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-auto border-solid border boder-[#3C455D] rounded-md ">
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
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-auto border-solid border rounded-md boder-[#3C455D]">
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
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-auto border-solid border rounded-md boder-[#3C455D]">
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
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-auto border-solid border rounded-md boder-[#3C455D]">
          <div className="w-1/4">
            <img src="./logo4.svg"></img>
          </div>
          <div className="w-3/4">
            <h4 className="text-xl font-bold mb-2">{t(`Choice.simple`)}</h4>
            <p className="font-[##3C455D] text-base font-light">
              {t(`Choice.simpleSub`)}
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-[200px] border-solid border rounded-md boder-[#3C455D]">
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
        <div className="flex hover:bg-[#F9F9F9] p-[40px] justify-between h-[200px] border-solid border rounded-md boder-[#3C455D]">
          <div className="w-1/4">
            <img src="./logo6.png" className="w-12 h-12"></img>
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
