import { createIntlMiddleware } from 'next-intl/server'

// This middleware intercepts requests to `/` and will redirect
// to the best matching locale instead (e.g. `/en`). A cookie
// is set in the background, so if the user switches to a new
// language, this will take precedence from now on.

export default createIntlMiddleware({
  locales: ['en', 'zh-CN'],
  defaultLocale: 'zh-CN',
})
