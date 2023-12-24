"use client"

import React from 'react'
import { useMoodContext } from '@/context/mood-context'
import SectionHeading from './font-styles/section-heading';
import SectionSubHeading from './font-styles/section-subheading';

export default function HomePage() {
  const {mood, toggleMood} = useMoodContext();
  
  return (
    <section className='text-center'>
      <SectionHeading>I am Bi-Polar and can switch my mood with a click of a button!</SectionHeading>
      <SectionSubHeading>Click the button below to switch my mood and play with my emotions!</SectionSubHeading>
      <button className='bg-blue-500 hover:bg-blue-700 hover:scale-110  text-white text-8xl font-bold py-[3rem] px-[7rem] rounded-3xl capitalize transition-all'
              onClick={toggleMood}>{mood.name}</button>
    </section>
  )
}
