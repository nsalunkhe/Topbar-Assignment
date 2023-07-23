import React from 'react';
import './BlogCard.scss';

// assets
import ClockIcon from '../../assets/icons/clock.svg';
import CalendarIcon from '../../assets/icons/calender.svg';

// utils
import { Link } from 'react-router-dom';

const BlogCard = ({ data = {} }) => {
	return (
		<div className='blog-card'>
			<img src={data.img} alt='blog' />
			<div className='font-16'>{data.title}</div>
			<Link to={data.link} target='_blank' className='view-more font-20'>
				Read More
			</Link>

			<div className='blog-details'>
				<BlogDetailsItem icon={ClockIcon} value={data.duration} />
				<BlogDetailsItem icon={CalendarIcon} value={data.date} />
			</div>
		</div>
	);
};

export default BlogCard;

const BlogDetailsItem = ({ icon = '', value = '' }) => {
	return (
		<div className='blog-details-item'>
			<img src={icon} alt='icon' />
			<div className='font-14'>{value}</div>
		</div>
	);
};
