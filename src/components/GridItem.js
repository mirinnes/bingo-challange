import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function GridItem(props) {
	const {
		handleOnClick,
		setRenderize,
		renderize,
		updateWinner,
		cell,
		index,
		linkTo,
		renderHome,
		setRenderHome,
	} = props;

	const [positionMouse, setPositionMouse] = useState({
		x: 0,
		y: 0,
	});
	const widthButton = 120;
	const heightButton = 113;

	// Get mouse position
	const getMousePosition = (e, row, col) => {
		const posX = e.clientX - 481 - col * widthButton;
		const posY = e.clientY - 94 - row * heightButton;
		setPositionMouse({
			x: posX,
			y: posY,
		});
	};

	// When a cell is matched:
	const onClickCell = (id, inx, e, row, col) => {
		handleOnClick(id, inx);
		setRenderize(!renderize);
		setRenderHome(!renderHome);
		getMousePosition(e, row, col);
		updateWinner();
	};

	// GridItem component
	return (
		<h3 className={`grid-item`}>
			{cell.isCenter ? (
				<Link to={linkTo} className='center'>
					<button
						onClick={(e) => onClickCell(cell.id, index, e, cell.row, cell.col)}
						className={`button`}
						id={cell.id}
						key={index}
					>
						{cell.cellText}
					</button>
				</Link>
			) : (
				<button
					onClick={(e) => onClickCell(cell.id, index, e, cell.row, cell.col)}
					className={`button ${cell.matched ? 'matched' : ''}`}
					id={cell.id}
					key={index}
				>
					<div
						className='circle-overlay'
						style={{
							left: positionMouse.x,
							top: positionMouse.y,
						}}
					></div>
					{cell.cellText}
				</button>
			)}
		</h3>
	);
}
