import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='flex justify-between border-2 border-red-500 mb-20'>
      <div className='icon'>
        <Link href={'/'}>Aaron</Link>
      </div>

      <div className='flex space-x-4'>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contactMe'}>Contact Me</Link>
      </div>
    </div>
  )
}
