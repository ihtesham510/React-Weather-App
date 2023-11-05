import React from 'react'
import CurrentForecast from './CurrentForecast'
import Hightlights from './Hightlights/Main'

const Body = () => {
	return (
		<>
			<div className='flex justify-evenly  '>
				<CurrentForecast />
				<Hightlights />
			</div>
		</>
	)
}

export default Body
