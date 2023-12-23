import React from 'react'

export default function SectionHeading( {children}: {children: React.ReactNode} ) {
  return (
    <h1 className="text-6xl font-bold text-gray-800 leading-[5rem]">{children}</h1>
  )
}
