import React, { useState } from 'react';
import './Footer.scss';

// assets
import Logo from '../../assets/images/logo.png';

// lib
import { Link } from 'react-router-dom';

// utils
import { emailValidation, joiValidation } from '../../helpers/validation';
import CONSTANTS from '../../CONSTANTS';

// components
import CustomInput from '../CustomInput/CustomInput';
import FooterServices from '../FooterServices/FooterServices';
import useWindowSize from '../../helpers/useWindowSize';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [validationError, setValidationError] = useState('');
	const { width } = useWindowSize();
	const isTablet = width < CONSTANTS.tablet;

	const handleEmailChange = (e) => {
		setValidationError('');
		setEmail(e.target.value);
	};
	const handleSubsribe = () => {
		const error = joiValidation({ email: emailValidation }, { email });

		setValidationError(error);
	};
	return (
		<>
			<FooterServices />
			<footer className='footer'>
				{isTablet && (
					<div className='logo'>
						<img src={Logo} alt='logo' />
					</div>
				)}
				<div className='footer-content'>
					{!isTablet && (
						<div className='logo'>
							<img src={Logo} alt='logo' />
							<div className='address'>
								Trupti Treats <br /> 123, Sweets Street <br />
								Gulmohar Colony <br /> Mumbai, Maharashtra <br />
								400001
							</div>
						</div>
					)}
					{isTablet && (
						<div className='links'>
							<div className='title'>Address</div>
							<div className='address'>
								Trupti Treats <br /> 123, Sweets Street <br />
								Gulmohar Colony <br /> Mumbai, Maharashtra <br />
								400001
							</div>
						</div>
					)}
					<div className='links'>
						<div className='title'>Links</div>
						<Link to={'/'} className='link'>
							Home
						</Link>
						<Link to={'/shop'} className='link'>
							Shop
						</Link>
						<Link to={'/about'} className='link'>
							About
						</Link>
						<Link to={'/contact'} className='link'>
							Contact
						</Link>
					</div>
					<div className='links'>
						<div className='title'>Help</div>
						<Link to={'/paymentOptions'} className='link'>
							Payment Options
						</Link>
						<Link to={'/privacyPolicy'} className='link'>
							Privacy Policy
						</Link>
					</div>

					{!isTablet && (
						<div className='news'>
							<div className='title'>Newsletter</div>
							<div className='news-form'>
								<CustomInput
									type='text'
									id='news'
									value={email}
									onChange={handleEmailChange}
									error={validationError.length > 0}
									errorMessage={validationError}
									placeHolder='Enter Your Email Address'
									inputClass='news-custom-input'
								/>
								<button onClick={handleSubsribe}>SUBSCRIBE</button>
							</div>
						</div>
					)}
				</div>
				<div className='rights'>2022 TCC. All rights reverved</div>
			</footer>
		</>
	);
};

export default Footer;
