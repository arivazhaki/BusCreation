import React from 'react';
const NewBus = () => {
	const busstyle = {
		display: 'flex',
		flexdirection: 'column',
		justifycontent: 'space-between',
		alignItems: 'center',
		width: '80%',
		maxwidth: '600px',
		height: '200px',
		backgroundColor: '#FFD700',
		borderRadius: '10px',
		padding: '20px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	};

	return (
		<div style={ busstyle }/>
	);
};

export default NewBus;
