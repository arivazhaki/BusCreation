import { React } from 'react';
import rim from '../assets/rim.jpg';

const WheelFront = (context) => {
	const { data: { marginLeft }} = context;

	return <div>
		<div
			className="wheel"
			style={ { left: marginLeft } }
		>
			<img
				className="rim"
				src={ rim }
				alt="wheelRim"
				width="7vw"
				height="7vw"
			/>
		</div>
	</div>;
};

export default WheelFront;
