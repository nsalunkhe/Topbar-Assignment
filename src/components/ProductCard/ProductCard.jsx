import React from 'react';
import './ProductCard.scss';

// utils
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slice/cartSlice';
import CONSTANTS from '../../CONSTANTS';
import useWindowSize from '../../helpers/useWindowSize';
import limitString from '../../helpers/limitString';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data = {}, ...props }) => {
	// utils
	const { width } = useWindowSize();
	const isMobile = width < CONSTANTS.mobile;

	const navigate = useNavigate();
	const productName = limitString(data.product_name, isMobile ? 20 : 15);

	const goToProductDetails = (e) => {
		e.stopPropagation();
		navigate(`../shop/${data.id}`, { replace: true });

		window.scrollTo(0, 0);
	};

	// redux
	const dispatch = useDispatch();
	const addToCart = (e, id) => {
		e.stopPropagation();
		dispatch(addItem(id));
	};

	return (
		<div className='product-card' onClick={goToProductDetails} {...props}>
			<img
				src={data['productdocuments.document_url']}
				alt=''
				className='product-image'
			/>
			<div className='title-cart'>
				<div className='product-title font-16'>{productName}</div>
				<button
					className='product-cart font-12'
					onClick={(e) => addToCart(e, data.id)}
				>
					{isMobile ? 'Add' : 'Add to cart'}
				</button>
			</div>
			<div className='product-price'>
				<span className='mrp font-10'>
					₹{data['productcatalogs.prodctlgprod.product_mrp']}
				</span>
				<span className='base font-14'>
					{data['productcatalogs.prodctlgprod.product_base_rate']}
				</span>
				<span className='quantity font-12'>/kg</span>
			</div>
		</div>
	);
};

export default ProductCard;
