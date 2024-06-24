import React from 'react';
import New from './New';

const Bus = (context) =>
	<div className="bus-container">
		<New { ...context }/>
	</div>;

export default Bus;
