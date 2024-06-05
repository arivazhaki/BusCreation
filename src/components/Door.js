import { React } from 'react';

const Door = () => {
	const bodyStyle = {
		width: '6vw',
		height: '20vw',
		backgroundColor: 'lightgray',
		position: 'absolute',
		border: '8px solid black',
		top: '27%',
		right: '22%',
		borderTopRightRadius: '25%',
	};

	return (
		<div style={ bodyStyle }/>
	);
};

export default Door;
