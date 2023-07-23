import React, { useEffect, useState } from 'react';
import './Login.scss';

// components
import CustomInput from '../../components/CustomInput/CustomInput';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
	joiValidation,
	phoneValidation,
	otpValidation,
} from '../../helpers/validation';

const Login = () => {
	// utils
	const [showLoginButton, setShowLoginButton] = useState(false);
	const [validationError, setValidationError] = useState('');
	const [loading, setLoading] = useState(false);
	// form
	const [loginForm, setLoginForm] = useState({
		username: '',
		otp: '',
	});

	const handleLoginChange = (e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
		setValidationError('');
	};
	const handleSendOtp = () => {
		const error = joiValidation(
			{ username: phoneValidation },
			{ username: loginForm.username }
		);
		setValidationError(error);
		if (error.length === 0) {
			setLoading(true);

			// api call
			setTimeout(() => {
				setLoading(false);
				setShowLoginButton(true);
			}, 500);
		}
	};
	const handleLoginClick = () => {
		const error = joiValidation({ otp: otpValidation }, { otp: loginForm.otp });
		setValidationError(error);
		if (error.length === 0) {
			setLoading(true);

			// api call
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
	};

	const handleReset = () => {
		setLoginForm({ ...loginForm, otp: '' });
		setShowLoginButton(false);
	};

	// useEffect(() => {
	// 	console.log(loginForm);
	// }, [loginForm]);
	return (
		<>
			<PageBanner
				title={'Log In'}
				breadCrumbs={[
					{ label: 'Home', link: '/' },
					{ label: 'Log In', link: '/login' },
				]}
			/>
			<div className='login-register'>
				<div className='login'>
					<div className='font-36'>Log In</div>
					<CustomInput
						label='Phone number'
						value={loginForm.username}
						name='username'
						id='username'
						type='number'
						onChange={handleLoginChange}
						placeHolder='Enter Phone Number'
						autoComplete={false}
						error={validationError?.includes('username')}
						errorMessage={validationError}
						disabled={showLoginButton}
					/>
					{showLoginButton && (
						<CustomInput
							label='OTP'
							value={loginForm.otp}
							type='number'
							name='otp'
							id='otp'
							placeHolder='Enter OTP'
							onChange={handleLoginChange}
							autoComplete={false}
							error={validationError?.includes('otp')}
							errorMessage={validationError}
						/>
					)}
					{showLoginButton ? (
						<CustomButton
							onClick={handleLoginClick}
							loading={loading}
							fullWidth={true}
						>
							Log In
						</CustomButton>
					) : (
						<CustomButton
							onClick={handleSendOtp}
							loading={loading}
							fullWidth={true}
						>
							Send OTP
						</CustomButton>
					)}
				</div>

				{showLoginButton && (
					<button className='reset font-14' onClick={handleReset}>
						Edit phone number
					</button>
				)}
			</div>
		</>
	);
};

export default Login;
