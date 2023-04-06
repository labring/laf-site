'use client'
import { useTranslations } from 'next-intl'
import React, { Component } from 'react'

export default function Video() {
  const t = useTranslations()
  return (
    <>
      <video controls>
        <source src={t('VideoLink')} />
      </video>
    </>
  )
}
