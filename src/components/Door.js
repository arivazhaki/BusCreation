import { React } from 'react';

const Door = () => {
	const bodyStyle = {
		width: '6vw',
		height: '18vw',
		backgroundColor: 'lightgray',
		position: 'absolute',
		border: '8px solid black',
		top: '23%',
		left: '56%',
		borderTopRightRadius: '5%',
	};

	return (
		<div style={ bodyStyle }/>
	);
};

export default Door;
