import React from 'react';

const SServiceCard = ({service}) => {
  const {img, titlle} = service
  return (
    <div className='my-8'>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl shadow-zinc-400">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-2xl font-bold text-center"> {titlle}</h2>
    
  </div>
</div>
 
    </div>
  );
};

export default SServiceCard;