import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
  const {user} = useContext(AuthContext)

  const {data: reviews } = useQuery({
    
    queryKey : ['review'],
    queryFn: async () => {
      try{
        const res = await fetch(`http://localhost:5000/review?email=${user.email}`)
        const data = await res.json()
        return data
      }
      catch{

      }
    }
  })
  return (
    <div  >
      <h1 className='text-3xl font-semibold text-center'> Here are my all review</h1>
        <div  className='grid lg:grid-cols-3 gap-4 my-12'>
        {reviews?.map(review =>  <MyReviewCard
         key={review._id}
         review={review}
        ></MyReviewCard>)}
        </div>
    </div>
  );
};

export default MyReview;