import React from 'react'
import AirQuality from './AirQuality'
import SunTime from './SunTime'

const Hightlights = () => {
	return (
		<>
			<div className='m-2 flex  flex-col rounded-3xl bg-light-3 dark:bg-dark-3'>
				<div className='flex'>
					<h1 className='mx-12 my-8 text-2xl font-bold dark:text-white'>
						Today Highlights
					</h1>
				</div>
				<div className='flex'>
					<AirQuality />
					<SunTime />
				</div>
			</div>
		</>
	)
}

export default Hightlights
