import React from 'react';
import { FaQuoteLeft  } from 'react-icons/fa';


const MyReviewCard = ({review}) => {
  return (
    <div >
        <div className='border-slate-700   p-6 shadow-2xl rounded-lg'>
       
       <FaQuoteLeft  />
        
         <p className='  text-xl'>{review?.review}</p>
         <small>Review of <span className='font-semibold'>{review.titlle}</span></small>
       </div>
    </div>
  );
};

export default MyReviewCard;