/* eslint-disable max-lines-per-function */

import { React } from 'react';
import driver from '../assets/driver.jpg';

const Mirror = () => {
	const style = {
		width: '3vw',
		height: '11vW',
		backgroundColor: 'lightgrey',
		borderRadius: '10px',
		top: '23%',
		right: '37%',
		border: '8px solid black',
		position: 'absolute',
	};

	return (
		<div style={ style }>
			<img
				className="driver"
				src={ driver }
				alt="driverimg"
				width="3vw"
				height="5vw"
			/>
		</div>
	);
};

export default Mirror;
