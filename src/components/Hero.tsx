import React from 'react'

import Link from 'next/link'
import { Button } from './ui/button'



const Hero = () => {
  return (
    <div className='max-screen mx-auto  h-[85vh] p-10 grid md:grid-cols-2 '>
        <div className='space-y-5 my-auto'>
              <div className='border border-gray-600 rounded-3xl bg-white text-gray-900 px-5 py-1
              
               font-light  text-xs w-fit'>
                Restaurant Consulting & Growth Solutions
              </div>
              <h1 className='text-7xl text-[var(--main-clr)] font-semibold'>Elevate Your Restaurant with Expert Guidance</h1>
              <p>Our tailored restaurant consulting services help you streamline operations, enhance customer experiences, and drive sustainable growth. From concept development to staff training and operational efficiency, we ensure your restaurant thrives in a competitive market.</p>
              <div className="flex space-x-4">
              <Button variant="glow" asChild className="bg-gradient-to-r from-[var(--main-clr-2)] to-[var(--main-clr)] text-white">
              <Link href="/">Start Scaling</Link>
            </Button>
              <Button variant={'outline'}>
                Consult Now
              </Button>
              </div>

              <div className='border border-gray-500  text-gray-500 px-5 py-3 rounded flex items-center space-x-6 text-xs w-fit'>
                <p>Induviduals</p>
                <p>Scaling Companies</p>
                <p>Cafes</p>
              </div>
            </div>
        </div>
  )
}

export default Hero