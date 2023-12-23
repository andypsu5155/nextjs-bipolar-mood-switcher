"use client"

import React from 'react'
import { useMoodContext } from '@/context/mood-context'

export default function Page() {
  const {mood, toggleMood} = useMoodContext();

  return (
    <section className='p-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-800 leading-[5rem]'>How I Feel:</h1>
        <p className='text-xl font-semibold text-gray-500 mb-5'>Today I am feeling extremely {mood}!</p>
    </section>
  )
}
