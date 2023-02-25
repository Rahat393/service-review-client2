import React from 'react';

const ServicesCard = ({service}) => {
  const {titlle, img, price, description} = service
  return (
    <div  >
      <div className="card card-compact w-[600px] bg-base-100 shadow-2xl shadow-gray-600">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-semibold   "> {titlle}</h2>
    <p className='text-2xl font-semibold'>Price : ${price}</p>
    <p>{description.slice(0, 400) + '..... '}</p>
    <div className="card-actions justify-center ">
      <button className="btn btn-primary w-4/5 mt-3 bg-secondary text-white ">View  Details</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServicesCard;