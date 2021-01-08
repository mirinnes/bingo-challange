import React from 'react';
import Shape from './Shape';
export default function Winner({ isWinner }) {
	function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	function getRandomColor() {
		let randomColor;
		return (randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16));
	}
	const screenX = 1400;
	const screenY = 650;
	return (
		<div className={`${isWinner ? 'display' : ''}`}>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='square'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='circle'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='triangle-up'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
			<Shape
				shape='parallelogram'
				posX={getRandomArbitrary(0, screenX)}
				posY={getRandomArbitrary(0, screenY)}
				animDurat={getRandomArbitrary(1, 5)}
				bgColor={getRandomColor()}
			/>
		</div>
	);
}
