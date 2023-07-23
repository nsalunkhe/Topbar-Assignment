import React from 'react';
import './HomeBanner.scss';

// assets
import Logo from '../../assets/images/logo.png';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
	//utils
	const navigate = useNavigate();
	const handleBuyNow = () => {
		navigate('/shop');
	};
	const handleGetInTouch = () => {
		navigate('/contact');
	};
	return (
		<div className='home-banner'>
			<div className='logo-container'>
				<img src={Logo} alt='Trupti' id='logo' />
			</div>
			<div className='font-24 '>
				Welcome to Trupti Treats - Indulge in the Finest Sweets!
			</div>
			<div className='font-24'>
				Explore our wide selection of traditional sweets, fusion desserts, and
				regional specialties.
			</div>
			<div className='actions'>
				<CustomButton onClick={handleBuyNow}>Buy Now</CustomButton>
				<CustomButton onClick={handleGetInTouch}>Get In Touch</CustomButton>
			</div>
		</div>
	);
};

export default HomeBanner;
