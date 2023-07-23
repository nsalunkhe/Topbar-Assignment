import React from 'react';
import './Deals.scss';

// utils
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../helpers/useWindowSize';
import CONSTANTS from '../../CONSTANTS';

// components
import CustomButton from '../CustomButton/CustomButton';
import ProductCard from '../ProductCard/ProductCard';
import ProductListHorizontal from '../ProductListHorizontal/ProductListHorizontal';

const Deals = ({ data = [], className = '', title = '', desc = '' }) => {
	//utils
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/shop');
	};

	return (
		<div className={'deals-container ' + className}>
			<div className='deals'>
				<div className='deals-text'>
					<div className='font-36'>{title}</div>
					<div className='font-16'>{desc}</div>
					<CustomButton onClick={handleButtonClick}>Browse All</CustomButton>
				</div>
				<ProductListHorizontal
					data={data}
					showTitle={false}
					showViewMore={false}
				/>
			</div>
		</div>
	);
};

export default Deals;
