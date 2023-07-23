import React from 'react';
import './ProductDesc.scss';

const ProductDesc = ({ data = {} }) => {
	return (
		<div className='product-detailed-desc'>
			<div className='font-36'>Description</div>
			<p className='font-16'>{data.detailed_desc}</p>
		</div>
	);
};

export default ProductDesc;
