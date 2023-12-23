"use client"

import React from 'react'
import { useMoodContext } from '@/context/mood-context'
import SectionHeading from '@/components/font-styles/section-heading';
import SectionSubHeading from '@/components/font-styles/section-subheading';
import SectionParagraph from '@/components/font-styles/section-paragraph';

export default function Page() {
  const {mood} = useMoodContext();

  return (
    <section className='p-10 text-center'>
        <SectionHeading>How I Feel:</SectionHeading>
        <SectionSubHeading>Today I am feeling extremely {mood.name}!</SectionSubHeading>
        <SectionParagraph>{mood.content}</SectionParagraph>
    </section>
  )
}
