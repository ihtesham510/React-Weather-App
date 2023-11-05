import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

const SunTime = () => {
  return (
    <>
      <div className='m-5 flex h-auto w-[550px] flex-col rounded-3xl bg-light-2 dark:bg-dark-1'>
        <h1 className='mx-5 my-4 text-lg text-gray-500'>Sunset & Sunrise</h1>
        <div className='flex'>
          <div className='m-5 flex w-[50%] justify-evenly'>
            <p className='mx-2 h-auto text-6xl dark:text-white'>
              <BsSun />
            </p>
            <div className='flex flex-col  items-center justify-evenly'>
              <p className='text-md text-gray-500'>Sun-Rise</p>
              <p className='text-4xl dark:text-white'>7:00 AM</p>
            </div>
          </div>
          <div className='m-5 flex w-[50%] justify-evenly'>
            <p className='mx-2 h-auto text-6xl dark:text-white'>
              <BsMoon />
            </p>
            <div className='flex flex-col  items-center justify-evenly'>
              <p className='text-md text-gray-500'>Sun-Set</p>
              <p className='text-4xl dark:text-white'>8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SunTime
