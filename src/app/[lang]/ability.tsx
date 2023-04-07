/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Ability = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="h-auto  ">
      <h2 className="text-[#152132] py-[80px] pb-[48px] lg:py-[60px] lg:pb-[60px]">
        {t(`Ability.title`)}
      </h2>
      <div className="w-full px-[16px] lg:hidden">
        <div className="lg:hidden bg-card w-full h-max-[520px] my-6 rounded-2xl">
          <div className="justify-between">
            <div className="p-6">
              <img className="mb-8" src="./icons1.svg"></img>
              <h3>
                <span className="bg-gradient-to-r from-[#00C24E] to-[#00A1FC] text-transparent bg-clip-text">
                  {t(`Ability.function`)}
                </span>
                {t(`Ability.functionSub`)}
              </h3>
              <div className="py-6 lg:py-32 text-info">
                {' '}
                <a href="#">
                  {t(`Ability.learn`)} {'>'}{' '}
                </a>
              </div>
            </div>
            <img
              className="mx-auto w-max-5/6 pl-8 lg:hidden "
              src="./function.png"
            ></img>
          </div>
        </div>
        <div className="lg:hidden bg-card w-full my-6 rounded-2xl">
          <div className="justify-between">
            <div className="p-6">
              <img className="mb-8" src="./icon2.svg"></img>
              <h3 className="leading-normal">
                <span className="bg-gradient-to-r from-[#00CCE8] to-[#00E8A2] text-transparent bg-clip-text">
                  {t(`Ability.database`)}
                </span>
                {t(`Ability.databaseSub`)}
              </h3>
              <div className="py-6 lg:py-32 text-info">
                {' '}
                <a href="#">
                  {t(`Ability.learn`)} {'>'}{' '}
                </a>
              </div>
            </div>
            <img className="mx-auto pl-8 lg:hidden " src="./database.png"></img>
          </div>
        </div>

        <div className="lg:hidden bg-card w-full my-6 rounded-2xl">
          <div className="justify-between">
            <div className="p-6">
              <img className="mb-6" src="./icons3.svg"></img>
              <h3>
                <span className="bg-gradient-to-r from-[#57E37A] to-[#00BEB1] text-transparent bg-clip-text">
                  {t(`Ability.storage`)}
                </span>
                {t(`Ability.storageSub`)}
              </h3>
              <div className="py-6 lg:py-32 text-info">
                {' '}
                <a href="#">
                  {t(`Ability.learn`)} {'>'}{' '}
                </a>
              </div>
            </div>
            <img className="mx-auto pl-8 lg:hidden " src="./storage.png"></img>
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-card w-full my-6 rounded-2xl">
        <div className="lg:flex lg:flex-row justify-between">
          <div className="p-6 lg:p-12">
            <img className="mb-6" src="./icons1.svg"></img>
            <h3 className="w-[300px]">
              <span className="bg-gradient-to-r from-[#00C24E] to-[#00A1FC] text-transparent bg-clip-text">
                {t(`Ability.function`)}
              </span>
              {t(`Ability.functionSub`)}
            </h3>
            <div className="mt-6 text-info">
              {' '}
              <a href="#" className="font-[500] flex gap-3 items-center">
                {t(`Ability.learn`)}
                <img src="/vector.svg" alt={'vector'}></img>
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-br-2xl">
            <img className="w-full lg:mt-8" src="./function.png"></img>
          </div>
          <div></div>
        </div>
      </div>
      <div className="hidden gap-6 lg:flex w-full ">
        <div className="relative bg-card pt-12 px-12 w-1/2 h-auto rounded-2xl">
          <img className="mb-6" src="./icon2.svg"></img>
          <h3 className="w-[400px]">
            <span className="bg-gradient-to-r from-[#00CCE8] to-[#00E8A2] text-transparent bg-clip-text">
              {t(`Ability.database`)}
            </span>
            {t(`Ability.databaseSub`)}
          </h3>
          <div className="py-4 mt-6 text-info">
            <a href="#" className="font-[500] flex gap-3 items-center">
              {t(`Ability.learn`)}
              <img src="/vector.svg" alt={'vector'}></img>
            </a>
          </div>
          <div className="h-1/2 absolute bottom-0 flex items-end">
            <img className="mx-auto" src="./database.png"></img>
          </div>
        </div>
        <div className="relative h-[600px] bg-card px-12 pt-12 w-1/2 rounded-2xl">
          <img className="mb-6" src="./icons.svg"></img>
          <h3 className="w-[400px]">
            <span className="bg-gradient-to-r from-[#57E37A] to-[#00BEB1] text-transparent bg-clip-text">
              {t(`Ability.storage`)}
            </span>
            {t(`Ability.storageSub`)}
          </h3>
          <div className="py-4 mt-6 text-info">
            {' '}
            <a href="#" className="font-[500] flex gap-3 items-center">
              {t(`Ability.learn`)}
              <img src="/vector.svg" alt={'vector'}></img>
            </a>
          </div>
          <div className="h-1/2 absolute bottom-0 flex items-end">
            <img className="mx-auto" src="./storage.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ability
