import React from 'react'
import { TiWeatherStormy } from 'react-icons/ti'
import { BsCalendarDate } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'

const CurrentForecast = () => {
	const date = new Date().toDateString()
	return (
		<>
			<div className='m-2 flex h-[350px] w-[350px] flex-col  rounded-3xl bg-light-3 dark:bg-dark-3'>
				<h2 className='mx-12 my-8 text-xl font-bold dark:text-white'>Now</h2>
				<div className='mx-12 flex gap-9'>
					<h1 className='text-7xl dark:text-white'>-31°C</h1>
					<h1 className='text-7xl dark:text-white'>
						<TiWeatherStormy />
					</h1>
				</div>
				<h2 className='mx-12 my-6 text-sm font-bold dark:text-gray-500'>
					thunder
				</h2>
				<div className='mx-auto h-[1px] w-[300px] bg-gray-500/20 '></div>
				<div className='mx-12 my-5 flex flex-col gap-3'>
					<div className='flex gap-4  dark:text-white'>
						<p className='text-2xl'>
							<BsCalendarDate />
						</p>
						<p className='text-md text-gray-500'>{date}</p>
					</div>
					<div className='flex gap-4  dark:text-white'>
						<p className='text-2xl '>
							<IoLocationSharp />
						</p>
						<p className='text-md text-gray-500'>New York</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CurrentForecast
