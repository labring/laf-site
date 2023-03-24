'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {}

const Language = (props: Props) => {
  const pathName = usePathname()
  const current_locale = pathName.split('/')[1]
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="mr-4">
      <Link
        className="flex"
        href={redirectedPathName(current_locale == 'en' ? 'zh-CN' : 'en')}
      >
        <img className="pr-2" src="./language.svg"></img>
        <p>{current_locale == 'en' ? '中文' : 'English'}</p>
      </Link>
    </div>
  )
}

export default Language
