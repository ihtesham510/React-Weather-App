import React from 'react'
import { useDarkMode } from '../../utils/hooks'
import { BsCloudSunFill, BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'

const Header = () => {
	const { darkmode, toggleDarkMode } = useDarkMode()
	return (
		<>
			<div className='flex h-24  place-content-center items-center justify-around '>
				<div className='flex items-center gap-4 text-dark-3 dark:text-white'>
					<p className='text-5xl'>
						<BsCloudSunFill />
					</p>
					<p className='text-3xl'>Cloudio</p>
				</div>
				{/* input value */}
				<input
					type='text'
					className='h-12 w-[600px] rounded-full border-none bg-light-2 p-5 outline-none dark:bg-dark-2 dark:text-white'
					placeholder='Enter Your City'
				/>
				<div className='flex items-center gap-11'>
					{/* current-location button */}
					<button className='flex items-center rounded-full bg-dark-primary p-3 text-light-1 dark:text-dark-1 '>
						<p className='mr-2 text-2xl'>
							<BiCurrentLocation />
						</p>
						<p className='text-xl'>current-location</p>
					</button>
					<button
						className='rounded-md bg-dark-primary p-3 text-2xl text-white dark:text-dark-1'
						onClick={() => toggleDarkMode()}
					>
						{darkmode ? <BsLightbulbOff /> : <BsLightbulb />}
					</button>
				</div>
			</div>
		</>
	)
}

export default Header
