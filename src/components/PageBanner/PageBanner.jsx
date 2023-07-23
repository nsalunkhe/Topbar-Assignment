import React from 'react';
import './PageBanner.scss';

// assets
import Logo from '../../assets/images/logo.png';

// components
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const PageBanner = ({ breadCrumbs = [], lastItem = '', title = '' }) => {
	return (
		<div className='page-banner'>
			<img src={Logo} alt='trupti' className='page-banner-logo' />
			<div className='font-48'>{title}</div>

			<BreadCrumbs breadCrumbs={breadCrumbs} lastItem={lastItem} />
		</div>
	);
};

export default PageBanner;
