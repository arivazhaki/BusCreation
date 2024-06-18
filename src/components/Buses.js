import React from 'react';
import { map } from '@laufire/utils/collection';
import getRandomColor from '../services/getRandomColor';

const getBusStyle = (context) => {
	const { config: { roadHeight, busHeight }, data: bus } = context;

	return {
		width: `${ bus.size }%`,
		height: `${ bus.size - busHeight }%`,
		bottom: `${ roadHeight - bus.y }%`,
		left: `${ bus.x }%`,
		backgroundColor: `#${ getRandomColor() }`,
		transform: `scaleX(${ bus.direction })`,
	};
};

const Buses = (context) => {
	const { config: { buses }} = context;

	return <div>
		{ map(buses, (bus, index) =>
			<div
				key={ index }
				style={ getBusStyle({ ...context, data: bus }) }
				className="bus"
			/>) }
	</div>;
};

export default Buses;
