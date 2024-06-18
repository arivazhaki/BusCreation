/* eslint-disable max-lines-per-function */
/* eslint-disable no-dupe-keys */
import { React } from 'react';
import getRandomColor from '../services/getRandomColor';

const New = () => {
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
		animation: 'nextBusForward infinite',
	};

	return <div>
		<div style={ bodyStyle }/>
	</div>;
};

export default New;
