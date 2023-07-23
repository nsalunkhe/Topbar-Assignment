import React, { useRef, useState } from 'react';
import './Filters.scss';

// assets
import filterIcon from '../../assets/icons/filter.svg';
import catagoryIcon from '../../assets/icons/menu.svg';

// utils
import useOnClickOutside from '../../helpers/useOnClickOutside';
import CONSTANTS from '../../CONSTANTS';
import useWindowSize from '../../helpers/useWindowSize';

const Filters = ({
	total = 32,
	show = 16,
	setShow = () => {},
	sortBy = 'default',
	setSortBy = () => {},
	sortOptions = ['default'],
	catatory = 'sweets',
	setCatagory = () => {},
	page = 1,
	setPage = () => {},
}) => {
	const { width } = useWindowSize();

	const isMobile = width < CONSTANTS.tablet;
	const [showCatagory, setShowCatagory] = useState(false);
	const [showSortBy, setShowSortBy] = useState(false);

	return (
		<div className='filters'>
			<div className='catagory-filter-container'>
				<div className='catagory-filter'>
					<div className='catagory-filter-item'>
						<img src={filterIcon} alt='filter' />
						<div className='catagory-filter-text font-16'>Filter</div>
					</div>
					<button
						className='catagory-filter-item'
						onClick={() => setShowCatagory((prev) => !prev)}
					>
						<img src={catagoryIcon} alt='menu' />
						<div className='catagory-filter-text font-16'>Catagory</div>
					</button>
					{showCatagory && (
						<Options
							options={['Sweets', 'Farsen', 'Diet', 'Snacks', 'Dry Fruits']}
							onClick={(value) => setCatagory(value)}
							onClose={() => setShowCatagory(false)}
						/>
					)}
				</div>
				{!isMobile && (
					<>
						<div className='vr'></div>
						<div className='font-16'>
							Showing {show * page - show + 1}-
							{show * page > total ? total : show * page} of {total} results
						</div>
					</>
				)}
			</div>
			{!isMobile && (
				<div className='sorting-filter-container'>
					<div className='sorting-filter-item'>
						<div className='font-16'>Show</div>
						<input
							type='number'
							value={show}
							onChange={(e) => setShow(e.target.value)}
							className='filter-input font-16'
						/>
					</div>
					<div className='sorting-filter-item'>
						<div className='font-16'>Sort By</div>
						<button
							className='filter-input font-16'
							onClick={() => setShowSortBy((prev) => !prev)}
						>
							{sortBy}
						</button>
						{showSortBy && (
							<Options
								options={['default', 'lowest price']}
								onClick={(value) => setSortBy(value)}
								onClose={() => setShowSortBy(false)}
								left='-20px'
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Filters;

const Options = ({
	options = [],
	onClick = () => {},
	onClose = () => {},
	left = '60px',
	...props
}) => {
	const optionsRef = useRef(null);
	useOnClickOutside(optionsRef, onClose);

	return (
		<div
			className='filter-options'
			ref={optionsRef}
			style={{ left: left }}
			{...props}
		>
			{options.map((item) => (
				<button
					className='option font-16'
					onClick={() => {
						onClick(item);
						onClose();
					}}
					key={item}
				>
					{item}
				</button>
			))}
		</div>
	);
};
