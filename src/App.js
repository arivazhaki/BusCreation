import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import BusBackGround from './components/BusBackground';

const App = (context) =>
	<div className="App">
		<BusBackGround/>
		<Bus { ...context }/>
		<div className="background-image-example"/>
	</div>;

export default App;
