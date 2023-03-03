import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
 import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
  const   [{price, titlle, img, description}] = useLoaderData()
 
   
  return (
    <div className='mb-20'>
    <h1 className='text-3xl font-semibold text-center mb-10'> {titlle}</h1>

      <div className="hero  ">
  <div className=" flex  flex-col lg:flex-row">
    <img src={img} alt='' className="max-w-xl rounded-lg shadow-2xl mr-8" />
    <div>
      <h1 className="text-2xl font-semibold"> ${price}</h1>
      <p className="py-6"> {description}</p>
     </div>
  </div>
</div>
     <h1 className='text-3xl font-semibold mt-10'>Client Review </h1>

     <ReviewSection
      titlle={titlle}
     
     >
     </ReviewSection>

    </div>
  );
};

export default ServiceDetails;