import React from 'react'

export default function SectionSubHeading( {children}: {children: React.ReactNode} ) {
  return (
    <h2 className='text-4xl font-semibold text-gray-500 mb-5'>{children}</h2>
  )
}
