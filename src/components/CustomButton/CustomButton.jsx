import React from 'react';
import './CustomButton.scss';

import loaderSvg from '../../assets/icons/loading.svg';

const CustomButton = ({
	children = <></>,
	fullWidth = false,
	onClick = () => {},
	disabled = false,
	loading = false,
	...props
}) => {
	return (
		<button
			className={'custom-button ' + (fullWidth && 'full-width')}
			onClick={onClick}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? (
				<img src={loaderSvg} alt='loading' className='loading' />
			) : (
				children
			)}
		</button>
	);
};

export default CustomButton;
