/* eslint-disable no-duplicate-imports */
import { React } from 'react';
import './App.scss';
import Road from './components/Road';
import Environment from './components/Environment';
import Buses from './components/Buses';

const App = (context) =>
	<div className="App">
		<Environment { ...context }/>
		<Road { ...context }/>
		<Buses { ...context }/>
	</div>;

export default App;
