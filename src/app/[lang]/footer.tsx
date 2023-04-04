'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = {}

const Footer = (props: Props) => {
  const t = useTranslations()
  return (
    <>
      <div className="hidden lg:flex bg-[#F9F9F9] justify-center">
        <div className=" flex-col px-48 pt-10 w-full max-w-[1600px] divide-solid divide-y divide-gray-200">
          <div className="pt-12 pb-10">
            <div className="flex justify-between">
              <div className="w-1/2">
                <Image
                  src="/logo_text.png"
                  alt="logo"
                  width={64}
                  height={30}
                  className="mt-4"
                ></Image>
                <p className="mt-8 leading-5 text-xs w-full max-w-[400px] text-[#5E6987]">
                  {t('Footer.laf')}
                </p>
              </div>

              <div className="leading-10 w-1/8 text-sm text-[#3C455D]">
                {t('Footer.product')}
                <ul className="leading-10 text-[#14171F]">
                  <li>
                    <a href={t(`LafLink`)}>{t('Footer.item1_1')}</a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/labring/laf/releases"
                      target="_blank"
                    >
                      {t('Footer.item1_3')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=NightWhite.laf-assistant"
                      target="_blank"
                    >
                      {t('Footer.item1_4')}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/labring/sealos" target="_blank">
                      {t('Footer.item1_2')}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="leading-10 w-1/8 text-sm text-[#3C455D]">
                {t('Footer.developer')}
                <ul className="leading-10 text-[#14171F]">
                  <li>
                    <a href="#" target="_blank">
                      {t('Footer.item2_1')}
                    </a>
                  </li>
                  <li>
                    <a href="https://api.laf.dev/" target="_blank">
                      {t('Footer.item2_2')}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      {t('Footer.item2_3')}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/labring/laf" target="_blank">
                      {t('Footer.item2_4')}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="leading-10 w-1/8 text-sm text-[#3C455D]">
                {t('Footer.support')}
                <ul className="leading-10 text-[#14171F]">
                  <li>
                    <a
                      href="https://github.com/labring/laf/issues"
                      target="_blank"
                    >
                      {t('Footer.item3_1')}
                    </a>
                  </li>

                  <li>
                    <a href="https://forum.laf.run/" target="_blank">
                      {t('Footer.item3_2')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-auto py-6 flex flex-row justify-between items-center">
            <div className="w-1/2 text-[#3C455D] text-sm">
              laf. all rights reserved. © {new Date().getFullYear()}
            </div>
            <div className="flex w-36 justify-evenly">
              <a
                href="https://w4mci7-images.oss.laf.run/wechat.png"
                target="_blank"
              >
                <Image
                  src="./weixinicon.svg"
                  alt="weixin"
                  width={24}
                  height={24}
                ></Image>
              </a>
              <a href="https://forum.laf.run" target="_blank">
                <Image
                  src="./forumicon.svg"
                  alt="qq"
                  width={24}
                  height={24}
                ></Image>
              </a>
              <a href="https://discord.gg/6VhVrsaS" target="_blank">
                <Image
                  src="./gameicon.svg"
                  alt="game"
                  width={24}
                  height={24}
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-[#F9F9F9]  flex-col px-8 mt-12 h-auto divide-solid divide-y divide-gray-200">
        <div className="pt-12 pb-4">
          <Image src="/logo_text.png" alt="logo" width={64} height={30}></Image>
          <p className="mt-4 text-xs leading-5 w-full text-[#5E6987]">
            {t('Footer.laf')}
          </p>

          <div className="mt-4 flex justify-between">
            <div className="w-1/2 text-sm text-[#14171F]">
              <div className="text-[#5E6987] leading-8">
                {t('Footer.product')}
              </div>
              <ul className="leading-8">
                <li>
                  <a href={t(`LafLink`)}>{t('Footer.item1_1')}</a>
                </li>
                <li>
                  <a
                    href="https://github.com/labring/laf/releases"
                    target="_blank"
                  >
                    {t('Footer.item1_2')}
                  </a>
                </li>
              </ul>
              <div className="w-1/2 text-sm text-[#14171F]">
                <div className="text-[#5E6987 text-[#5E6987] leading-8">
                  {t('Footer.support')}
                </div>
                <ul className="leading-8">
                  <li>
                    <a
                      href="https://github.com/labring/laf/issues"
                      target="_blank"
                    >
                      {t('Footer.item3_1')}
                    </a>
                  </li>

                  <li>
                    <a href="https://forum.laf.run/" target="_blank">
                      {t('Footer.item3_2')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 text-sm text-[#14171F]">
              <div className="text-[#5E6987] leading-8">Developers</div>

              <ul className="leading-8">
                <li>
                  <a href="#" target="_blank">
                    {t('Footer.item2_1')}
                  </a>
                </li>
                <li>
                  <a href="https://api.laf.dev/" target="_blank">
                    {t('Footer.item2_2')}
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    {t('Footer.item2_3')}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/labring/laf" target="_blank">
                    {t('Footer.item2_4')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-auto py-6 gap-6 flex flex-col ">
          <div className="text-[#3C455D] text-sm">
            laf. all rights reserved. © {new Date().getFullYear()}
          </div>
          <div className="flex w-32 justify-around ml-[-10px]">
            <a
              href="https://w4mci7-images.oss.laf.run/wechat.png"
              target="_blank"
            >
              <Image
                src="./weixinicon.svg"
                alt="weixin"
                width={24}
                height={24}
              ></Image>
            </a>
            <a href="https://forum.laf.run" target="_blank">
              <Image
                src="./forumicon.svg"
                alt="qq"
                width={24}
                height={24}
              ></Image>
            </a>
            <a href="https://discord.gg/6VhVrsaS" target="_blank">
              <Image
                src="./gameicon.svg"
                alt="game"
                width={24}
                height={24}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
