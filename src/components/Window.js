import { React } from 'react';

const Window = (context) => {
	const { data: { marginLeft }} = context;

	return (
		<div>
			<div style={ {
				width: '8vw',
				height: '9vw',
				backgroundColor: '#e0e0e0',
				border: '10px solid #000',
				position: 'absolute',
				overflow: 'hidden',
				borderRadius: '10px',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
				top: '70px',
				left: marginLeft,
				margin: '10% auto',
			} }
			/>
		</div>);
};

export default Window;
