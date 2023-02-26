import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServicesCard = ({service}) => {
  const {titlle, img, price, description, _id} = service
  return (
    <div  >
      <div className="card card-compact w-[600px] bg-base-100 shadow-2xl shadow-gray-600">
  <PhotoProvider>
    <PhotoView src={img}>
       <figure><img src={img} alt="Shoes" /></figure>
    </PhotoView>
  </PhotoProvider>
  <div className="card-body">
    <h2 className="text-3xl font-semibold   "> {titlle}</h2>
    <p className='text-2xl font-semibold'>Price : ${price}</p>
    <p>{description.slice(0, 400) + '..... '}</p>
    <div className="card-actions justify-center ">
      <Link  to={`/service/${_id}`}>
      <button className="btn btn-primary  mt-3 bg-secondary text-white  w-[400px]">View  Details</button>

      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServicesCard;