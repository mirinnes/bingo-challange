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
				background: ' rgb(255, 42, 234)',
			}}
		>
			{' '}
			<Winner isWinner={isWinner} />
			<h1 className='main-title '>Happy Bingo!</h1>
			<div className='main-container unicorn'>
				<Grid linkTo={linkTo} render={render} setRender={setRender} />
			</div>
		</div>
	);
}
