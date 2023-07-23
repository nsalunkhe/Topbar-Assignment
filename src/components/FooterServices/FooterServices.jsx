import React, { useRef } from 'react';
import './FooterServices.scss';

// assets
import ArrowRight from '../../assets/icons/arrow-right-black.svg';

// utils
import useWindowSize from '../../helpers/useWindowSize';
import CONSTANTS from '../../CONSTANTS';

const FooterServices = () => {
	// utils
	const { width } = useWindowSize();
	const isTablet = width < CONSTANTS.tablet;
	const content = [
		{
			title: 'Free Delivery',
			desc: 'For all oders over ₹999, consectetur adipim scing elit.',
		},
		{
			title: '12 Days Return',
			desc: 'If goods have problems, consectetur adipim scing elit.',
		},
		{
			title: 'Secure Payment',
			desc: '100% secure payment, consectetur adipim scing elit.',
		},
	];

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
		<div className='footer-services' ref={containerRef}>
			{isTablet && (
				<button id='prev'>
					<img src={ArrowRight} alt='prev' onClick={handlePrev} />
				</button>
			)}
			{content.map((item) => {
				return (
					<div className='footer-service' key={item.desc}>
						<div className='service-title font-32'>{item.title}</div>
						<div className='service-desc font-20'>{item.desc}</div>
					</div>
				);
			})}
			{isTablet && (
				<button id='next'>
					<img src={ArrowRight} alt='next' onClick={handleNext} />
				</button>
			)}
		</div>
	);
};

export default FooterServices;
