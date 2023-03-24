'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Ability = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="mx-8 lg:mx-32 lg:pt-4 h-auto">
      <h2 className="font-[#152132]">{t(`Ability.title`)}</h2>
      <div className="bg-card w-full  my-6 rounded-2xl">
        <div className="lg:flex lg:flex-row justify-between">
          <div className="p-6 lg:pl-12 lg:w-1/3">
            <img className="lg:mt-12 mb-8" src="./icons1.svg"></img>
            <h3 className="leading-normal">
              <span className="bg-gradient-to-r from-[#00C24E] to-[#00A1FC] text-transparent bg-clip-text">
                {t(`Ability.function`)}
              </span>
              {t(`Ability.functionSub`)}
            </h3>
          </div>
          <img
            className="hidden lg:block pl-6 lg:w-3/5 lg:mt-8"
            src="./func1.svg"
          ></img>

          <img className="mx-auto pl-8 lg:hidden " src="./func1.svg"></img>
        </div>
      </div>
      <div className="lg:hidden bg-card w-full  my-6 rounded-2xl">
        <div className="justify-between">
          <div className="p-6">
            <img className="mb-8" src="./icon2.svg"></img>
            <h3 className="leading-normal">
              <span className="bg-gradient-to-r from-[#00CCE8] to-[#00E8A2] text-transparent bg-clip-text">
                {t(`Ability.database`)}
              </span>
              {t(`Ability.databaseSub`)}
            </h3>
          </div>
          <img className="mx-auto pl-8 lg:hidden " src="./database1.svg"></img>
        </div>
      </div>
      <div className="lg:hidden bg-card w-full  my-6 rounded-2xl">
        <div className="justify-between">
          <div className="p-6">
            <img className="mb-8" src="./icons3.svg"></img>
            <h3 className="leading-normal">
              <span className="bg-gradient-to-r from-[#57E37A] to-[#00BEB1] text-transparent bg-clip-text">
                {t(`Ability.storage`)}
              </span>
              {t(`Ability.storageSub`)}
            </h3>
          </div>
          <img className="mx-auto pl-8 lg:hidden " src="./storage1.svg"></img>
        </div>
      </div>
      <div className="hidden lg:flex w-full ">
        <div className="bg-card pl-12 w-1/2 h-auto mr-3 rounded-2xl">
          <img className="mt-12 mb-8" src="./icon2.svg"></img>
          <h3 className="leading-normal">
            <span className="bg-gradient-to-r from-[#00CCE8] to-[#00E8A2] text-transparent bg-clip-text">
              {t(`Ability.database`)}
            </span>
            {t(`Ability.databaseSub`)}
          </h3>
          <div className="py-4 mt-12 font-info"></div>
          <img className="h-[240px]" src="./database.svg"></img>
        </div>
        <div className=" bg-card pl-12 w-1/2 ml-3 rounded-2xl">
          <img className="mt-12 mb-8" src="./icons.svg"></img>
          <h3 className="leading-normal">
            <span className="bg-gradient-to-r from-[#57E37A] to-[#00BEB1] text-transparent bg-clip-text">
              {t(`Ability.storage`)}
            </span>
            {t(`Ability.storageSub`)}
          </h3>
          <div className="py-4 mt-12 font-info"> </div>
          <img className="h-[240px]" src="./storage.svg"></img>
        </div>
      </div>
    </div>
  )
}

export default Ability
