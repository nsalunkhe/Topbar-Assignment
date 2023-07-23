import React from 'react';
import './Deals2.scss';

// utils
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../helpers/useWindowSize';
import CONSTANTS from '../../CONSTANTS';

// components
import CustomButton from '../CustomButton/CustomButton';
import ProductCard from '../ProductCard/ProductCard';
import ProductListHorizontal from '../ProductListHorizontal/ProductListHorizontal';

const Deals2 = ({
	data = [],
	className = '',
	title = '',
	desc = '',
	backgroundImage = '',
}) => {
	//utils
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/shop');
	};

	return (
		<div
			className={'deals2-container ' + className}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
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

export default Deals2;
