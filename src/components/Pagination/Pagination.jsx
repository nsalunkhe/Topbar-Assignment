import React from 'react';
import './Pagination.scss';
import ResponsivePagination from 'react-responsive-pagination';

const CustomPagination = ({
	currentPage = 1,
	setCurrentPage = () => {},
	perPage = 8,
	total = 40,
}) => {
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		console.log(pageNumber);
	};

	return (
		<div className='custom-pagination'>
			<ResponsivePagination
				total={Math.ceil(total / perPage)}
				current={currentPage}
				onPageChange={(page) => handlePageChange(page)}
				nextLabel='Next'
			/>
		</div>
	);
};

export default CustomPagination;
