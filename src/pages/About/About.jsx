import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import AboutComponent from "../../components/About/AboutComponent"
import './About.scss';

const About = () => {
	return <div  className='page'>
		<PageBanner
				title={'About us'}
				breadCrumbs={[
					{ label: 'Home', link: '/' },
					{ label: 'About us', link: '/about' },
				]}
			/>
		 <AboutComponent/>
	</div>;
};

export default About;
