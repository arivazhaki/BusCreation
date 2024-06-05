/* eslint-disable max-lines-per-function */
/* eslint-disable no-dupe-keys */
import { React } from 'react';

const New = () => {
	const bodyStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '60vw',
		height: '25vw',
		backgroundColor: 'yellowgreen',
		border: '5px solid black',
		borderRadius: '10px',
		padding: '20px',
		borderTopRightRadius: '25%',
		position: 'absolute',
		left: '18%',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		margin: '10% auto',
	};

	return <div>
		<div style={ bodyStyle }/>
	</div>;
};

export default New;
