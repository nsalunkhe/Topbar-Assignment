import React from 'react';
import './FestivalBanner.scss';

// utils
import { useNavigate } from 'react-router-dom';

// components
import CustomButton from '../CustomButton/CustomButton';

const FestivalBanner = () => {
	//utils
	const navigate = useNavigate();
	const handleBuyNow = () => {
		navigate('/shop');
	};
	return (
		<div className='festival-banner-container'>
			<div className='festival-banner'>
				<div className='text-container'>
					<div className='font-32'>
						Celebrate Your <span className='color-orange'>Raksha Bandhan</span>{' '}
						With Us
					</div>
					<div className='font-14'>
						Exclusive discounts that will make this Raksha Bandhan a joyous
						occasion for your family!
					</div>
				</div>
				<CustomButton onClick={handleBuyNow} fullWidth={false}>
					Shop Now
				</CustomButton>
			</div>
		</div>
	);
};

export default FestivalBanner;
