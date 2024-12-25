import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white text-black'>
         <ul className=' p-10 flex space-x-5'>
        <li>
          <Link href='/tv9' className='font-bold'> TV 9</Link>
        </li>
        <li>
          <Link href='/velugu' className='font-bold'> Velugu </Link>
        </li>
        <li>
          <Link href='/ntv' className='font-bold'> NTV </Link>
        </li>
        <li>
          <Link href='/ntn' className='font-bold'> Namaste Telangana </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header