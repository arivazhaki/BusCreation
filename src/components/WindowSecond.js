import { React } from 'react';
import Window from './Window';

const WindowSecond = (context) => {
	const { config: { windowPosition }} = context;

	return	windowPosition.map((param, key) =>
		<Window key={ key }{ ...{ ...context, data: { ...param }} }/>);
};

export default WindowSecond;
