import React from 'react'
import { TiWeatherStormy } from 'react-icons/ti'
import { BsCalendarDate } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import day from '../../utils/modules'
import { date } from '../../utils/modules'

const CurrentForecast = () => {
  const date = new Date().toDateString()
  return (
    <>
      <div className='flex h-[350px] w-[400px] flex-col  rounded-3xl bg-light-3 dark:bg-dark-3'>
        <h2 className='mx-12 my-8 text-xl font-bold dark:text-white'>Now</h2>
        <div className='mx-12 flex gap-9'>
          <h1 className='text-7xl dark:text-white'>-31°C</h1>
          <h1 className='text-7xl dark:text-white'>
            <TiWeatherStormy />
          </h1>
        </div>
        <h2 className='mx-12 my-6 text-sm font-bold dark:text-white'>
          thunder
        </h2>
        <div className='mx-auto h-[1px] w-[300px] bg-gray-500/20 '></div>
        <div className='mx-12 my-5 flex flex-col gap-3'>
          <div className='flex gap-4  dark:text-white'>
            <p className='text-2xl'>
              <BsCalendarDate />
            </p>
            <p className='text-lg'>{date}</p>
          </div>
          <div className='flex gap-4  dark:text-white'>
            <p className='text-2xl'>
              <IoLocationSharp />
            </p>
            <p className='text-lg'>New York</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentForecast
