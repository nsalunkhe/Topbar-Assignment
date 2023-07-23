import React, { useState } from 'react';
import './Rating.scss';

const Rating = ({ rating = 0, numberOfReviews = 0 }) => {
	const CustomStarIcon = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
		>
			<path d='M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z' />
		</svg>
	);

	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= Math.ceil(rating); i++) {
			const isFilled = i <= rating;
			const isHalfFilled = i - rating > 0 && i - rating < 1;
			const starClass = isFilled ? 'filled' : isHalfFilled ? 'half-filled' : '';

			stars.push(
				<span key={i} className={`star ${starClass}`}>
					{<CustomStarIcon />}
				</span>
			);
		}
		return stars;
	};

	return (
		<div className='product-rating'>
			<div className='star-rating'>{renderStars()}</div>
			<div className='rating-number font-14'>
				{numberOfReviews} Customer Review
			</div>
		</div>
	);
};

export default Rating;
