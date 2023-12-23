import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='flex items-center justify-center px-10 py-5 bg-gray-600 transition-all'>
        <ul className='flex gap-2 text-white'>
            <li>
                <Link href="/" className="p-5 hover:bg-gray-800 transition-all">Home</Link>
            </li>
            <li>
                <Link href="/how-i-feel" className="p-5 hover:bg-gray-800 transition-all">How I Feel</Link>
            </li>
        </ul>   
    </nav>
  )
}
