import React from 'react';
import './BreadCrumbs.scss';

// assets
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ breadCrumbs = [{}], lastItem = '' }) => {
	return (
		breadCrumbs.length > 0 && (
			<div
				className={'bread-crumbs ' + (lastItem ? 'last-item-container' : '')}
			>
				{breadCrumbs.map((item, index) => {
					return (
						<>
							{index > 0 && <img src={ArrowRight} alt='arrow' />}
							<Link className='bread-crumb-item font-16' to={item.link}>
								{item.label}
							</Link>
						</>
					);
				})}
				<div className='last-item font-16'>{lastItem}</div>
			</div>
		)
	);
};

export default BreadCrumbs;
