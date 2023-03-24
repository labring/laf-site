import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const circle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.5, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '88%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative mt-10 flex justify-center items-center"
    >
      <div className="absolute border border-gray-400 h-[100px] w-[100px] rounded-full animate-ping" />
      <div className="absolute border border-gray-400 h-[150px] w-[150px] rounded-full" />
      <div className="absolute border border-gray-400 h-[200px] w-[200px] rounded-full" />
      <div className="absolute border border-gray-400 h-[250px] w-[250px] rounded-full animate-pulse" />
      <div className="absolute border border-gray-400 h-[300px] w-[300px] rounded-full animate-pulse" />
    </motion.div>
  )
}

export default circle
