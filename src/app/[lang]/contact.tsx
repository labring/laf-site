'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Contact = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="text-center py-10 pb-0 lg:pb-20">
      <a href="" className=" bg-primary px-20 py-6 rounded text-white text-xl">
        {t(`NavBar.contact`)}
      </a>
    </div>
  )
}

export default Contact
