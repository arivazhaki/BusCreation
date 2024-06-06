import { React } from 'react';
import WheelFront from './WheelFront';

const WheelBack = (context) => {
	const { config: { wheelPosition }} = context;

	return wheelPosition.map((param, key) =>
		<WheelFront key={ key }{ ...{ ...context, data: { ...param }} }/>);
};

export default WheelBack;
