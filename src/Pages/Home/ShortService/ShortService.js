import React from 'react';
import {   AiOutlineArrowRight } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import SpinnerOval from '../../Shared/Spinner/SpinnerOval';
import SServiceCard from './SServiceCard';

const ShortService = () => {
  const {data: services , isLoading, refetch} = useQuery({
    queryKey:['services3'],
    queryFn: async() => {
      try{
        const res = await fetch('http://localhost:5000/services3')
        const data = await res.json()
        return data
      }
      catch{

      }
    }
  });
  if(isLoading){
   return <SpinnerOval></SpinnerOval>
  }
  return (
   <div>
    <h2 className='text-4xl font-semibold text-center mt-12'>The Services</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-3'>
       {
        services?.map(service => <SServiceCard
        key={service._id}
        service={service}
        ></SServiceCard>)
       }
    </div>
   <div className='flex justify-center mb-10'>
   <Link to={'/services'}><button className="btn btn-secondary text-white">See all servics <AiOutlineArrowRight className='ml-2 font-bold'/></button></Link>
   </div>

   </div>
  );
};

export default ShortService;