import React, { useMemo, useState } from 'react';
import './ProductData.scss';

// assets
import HeartIcon from '../../assets/icons/heart.svg';
import HeartIconFilled from '../../assets/icons/heart-filled.png';
import FbIcon from '../../assets/icons/fb.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';

// utils
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/slice/cartSlice';

// components
import Rating from '../Rating/Rating';
import CustomButton from '../CustomButton/CustomButton';
import { string } from 'joi';

const ProductData = ({ data = {} }) => {
	// utils
	const [isFavourite, setIsFavourite] = useState(false);
	const addToFavourtes = () => {
		setIsFavourite(true);
	};
	const removeFromFavourtes = () => {
		setIsFavourite(false);
	};

	// handling order size
	const sizes = useMemo(() => data.size && Object.keys(data.size), [data]);
	const [productCount, setProductCount] = useState(0);
	const [selectedSize, setSelectedSize] = useState('s');
	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};

	// redux
	const dispatch = useDispatch();
	const addToCart = (e, id) => {
		e.stopPropagation();
		dispatch(addItem(id));
	};
	const removeFromCart = (e, id) => {
		e.stopPropagation();
		dispatch(removeItem(id));
	};

	return (
		<>
			<div className='product-data'>
				<div className='data'>
					<div className='name font-42'>{data.product_name}</div>
					<div className='product-price'>
						<span className='mrp font-14'>
							₹{data['productcatalogs.prodctlgprod.product_mrp']}
						</span>
						<span className='base font-20'>
							{data['productcatalogs.prodctlgprod.product_base_rate']}
						</span>
						<span className='quantity font-14'>/kg</span>
					</div>

					<Rating rating={4.5} numberOfReviews={5} />
					<p className='product-desc font-14'>{data.desc}</p>
					<div className='product-size'>
						<div className='font-14'>Size</div>
						<div className='size-buttons'>
							{sizes.map((item) => (
								<button
									className={item == selectedSize && 'selected-size'}
									onClick={() => handleSizeClick(item)}
								>
									{item}
								</button>
							))}
						</div>
						<div className='font-14'>{data.size[selectedSize]} pieces</div>
					</div>
				</div>
				<div className='actions'>
					<div className='counter'>
						<button onClick={() => setProductCount((prev) => prev - 1)}>
							-
						</button>
						<div className='font-16'>{productCount}</div>
						<button onClick={() => setProductCount((prev) => prev + 1)}>
							+
						</button>
					</div>
					<CustomButton
						onClick={(e) => addToCart(e, data.id)}
						fullWidth={false}
					>
						Add To Cart
					</CustomButton>
					{isFavourite ? (
						<button
							className='favourite'
							onClick={() => removeFromFavourtes(data.id)}
						>
							<img src={HeartIconFilled} alt='like' />
						</button>
					) : (
						<button
							className='favourite'
							onClick={() => addToFavourtes(data.id)}
						>
							<img src={HeartIcon} alt='like' />
						</button>
					)}
				</div>
			</div>
			<div className='additional-data'>
				<AdditionalDataItem label='SKU' value={data.sku} />
				<AdditionalDataItem label='Catagory' value={data.catagory} />
				<AdditionalDataItem label='Tags' value={data.tags.join(', ')} />
				<AdditionalDataItem label='Share' value={<SharingIcons />} />
			</div>
		</>
	);
};

export default ProductData;

const AdditionalDataItem = ({ label = '', value = '' }) => {
	return (
		<div className='additional-data-item'>
			<div className='info-label font-16'>{label}</div>
			{typeof value === string ? (
				<div className='info-value font-16'>: {value}</div>
			) : (
				value
			)}
		</div>
	);
};

const SharingIcons = () => {
	// handle sharing
	const shareToFb = () => {};
	const shareToLinkedIn = () => {};
	const shareToTwitter = () => {};

	return (
		<div className='sharing-icons'>
			<button onClick={shareToFb}>
				<img src={FbIcon} alt='fb' />
			</button>
			<button onClick={shareToTwitter}>
				<img src={TwitterIcon} alt='twitter' />
			</button>
			<button onClick={shareToLinkedIn}>
				<img src={LinkedInIcon} alt='linkedin' />
			</button>
		</div>
	);
};
