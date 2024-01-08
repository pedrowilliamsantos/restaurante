"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-01-16")

const CountDown = () => {
  return (
    <Countdown className='text-yellow-500 font-bold text-5xl' date={endingDate}/>
  )
}

export default CountDown