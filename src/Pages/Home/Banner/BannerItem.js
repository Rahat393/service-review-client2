import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import './BannerItem.css'

const BannerItem = ({slide}) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
        <img src={image} alt="" className="  h-[600px]  w-[1300px] rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-56">
        <h1 className='text-6xl font-bold text-white font-mono'>
            Providing Best <br />
             Quality Photography <br />
             Service
        </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-96">
        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>
     
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-20">
        <a href={`#slide${prev}`} className="btn btn-circle  bg-secondary  hover:bg-green-600  mr-5"> <AiOutlineArrowLeft className='text-black'/>  </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-primary hover:bg-green-600  "> <AiOutlineArrowRight className='text-black'/> </a>
    </div>
</div>
  );
};

export default BannerItem;