const axios = require('axios')
import { NextResponse } from 'next/server'

const cheerio = require('cheerio')

export async function GET(request: Request) {
  const axiosRes = await axios.get(
    'https://img.shields.io/github/stars/labring/laf?style=plastic'
  )
  const html = axiosRes.data
  const $ = cheerio.load(html)

  const stars = $('text[aria-hidden=true]').text()
  console.log(stars)

  return NextResponse.json({ name: stars.replace('stars', '') })
}
