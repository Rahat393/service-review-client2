import React from 'react';
import { FaQuoteLeft  } from 'react-icons/fa';


const ReviewCard = ({review}) => {
  // console.log( 'review',review);
  return (
    <div className='mt-6'>
      <div className='border-slate-700   p-6 shadow-2xl rounded-lg'>
       
      <FaQuoteLeft  />
       
        <p className='  text-xl'>{review?.review}</p>
        <small>{review.email}</small>
      </div>
      
       
    </div>
  );
};

export default ReviewCard;