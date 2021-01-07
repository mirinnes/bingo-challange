import React, { useContext, useState } from 'react';
import Grid from '../components/Grid';
import Winner from '../components/Winner';
import bingoContext from '../context/bingoContext';

export default function Home({ linkTo }) {
	const { getWinner } = useContext(bingoContext);
	let isWinner = getWinner();
	const [render, setRender] = useState();

	return (
		<div
			id='main'
			style={{
				background:
					'linear-gradient(90deg, rgba(224, 255, 228, 1) 0%, rgba(213, 227, 255, 1) 100%)',
			}}
		>
			{' '}
			<Winner isWinner={isWinner} />
			<h1 className='main-title '>Bingo!</h1>
			<div className='main-container normal'>
				<Grid linkTo={linkTo} render={render} setRender={setRender} />
			</div>
		</div>
	);
}
