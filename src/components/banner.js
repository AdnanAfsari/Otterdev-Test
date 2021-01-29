import React from "react";
import t1 from '../images/t1.jpg';
import ball from '../images/ball.png';
import pencil from '../images/pencil.png';
import ruler from '../images/ruler.png';
import trophy from '../images/trophy.png';



	
const Banner = () => (
	<section
		style={{
			height: '700px',
			marginTop: '100px'
		}}>
		
		<div
			style={{
				position: 'relative'
			}}>
			<img style={{borderRadius: '9990px'}} src={t1} alt="t1" />
		</div>
	</section>
)



export default Banner
