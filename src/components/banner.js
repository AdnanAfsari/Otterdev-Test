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
			<img style={{borderRadius: '1000px'}} src={t1} alt="t1" />
		</div>
		<div
			className='animate'
			style={{
				position: 'absolute',
				top: '10.1rem',
			}}>
			<img src={pencil} alt='pencil' />
		</div>
		<div
			className='animate'
			style={{
				position: 'absolute',
				top: '10.5rem',
				left: '41rem',
			}}>
			<img src={ball} alt='ball' />
		</div>
		<div
			className='animate'
			style={{
				position: 'absolute',
				left: '49rem',
				top: '36rem',
			}}>
			<img src={ruler} alt='ruler' />
		</div>
		<div
			className='animate'
			style={{
				position: 'absolute',
				top: '35rem',
				left: '17rem'
			}}>
			<img src={trophy} alt='trophy' />
		</div>
	</section>
)

export default Banner
