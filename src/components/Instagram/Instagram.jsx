import React from 'react';
import './Instagram.scss';

// assets
import InstaIcon from '../../assets/icons/Instagram.svg';

// components
import CustomButton from '../CustomButton/CustomButton';

const Instagram = ({ link = '' }) => {
	const handleButtonClick = () => {
		window.open(link, '_blank');
	};

	return (
		<div className='instagram'>
			<img src={InstaIcon} alt='instagram' />
			<div className='font-42'>Out Instagram</div>
			<div className='font-16'>Follow our store on instagram</div>

			<CustomButton onClick={handleButtonClick}>Follow us</CustomButton>
		</div>
	);
};

export default Instagram;
