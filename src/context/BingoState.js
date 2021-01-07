import React from 'react';
import BingoContext from './bingoContext';
import { card, winner } from './bingoConstants';

const BingoState = ({ children }) => {
	const state = {
		card,
		isWinner: false,
	};

	// Event handler for matched Cell
	const handleOnClick = (id, inx) => {
		state.card[inx].matched = !state.card[inx].matched;
	};

	// Updating Winner
	const removeWinnerRow = (item, array) => {
		let i = array.indexOf(item);
		if (i !== -1) {
			array.splice(i, 1);
		}
	};
	const doesUserWon = (arr) => {
		let userWon;
		let result = arr.filter((item) => item.matched !== true);
		if (result.length) {
			userWon = false;
		} else {
			userWon = true;
		}
		return userWon;
	};

	const updateWinner = () => {
		let winnerRow = undefined;
		let isWinner;
		winner.forEach((element) => {
			let aux = doesUserWon(element);
			if (aux) {
				winnerRow = element;
				isWinner = true;
			}
		});
		if (isWinner) {
			state.isWinner = true;
			isWinner = !isWinner;
		} else {
			state.isWinner = false;
		}
		removeWinnerRow(winnerRow, winner);
	};

	const getWinner = () => {
		return state.isWinner;
	};
	return (
		<BingoContext.Provider
			value={{
				card: state.card,
				handleOnClick,
				updateWinner,
				getWinner,
			}}
		>
			{children}
		</BingoContext.Provider>
	);
};

export default BingoState;
