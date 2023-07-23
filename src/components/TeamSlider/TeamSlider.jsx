import React, { useRef, useState } from 'react';
import LinkedInSymbol from "../../assets/images/LinkedInSymbol.png";
import TwitterSymbol from "../../assets/images/TwitterSymbol.png";
import WebsiteSymbol from "../../assets/images/WebsiteSymbol.png";
import './TeamSlider.scss';

// assets
import PrevArrow from '../../assets/images/PrevArrow.png';
import NextArrow from '../../assets/images/NextArrow.png';
import CONSTANTS from '../../CONSTANTS';

const Comp2 = () => {
  const data = CONSTANTS.team;
  const containerRef = useRef(null);
  const [startIdx, setStartIdx] = useState(0);
  const numVisibleCards = 3; // Show 3 visible cards per page
  const cardWidth = 400; // Width of each card in pixels

  const handleNext = () => {
    const totalCards = data.length;
    let newStartIdx = startIdx + numVisibleCards;

    if (newStartIdx > totalCards - numVisibleCards) {
      newStartIdx = totalCards - numVisibleCards;
    }

    setStartIdx(newStartIdx);
    containerRef.current.style.transform = `translateX(-${newStartIdx * cardWidth}px)`;
  };

  const handlePrev = () => {
    let newStartIdx = startIdx - numVisibleCards;

    if (newStartIdx < 0) {
      newStartIdx = 0;
    }

    setStartIdx(newStartIdx);
    containerRef.current.style.transform = `translateX(-${newStartIdx * cardWidth}px)`;
  };

  const numDots = Math.ceil(data.length / numVisibleCards);

  const handleDotClick = (dotIndex) => {
    const newStartIdx = dotIndex * numVisibleCards;
    setStartIdx(newStartIdx);
    containerRef.current.style.transform = `translateX(-${newStartIdx * cardWidth}px)`;
  };

  return (
    <div className='teammembers-container'>
      <div className='teammembers-slider'>
        <div className='teammembers' ref={containerRef}>
          {data.map((member, index) => (
            <Card data={member} key={index} />
          ))}
        </div>
      </div>
	  
      <div className='dots-container'>
        {Array.from({ length: numDots }).map((_, index) => (
          <div
            key={index}
            className={`dot ${Math.floor(startIdx / numVisibleCards) === index ? 'act' : ''}`}
            onClick={() => handleDotClick(index)} 
          />
        ))}
      </div>
	  <div className='arrow-container'>
        <button className='arrow-btn' onClick={handlePrev} disabled={startIdx === 0}>
          <img src={PrevArrow} alt='prev' />
        </button>
        <button
          className='arrow-btn'
          onClick={handleNext}
          disabled={startIdx >= data.length - numVisibleCards}
        >
          <img src={NextArrow} alt='next' />
        </button>
      </div>
	  </div>
  );
};

const Card = ({ data = {} }) => {
  return (
    <div className='card'>
      <img src={data.image} alt='person' />
      <div className='font-20'>{data.name}</div>
      <div className='font-18'>{data.title}</div>
      <div className='font-16'>{data.desc}</div>
      <div className='symbols'>
        <a href={data.linkedin}>
          <img src={LinkedInSymbol} alt='LinkedIn' />
        </a>
        <a href={data.twitter}>
          <img src={TwitterSymbol} alt='Twitter' />
        </a>
        <a href={data.website}>
          <img src={WebsiteSymbol} alt='Website' />
        </a>
      </div>
    </div>
  );
};

export default Comp2;