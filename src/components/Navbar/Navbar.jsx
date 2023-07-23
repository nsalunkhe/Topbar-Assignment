import React, { useEffect, useState } from 'react';
import './Navbar.scss';

// assets
import accountIcon from '../../assets/icons/account.svg';
import searchIcon from '../../assets/icons/search.svg';
import heartIcon from '../../assets/icons/heart.svg';
import cartIcon from '../../assets/icons/cart.svg';
import hamburderIcon from '../../assets/icons/hamburger.svg';

// libs
import { NavLink, useLocation } from 'react-router-dom';
import CONSTANTS from '../../CONSTANTS';
import useWindowSize from '../../helpers/useWindowSize';

const Navbar = ({ className = '' }) => {
	// utils
	const [showLinks, setShowLinks] = useState(false);
	const { width } = useWindowSize();
	const isTablet = width < CONSTANTS.tablet;

	const handleHamburgerClick = () => {
		setShowLinks((prev) => !prev);
	};
	const closeNavbar = () => {
		setShowLinks(false);
	};

	// checking if location is home
	let location = useLocation();
	const [isHome, setIsHome] = useState(false);
	const handleRouteChange = () => {
		if (location.pathname === '/') setIsHome(true);
		else setIsHome(false);
		console.log(location.pathname);
	};
	useEffect(() => {
		handleRouteChange();
	}, [location]);

	return (
		<div className={'navbar ' + className + (isHome && ' is-home')}>
			{isTablet && (
				<button onClick={handleHamburgerClick} className='hamburger-button'>
					<img src={hamburderIcon} alt='hamburger' />
				</button>
			)}

			{((isTablet && showLinks) || !isTablet) && (
				<div className='navbar__content'>
					<div className='navbar__links'>
						<NavLink to={'/'} onClick={closeNavbar}>
							Home
						</NavLink>
						<NavLink to={'/shop'} onClick={closeNavbar}>
							Shop
						</NavLink>
						<NavLink to={'/about'} onClick={closeNavbar}>
							About
						</NavLink>
						<NavLink to={'/contact'} onClick={closeNavbar}>
							Contact
						</NavLink>
					</div>
					<div className='navbar__icon-links'>
						<NavLink to={'/account'} onClick={closeNavbar}>
							<img src={accountIcon} alt='account' />
						</NavLink>
						<button onClick={closeNavbar}>
							<img src={searchIcon} alt='search' />
						</button>
						<NavLink to={'/account/favourites'} onClick={closeNavbar}>
							<img src={heartIcon} alt='heart' />
						</NavLink>
						<NavLink to={'/cart'} onClick={closeNavbar}>
							<img src={cartIcon} alt='cart' />
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
