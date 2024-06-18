import { React } from 'react';
import New from './New';
import WheelBack from './WheelFront';
import WindowSecond from './WindowSecond';
import Door from './Door';
import Mirror from './Mirror';

const BusNew = (context) => <div className="bus-container">
	<New { ...context }/>
	<WheelBack { ...context }/>
	<WindowSecond { ...context }/>
	<Door { ...context }/>
	<Mirror { ...context }/>
	<div className="border"/>
	<div className="borderBottom"/>
</div>;

export default BusNew;
