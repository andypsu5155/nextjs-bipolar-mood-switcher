"use client"

import React from 'react'
import Image from 'next/image';
import { useMoodContext } from '@/context/mood-context'
import SectionHeading from '@/components/font-styles/section-heading';
import SectionSubHeading from '@/components/font-styles/section-subheading';
import SectionParagraph from '@/components/font-styles/section-paragraph';

export default function Page() {
  const {mood} = useMoodContext();

  return (
    <section className='relative px-[5%] py-5 text-center'>
        <SectionHeading>How I Feel:</SectionHeading>
        <SectionSubHeading>Today I am feeling extremely {mood.name}!</SectionSubHeading>
        <SectionParagraph>{mood.content}</SectionParagraph>
        <Image src={mood.imagePath} alt={mood.imageAlt} className='rounded-2xl w-[75%] mx-auto mt-5'
               />
    </section>
  )
}
