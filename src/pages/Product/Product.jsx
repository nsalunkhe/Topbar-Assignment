import React, { useMemo } from 'react';
import './Product.scss';

// utils
import { useParams } from 'react-router-dom';
import CONSTANTS from '../../CONSTANTS';
import useWindowSize from '../../helpers/useWindowSize';

// components
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductImages from '../../components/ProductImages/ProductImages';
import ProductData from '../../components/ProductData/ProductData';
import RelatedProducts from '../../components/ProductListHorizontal/ProductListHorizontal';
import ProductDesc from '../../components/ProductDesc/ProductDesc';

const Product = () => {
	// utils
	const { id } = useParams();

	const data = useMemo(
		() => CONSTANTS.products.filter((item) => item.id == id)[0],
		[id]
	);
	console.log({ data });
	return (
		<div className='product'>
			<BreadCrumbs
				breadCrumbs={[
					{ label: 'Home', link: '/' },
					{ label: 'Shop', link: '/shop' },
				]}
				lastItem={data.product_name}
			/>
			<div className='product-details-container'>
				<ProductImages
					images={[
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
						data['productdocuments.document_url'],
					]}
				/>
				<ProductData data={data} />
			</div>
			<ProductDesc data={data} />
			<RelatedProducts title='Related Products' />
		</div>
	);
};

export default Product;
