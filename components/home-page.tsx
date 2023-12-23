"use client"

import React from 'react'
import { useMoodContext } from '@/context/mood-context'

export default function HomePage() {
  const {mood, toggleMood} = useMoodContext();
  
  return (
    <section className='text-center'>
      <h1 className='text-6xl font-bold text-gray-800 leading-[5rem]'>I am Bi-Polar and can switch my mood with a click of a button!</h1>
      <p className='text-3xl font-semibold text-gray-500 mb-5'>Click the button below to switch my mood and play with my emotions!</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded capitalize'
              onClick={toggleMood}>{mood}</button>
    </section>
  )
}
