import './globals.css'

import { NextIntlClientProvider } from 'next-intl/client'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}

export const metadata = {
  title: 'laf 云开发',
  description:
    'Laf 是一个集函数、数据库、存储为一体的云开发平台，随时随地，发布上线',
  icons: {
    icon: [{ url: '/laficon.jpg' }],
  },
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  let messages

  try {
    messages = (await import(`../../messages/${lang}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={lang} className="max-w-screen-2xl ">
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
