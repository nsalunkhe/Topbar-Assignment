import React from 'react';
import './CustomerReview.scss';
import dummyProfile3 from "../../assets/images/dummyProfile3.png"
import logo from "../../assets/images/logo.png"
const Comp3 = () => {
  const CustomStarIcon = () => (
    <svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
		>
			<path d='M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z' />
		</svg>
  );

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const roundedRating = Math.round(rating * 2) / 2; 

    for (let i = 1; i <= maxStars; i++) {
      const isFilled = i <= roundedRating;
      const starClass = isFilled ? 'filled' : '';

      stars.push(
        <span key={i} className={`star ${starClass}`}>
          {<CustomStarIcon />}
        </span>
      );
    }
    return stars;
  };

  const rating = 5; // Replace this with the actual rating value you want to display
  const numberOfReviews = 1; // Replace this with the actual review count

  return (
    <div className='main-container'>
      <div className='sta'>{renderStars(rating)}</div>
      <div>
        <p className='sub-text'>
        "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
        </p>
      </div>
      <div className='testmonial'>
        <img src={dummyProfile3} alt=""  className='pro'/>
        <div className='customer'>
          <p className='nam'>Name Surname</p>
          <p className='position'>Position, Company name</p>
        </div>
        <div className='divider'></div>
          <img src={logo} alt="" className='log' />
      </div>
    </div>
  );
};

export default Comp3;
