import React from 'react'
import { BiWind } from 'react-icons/bi'

const AirQuality = () => {
  return (
    <>
      <div className='m-5 flex h-auto w-[550px] flex-col rounded-3xl bg-light-2 dark:bg-dark-1'>
        <div className='my-4 flex w-full justify-between '>
          <div className='text-md  mx-5 text-gray-500'>Air Quality Index</div>
          <div className='text-md  mx-5 '>
            <p className={`rounded-full bg-green-400 px-4 text-dark-1`}>Good</p>{' '}
          </div>
        </div>

        <div className='mx-4 flex justify-evenly'>
          <div className='flex h-[150px] w-[100px] items-center text-7xl dark:text-white'>
            <BiWind />
          </div>
          <div className='flex h-[150px] w-[100px] flex-col justify-center '>
            <p className='text-lg text-gray-500'>PM25</p>
            <p className='text-4xl dark:text-white'>3.20</p>
          </div>
          <div className='flex h-[150px] w-[100px] flex-col justify-center '>
            <p className='text-lg text-gray-500'>PM25</p>
            <p className='text-4xl dark:text-white'>3.20</p>
          </div>
          <div className='flex h-[150px] w-[100px] flex-col justify-center '>
            <p className='text-lg text-gray-500'>PM25</p>
            <p className='text-4xl dark:text-white'>3.20</p>
          </div>
          <div className='flex h-[150px] w-[100px] flex-col justify-center '>
            <p className='text-lg text-gray-500'>PM25</p>
            <p className='text-4xl dark:text-white'>3.20</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AirQuality
