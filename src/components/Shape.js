import React from 'react';

export default function Shape({ posX, posY, animDurat, shape, bgColor }) {
	const randomTime = animDurat + 's';
	const shapeStyle =
		shape !== 'triangle-up'
			? {
					left: posX,
					top: posY,
					animationDuration: randomTime,
					background: bgColor,
			  }
			: {
					left: posX,
					top: posY,
					animationDuration: randomTime,
			  };
	return <div id={shape} className={`random `} style={shapeStyle}></div>;
}
