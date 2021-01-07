import React from 'react';

export default function Shape({ posX, posY, animDurat, shape }) {
	const randomTime = animDurat + 's';
	return (
		<div
			id={shape}
			className={`random `}
			style={{
				left: posX,
				top: posY,
				animationDuration: randomTime,
			}}
		></div>
	);
}
