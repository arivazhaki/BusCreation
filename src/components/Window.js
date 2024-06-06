import { React } from 'react';

const Window = (context) => {
	const { data: { marginLeft }} = context;

	return (
		<div>
			<div style={ {
				width: '8vw',
				height: '9vw',
				backgroundColor: 'lightgrey',
				border: '10px solid #000',
				position: 'absolute',
				borderRadius: '10px',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
				top: '8%',
				left: marginLeft,
				margin: '10% auto',
			} }
			/>
		</div>);
};

export default Window;
