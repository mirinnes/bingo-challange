import React, { useContext, useState } from 'react';
import bingoContext from '../context/bingoContext';

import GridItem from './GridItem';
import './styles.scss';

export default function Grid({ linkTo, render, setRender }) {
	const { card, handleOnClick, updateWinner } = useContext(bingoContext);
	const [renderize, setRenderize] = useState();

	return (
		<div className='grid-container'>
			{card.map((cell, index) => {
				return (
					<GridItem
						linkTo={linkTo}
						key={index}
						index={index}
						cell={cell}
						renderHome={render}
						setRenderHome={setRender}
						renderize={renderize}
						setRenderize={setRenderize}
						handleOnClick={handleOnClick}
						updateWinner={updateWinner}
					/>
				);
			})}
		</div>
	);
}
