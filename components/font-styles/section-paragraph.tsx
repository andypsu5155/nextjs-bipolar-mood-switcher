import React from 'react'

export default function SectionParagraph( {children}: {children: React.ReactNode} ) {
  return (
    <p className="text-2xl text-gray-800">{children}</p>
  )
}
