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
				background: 'rgb(0, 0, 0)',
			}}
		>
			{' '}
			<Winner isWinner={isWinner} />
			<h1 className='main-title dark'>Darky Bingo!</h1>
			<div className='main-container dark'>
				<Grid linkTo={linkTo} render={render} setRender={setRender} />
			</div>
		</div>
	);
}
