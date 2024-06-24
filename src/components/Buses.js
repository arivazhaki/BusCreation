import React from 'react';
import { map } from '@laufire/utils/collection';
import Driver from './Driver';
import getRandomColor from '../services/getRandomColor';
import Doors from './Doors';
import Wheels from './Wheels';
import Windows from './Windows';

const getBusStyle = (context) => {
	const { config: { roadHeight, busHeight }, data: bus } = context;

	return {
		width: `${ bus.size }%`,
		height: `${ bus.size - busHeight }%`,
		bottom: `${ roadHeight - bus.y }%`,
		left: `${ bus.x }%`,
		backgroundColor: `#${ getRandomColor() }`,
		animation: `${ bus.animation } 25s linear infinite`,
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
			>
				<Driver { ...{ ...context, data: bus } }/>
				<Doors { ...context }/>
				<Windows { ...{ ...context, data: bus } }/>
				<Wheels { ...context }/>
			</div>) }
	</div>;
};

export default Buses;
