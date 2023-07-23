import React, { useState } from 'react';
import './ProductImages.scss';
import useWindowSize from '../../helpers/useWindowSize';
import CONSTANTS from '../../CONSTANTS';

const ProductImages = ({ images = [] }) => {
	const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
	const handleImageClick = (index) => {
		setPrimaryImageIndex(index);
	};

	return (
		<div className='product-images'>
			<div className='other-images'>
				{images.map((image, index) => (
					<button
						className={
							'other-image ' +
							(index === primaryImageIndex ? 'selected-image' : '')
						}
						onClick={() => handleImageClick(index)}
					>
						<img src={image} alt='product' />
					</button>
				))}
			</div>
			<img
				src={images[primaryImageIndex]}
				alt='primary image'
				className='primary-image'
			/>
		</div>
	);
};

export default ProductImages;
