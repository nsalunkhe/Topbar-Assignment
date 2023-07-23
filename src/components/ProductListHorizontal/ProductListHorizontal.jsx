import React from 'react';
import './ProductListHorizontal.scss';

// utils
import CONSTANTS from '../../CONSTANTS';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductListHorizontal = ({
	title = '',
	subtitle = '',
	showTitle = true,
	showViewMore = true,
	data = [],
}) => {
	const productData = data.length > 0 ? data : CONSTANTS.products;
	return (
		<div className={'related-products ' + (showTitle && 'margins')}>
			{showTitle && (
				<>
					<div className='font-36'>{title}</div>
					<div className='font-16'>{subtitle}</div>
				</>
			)}
			<Cards data={productData} />
			{showViewMore && (
				<Link to='/shop' className='view-more font-16'>
					View More
				</Link>
			)}
		</div>
	);
};

export default ProductListHorizontal;

const Cards = ({ data = [] }) => {
	return (
		<div className='related-cards'>
			{data.map((item) => (
				<ProductCard data={item} key={item.id} />
			))}
		</div>
	);
};
