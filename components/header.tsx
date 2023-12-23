import Link from 'next/link'
import React from 'react'
import { links } from '@/lib/data'

export default function Header() {
  return (
    <nav className='flex items-center justify-center px-10 py-5 bg-gray-600 transition-all'>
        <ul className='flex gap-2 text-white'>
            {
              links.map((link) => (
                <li>
                  <Link href={link.path} className="p-5 hover:bg-gray-800 transition-all">
                    {link.name}
                  </Link>   
                </li>  
              ))
            }
        </ul>   
    </nav>
  )
}
