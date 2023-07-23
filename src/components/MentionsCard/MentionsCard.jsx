import React from 'react';
import './MentionsCard.scss';

// assets
import MentionImage from '../../assets/images/mentions.svg';

// utils
import { Link } from 'react-router-dom';

const MentionCard = ({ data = {}, key = '' }) => {
	return (
		<div className='mention-card' key={key}>
			<img src={MentionImage} alt='image' />
			<div className='font-32'>{data.label}</div>
			<Link className='font-16' to={data.link}>
				{data.link}
			</Link>
		</div>
	);
};

export default MentionCard;
