import React, { useEffect } from 'react';
import './Home.scss';

// utils
import CONSTANTS from '../../CONSTANTS';

// components
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RakhiBanner from '../../components/FestivalBanner/FestivalBanner';
import ProductListHorizontal from '../../components/ProductListHorizontal/ProductListHorizontal';
import Deals from '../../components/Deals/Deals';
import Deals2 from '../../components/Deals2/Deals2';
import Instagram from '../../components/Instagram/Instagram';
import HomeDataCards from '../../components/HomeDataCards/HomeDataCards.jsx';
import Testimonials from '../../components/Testimonials/Testimonials';
import MentionCard from '../../components/MentionsCard/MentionsCard';
import BlogCard from '../../components/BlogsCard/BlogCard';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='home'>
			<HomeBanner />
			<RakhiBanner />
			<Deals
				data={CONSTANTS.products.slice(0, 2)}
				title='Sweet Deals'
				desc={`Discover irresistible offers at Trupti Treats. Indulge in delightful flavors with limited-time promotions and exclusive discounts. From traditional sweets to fusion desserts and regional specialties, there's something for every palate. Order now and treat yourself to a sweet experience!`}
			/>
			<ProductListHorizontal
				title='Top Picks For You'
				subtitle='Discover our handpicked sweet delights, tailored just for you.'
			/>
			<Deals2
				data={CONSTANTS.products.slice(0, 2)}
				title='New Arrivals'
				desc={`Introducing our newest culinary creations - indulge in the delightful world of Trupti Treats' New Arrivals. Discover a delectable array of fresh sweets, carefully crafted with the finest ingredients and bursting with flavors that will tantalize your taste buds. From innovative twists on traditional favorites to seasonal specialties, our new arrivals section is a gateway to sweet surprises. Be among the first to experience these delightful treats and embark on a sweet journey of discovery.`}
				backgroundImage='src/assets/images/sweet-bowls.png'
			/>
			<HomeDataCards
				title='Our Mentions'
				data={CONSTANTS.mentions}
				CardComponent={MentionCard}
			/>
			<Testimonials />
			<HomeDataCards
				title='Our Blogs'
				data={CONSTANTS.blogs}
				CardComponent={BlogCard}
				viewAllLink='blogs'
			/>
			<Instagram link='' />
		</div>
	);
};

export default Home;
