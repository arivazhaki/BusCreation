/* eslint-disable max-lines-per-function */
/* eslint-disable semi */
import { React } from 'react';
import busStop from '../assets/busStop.jpg';

const BusBackGround = () =>
	<div>
		<img
			className="busBackground"
			src={ busStop }
			alt="busStopImage"
			width="30vw"
			height="50vw"
		/>
	</div>;

export default BusBackGround;
