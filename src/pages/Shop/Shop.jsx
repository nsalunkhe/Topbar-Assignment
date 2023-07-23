import React, { useEffect, useState } from 'react';
import './Shop.scss';

// components
import PageBanner from '../../components/PageBanner/PageBanner';
import Filters from '../../components/Filters/Filters';
import CONSTANTS from '../../CONSTANTS';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
	const [currentPage, setCurrentPage] = useState(1);

	// filters
	const [show, setShow] = useState(16);
	const [sortBy, setSortBy] = useState('default');
	const [catagory, setCatagory] = useState('sweets');

	const data = CONSTANTS.products;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='page'>
			<PageBanner
				title={'Shop'}
				breadCrumbs={[
					{ label: 'Home', link: '/' },
					{ label: 'Shop', link: '/shop' },
				]}
			/>
			<Filters
				show={show}
				setShow={setShow}
				catatory={catagory}
				setCatagory={setCatagory}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<Cards data={data} />
			<Pagination
				total={80}
				perPage={8}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default Shop;

const Cards = ({ data = [] }) => {
	return (
		<div className='product-cards'>
			{data.map((item) => (
				<ProductCard data={item} key={item.id} />
			))}
		</div>
	);
};
