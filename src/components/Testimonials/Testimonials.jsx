import React, { useRef } from 'react';
import './Testimonials.scss';

// assets
import ArrowRight from '../../assets/icons/arrow-right-black.svg';

// utils
import CONSTANTS from '../../CONSTANTS';
import useWindowSize from '../../helpers/useWindowSize';

const Testimonials = () => {
	const data = CONSTANTS.testimonials;
	// utils
	const { width } = useWindowSize();
	const isTablet = width < CONSTANTS.tablet;

	// handle scrolling
	const containerRef = useRef(null);
	const handleNext = () => {
		containerRef.current.scroll(
			containerRef.current.scrollLeft + innerWidth,
			0
		);
	};
	const handlePrev = () => {
		containerRef.current.scroll(
			containerRef.current.scrollLeft - innerWidth,
			0
		);
	};

	return (
		<div className='testimonials-container'>
			<div className='font-36'>Testimonials</div>
			<div className='testimonials' ref={containerRef}>
				<button id='prev'>
					<img src={ArrowRight} alt='prev' onClick={handlePrev} />
				</button>

				{data.map((item, index) => (
					<Card data={item} key={index} />
				))}

				<button id='next'>
					<img src={ArrowRight} alt='next' onClick={handleNext} />
				</button>
			</div>
		</div>
	);
};

export default Testimonials;

const Card = ({ data = {} }) => {
	return (
		<div className='card'>
			<img src={data.img} alt='person' />
			<div className='font-16'>{data.remark}</div>
			<div className='font-18'>{data.occupation}</div>
			<div className='font-20'>{data.name}</div>
		</div>
	);
};
