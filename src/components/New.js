/* eslint-disable max-lines-per-function */
/* eslint-disable no-dupe-keys */
import { React } from 'react';

const New = () => {
	const bodyStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '65vw',
		height: '25vw',
		backgroundColor: 'yellowgreen',
		border: '5px solid black',
		padding: '20px',
		borderTopRightRadius: '20%',
		borderTopLeftRadius: '10%',
		position: 'absolute',
		top: '18%',
		left: '18%',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	};

	return <div>
		<div style={ bodyStyle }/>
	</div>;
};

export default New;
