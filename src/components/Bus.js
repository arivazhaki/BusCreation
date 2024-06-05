import React from 'react';
import New from './New';
import WindowSecond from './WindowSecond';
import Door from './Door';

const Bus = (context) =>
	<div>
		<div className="bus-container">
			<New { ...context }/>
			<WindowSecond { ...context }/>
			<Door { ...context }/>
		</div>
	</div>;

export default Bus;
