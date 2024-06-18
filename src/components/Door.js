import { React } from 'react';

const Door = () => {
	const bodyStyle = {
		width: '6vw',
		height: '16vw',
		backgroundColor: 'lightgray',
		position: 'absolute',
		border: '8px solid black',
		top: '-10%',
		left: '43%',
		borderTopRightRadius: '5%',
	};

	return (
		<div style={ bodyStyle }/>
	);
};

export default Door;
