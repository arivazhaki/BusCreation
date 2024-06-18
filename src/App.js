/* eslint-disable no-duplicate-imports */
import { React } from 'react';
import './App.scss';
import Road from './components/Road';
import Environment from './components/Environment';
import Bus from './components/Bus';

const App = (context) =>
	<div className="App">
		<Environment { ...context }/>
		<Road { ...context }/>
		<Bus { ...context }/>
	</div>;

export default App;
