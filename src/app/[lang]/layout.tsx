import './globals.css'

import { NextIntlClientProvider } from 'next-intl/client'
import { notFound } from 'next/navigation'

// or Dynamic metadata
export async function generateMetadata({ params }: any) {
  let messages

  try {
    messages = (await import(`../../messages/${params.lang}.json`)).default
  } catch (error) {
    notFound()
  }

  return {
    title: messages.WebSite.title,
    description: messages.WebSite.description,
    icons: {
      icon: '/favicon.ico',
    },
  }
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
