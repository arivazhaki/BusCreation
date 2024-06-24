/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-dupe-keys */
import { React } from 'react';
import getRandomColor from '../services/getRandomColor';
import WindowSecond from './WindowSecond';
import Door from './Door';
import Mirror from './Mirror';
import WheelBack from './WheelBack';

const New = (context) => {
	const bodyStyle = {
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '40%',
		height: '19%',
		backgroundColor: `#${ getRandomColor() }`,
		border: '5px solid black',
		padding: '20px',
		borderTopRightRadius: '20%',
		borderTopLeftRadius: '10%',
		position: 'absolute',
		top: '-12.5%',
		left: '10%',
		boxshadow: '0 4px 8px rgba(0, 0, 0, 0.1',
		animation: 'nextBusForward 10s linear infinite',
	};

	return <div>
		<div style={ bodyStyle }/>
		<WheelBack { ...context }/>
		<WindowSecond { ...context }/>
		<Door { ...context }/>
		<Mirror { ...context }/>
		<div className="border"/>
		<div className="borderBottom"/>
	</div>;
};

export default New;
