/* eslint-disable max-lines-per-function */
import { React } from 'react';
import baby from '../assets/baby.jpg';

const Window = (context) => {
	const { data: { marginLeft }} = context;

	return <div>
		<div
			className="window"
			style={ { left: marginLeft } }
		>
			<img
				className="baby"
				src={ baby }
				alt="babyimg"
				width="5vw"
				height="5vw"
			/>
		</div>
	</div>;
};

export default Window;
