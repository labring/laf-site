/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Language from './language'

type Props = {}

const Navbar = (props: Props) => {
  const [showBanner, setShowBanner] = useState(true)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const t = useTranslations()
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
          onClick={() => setShowBanner(false)}
        ></img>
      </div>
      <div
        className={
          showBanner
            ? 'z-40 py-4 bg-white  justify-center w-full px-28 hidden fixed top-12 lg:flex '
            : 'z-40 py-4 bg-white  justify-center w-full px-28 hidden fixed top-0 lg:flex'
        }
      >
        <div className="flex justify-between w-full max-w-[1600px]">
          <div className="w-2/5 min-w-[420px] max-w-[600px] flex items-center">
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

            <a target="_blank" href="https://docs.laf.dev" className="ml-10">
              {t('NavBar.docs')}
            </a>

            <a target="_blank" href="#" className="ml-10">
              {t('NavBar.contact')}
            </a>
          </div>
          <div className="w-80 flex justify-evenly items-center">
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
              3.9K
            </a>
            <div className="flex justify-evenly">
              <Language />
            </div>
            <div>
              <button className="bg-primary py-2 px-5 rounded-md text-white">
                {t('NavBar.start')}
              </button>
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
        <img className="h-10" src="./logo_text.png"></img>

        <img
          className="w-8 hover:cursor-pointer"
          src="./menu.svg"
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
            {/* <div>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                  主页
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  价格
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  案例
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                  FAQ
                </a>
              </li>
            </div> */}
            <div>
              <a href="#" className="flex px-4 py-2 hover:bg-gray-100 ">
                <img className="pr-2" src="./github.svg"></img>3.5k
              </a>
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
