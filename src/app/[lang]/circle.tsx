import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const circle = (props: Props) => {
  return (
    <div className="relative mt-10 flex justify-center items-center">
      <div className="absolute border border-white opacity-20 h-[120px] w-[120px] rounded-full " />
      <div className="absolute border border-gray-400 opacity-20 h-[180px] w-[180px] rounded-full" />
      <div className="absolute border border-gray-400 opacity-40 h-[240px] w-[240px] rounded-full" />
      <div className="absolute border border-gray-500 opacity-40 h-[320px] w-[320px] rounded-full" />
    </div>
  )
}

export default circle
