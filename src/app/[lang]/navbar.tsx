/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Language from './language'
import axios from 'axios'

type Props = {}

const Navbar = (props: Props) => {
  const [showBanner, setShowBanner] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [stars, setStars] = useState<string | null>(null)
  const t = useTranslations()

  useEffect(() => {
    const expirationTime = 24 * 60 * 60 * 1000
    const lastCanceledTime: string | null =
      localStorage.getItem('lastCanceledTime')
    const now = new Date().getTime()
    // console.log("now:",now,"last",lastCanceledTime);
    //如果本地已经存有上次的删除时间，且小于24h，则不显示banner
    if (lastCanceledTime && now - Number(lastCanceledTime) < expirationTime) {
      setShowBanner(false)
    } else {
      //没有本地的删除时间，或者已经大于24h，显示banner
      setShowBanner(true)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      const axiosRes = await axios.get(
        'https://img.shields.io/github/stars/labring/laf?style=plastic'
      )
      const str = axiosRes.data
      const reg = /textLength="130">(\d+)k<\/text>/
      const match = str.match(reg)

      if (match) {
        const matchedText = match[1]
        setStars(`${matchedText}K`)
        console.log(matchedText) // 输出：4k
      } else {
        console.log('No match found')
      }
    })()

    return () => {}
  }, [])

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className={showBanner ? 'block z-40  fixed top-0' : 'hidden'}>
        <div className="w-screen flex items-center justify-center lg:px-32 h-12 bg-[url('/banner.png')] bg-center">
          <a
            className="text-white text-[6px] whitespace-nowrap lg:text-base"
            target="_blank"
            href="https://github.com/labring/laf"
          >
            {t('NavBar.title')}
          </a>
        </div>
        <img
          className="absolute right-4 lg:right-36 top-3 z-40 hover:cursor-pointer "
          src="./cancelbtn.svg"
          alt={'cancel'}
          onClick={() => {
            setShowBanner(false)
            localStorage.setItem(
              'lastCanceledTime',
              new Date().getTime().toString()
            )
          }}
        ></img>
      </div>
      <div
        className={
          showBanner
            ? 'z-40 py-4 bg-white  justify-center w-full px-28 hidden fixed top-12 lg:flex '
            : 'z-40 py-4 bg-white  justify-center w-full px-28 hidden fixed top-0 lg:flex'
        }
      >
        <div className="flex justify-between w-full max-w-[1200px]">
          <div className="flex items-center">
            <div>
              <img
                src="/logo_text.png"
                className="w-20 h-auto"
                alt={'logo'}
              ></img>
            </div>
            <a href="/" className="ml-10">
              {t('NavBar.home')}
            </a>
            <a target="_blank" href={t('DocsLink')} className="ml-10">
              {t('NavBar.docs')}
            </a>
            <a href="https://forum.laf.run/" target="_blank" className="ml-10">
              {t('NavBar.forum')}
            </a>
            <a
              target="_blank"
              href="https://www.wenjuan.com/s/I36ZNbl/"
              className="ml-10"
            >
              {t('NavBar.contact')}
            </a>
          </div>
          <div className="w-80 flex justify-evenly items-center">
            {stars ? (
              <a
                href="https://github.com/labring/laf"
                target="_blank"
                className="flex"
              >
                <Image
                  alt="github"
                  src="./github.svg"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                {stars}
              </a>
            ) : null}

            <div className="flex justify-evenly">
              <Language />
            </div>
            <div>
              <a
                href={t('LafLink')}
                className="bg-primary py-2 px-5 rounded text-white text-sm"
              >
                {t('NavBar.start')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showBanner
            ? 'z-40 bg-white fixed top-12 w-full flex px-8 py-4 lg:hidden justify-between '
            : 'z-40 bg-white fixed top-0 w-full flex px-8 py-4 lg:hidden justify-between '
        }
      >
        <img className="h-10" src="./logo_text.png"  alt="logo"></img>

        <img
          className="w-8 hover:cursor-pointer"
          src="./menu.svg"
          alt="menu"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        ></img>
      </div>
      {toggleSidebar && (
        <div
          id="dropdown"
          className={
            showBanner
              ? 'z-40 block lg:hidden fixed top-28 right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-28 '
              : 'z-40 block lg:hidden fixed top-16 right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-28 '
          }
        >
          <ul
            className="py-2  divide-y divide-gray-100 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <div>
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100 ">
                  主页
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://docs.laf.dev"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t('NavBar.docs')}
                </a>
              </li>
              <li>
                <a
                  href="https://forum.laf.run/"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t('NavBar.forum')}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.wenjuan.com/s/I36ZNbl/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t('NavBar.contact')}
                </a>
              </li>
            </div>
            <div>
              {stars ? (
                <a
                  href="https://github.com/labring/laf"
                  className="flex px-4 py-2 hover:bg-gray-100 "
                >
                  <img className="pr-2" src="./github.svg"  alt="github"></img>
                  {stars}
                </a>
              ) : null}

              <a href="#" className="flex px-4 py-2 hover:bg-gray-100 ">
                <Language />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
