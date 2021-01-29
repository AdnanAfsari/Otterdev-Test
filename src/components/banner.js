import React from "react";
import t1 from '../images/t1.jpg';
import ball from '../images/ball.png';
import pencil from '../images/pencil.png';
import ruler from '../images/ruler.png';
import trophy from '../images/trophy.png';
import "./banner.css"




	
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
		<div
			className='animate'
			style={{
				position: 'absolute',
				top: '10.1rem',
			}}>
			<img style={{}} src={pencil} alt="t1" />
		</div>
		{/* <div
			style={{
				position: 'absolute'
			}}>
			<img style={{}} src={ball} alt="t1" />
		</div>
		<div
			style={{
				position: 'absolute'
			}}>
			<img style={{ borderRadius: '9990px' }} src={ruler} alt="t1" />
		</div>
		<div
			style={{
				position: 'absolute'
			}}>
			<img style={{ borderRadius: '9990px' }} src={trophy} alt="t1" />
		</div> */}
	</section>
)



export default Banner
