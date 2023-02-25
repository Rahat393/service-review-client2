import React from 'react';
import { useQuery } from 'react-query';
import SpinnerOval from '../Shared/Spinner/SpinnerOval';
import ServicesCard from './ServicesCard';

const Services = () => {
  const {data: services, isLoading} = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try{
        const res = await fetch('http://localhost:5000/services')
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
          <h1 className='text-4xl font-semibold text-center'>All Services</h1>

      <div className='grid lg:grid-cols-2 gap-11 my-14'>
       {
        services?.map(service => <ServicesCard
        key={service._id}
        service={service}
        ></ServicesCard>)
       }
    </div>
    </div>
  );
};

export default Services;