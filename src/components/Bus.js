import React from 'react';
import New from './New';
import WindowSecond from './WindowSecond';
import Door from './Door';
import Mirror from './Mirror';
import WheelBack from './WheelBack';

const Bus = (context) =>
	<div className="bus-container">
		<New { ...context }/>
		<WheelBack { ...context }/>
		<WindowSecond { ...context }/>
		<Door { ...context }/>
		<Mirror { ...context }/>

	</div>;

export default Bus;
