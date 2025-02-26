"use client"

import { motion } from 'framer-motion'
import React from 'react'

function HistoryDis() {
  return (
    <motion.div className=''
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}

      >
    <h1 className='text-xl mb-20 text-center'>
    </h1>
    </motion.div>
  )
}

export default HistoryDis