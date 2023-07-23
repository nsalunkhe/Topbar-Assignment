import React, { useRef } from 'react';
import './HomeDataCards.scss';

// assets
import ArrowLeft from '../../assets/icons/yellow-arrow-left.svg';

// utils
import CONSTANTS from '../../CONSTANTS';
import { Link } from 'react-router-dom';
import useWindowSize from '../../helpers/useWindowSize';

const Mentions = ({
	title = '',
	data = [],
	CardComponent = <></>,
	viewAllLink = '',
}) => {
	// utils
	const { width } = useWindowSize();
	const isTablet = width < CONSTANTS.fontBreakpoint;

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
		<div className='cards-container'>
			<div className='font-36'>{title}</div>

			<div className='cards' ref={containerRef}>
				{isTablet && (
					<button id='prev'>
						<img src={ArrowLeft} alt='prev' onClick={handlePrev} />
					</button>
				)}
				{data.map((item) => (
					<CardComponent data={item} key={item.link} />
				))}
				{isTablet && (
					<button id='next'>
						<img src={ArrowLeft} alt='next' onClick={handleNext} />
					</button>
				)}
			</div>

			{viewAllLink.length > 0 && (
				<Link to={viewAllLink} className='view-more font-16'>
					View More
				</Link>
			)}
		</div>
	);
};

export default Mentions;
