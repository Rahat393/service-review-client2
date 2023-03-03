import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SpinnerOval from '../Shared/Spinner/SpinnerOval';
import ReviewCard from './ReviewCard';

const ReviewSection = ({titlle  }) => {
   const {user} = useContext(AuthContext)
  //  console.log('user', user);
  const {data: reviews, refetch, isLoading} = useQuery({
    queryKey: ['review'],
    queryFn: async() =>  {
        try{
          const res = await fetch(`http://localhost:5000/reviewss?titlle=${titlle}`)
          const data = await res.json()
          return data
        }
        catch{

        }
    }
  })

  // if (!user?.uid) {
  //   return <p className='my-5 text-2xl'>Please <Link className='text-sky-400 text-2xl' to={'/login'}>LogIn</Link> to add review!!</p>
  //     }
      

      const handleReview = event => {
          event.preventDefault()
          const form = event.target;
          const review = form.review.value;
          const email = user?.email || 'unregistered';

          const reviewData = {
            titlle,
            review, 
            email
          }

           fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)
           })
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if (data.acknowledged) {
              toast.success('Review Added Successfully')
              form.reset();
              refetch() 
               
          }
           })
      }

      if(isLoading){
        return <SpinnerOval></SpinnerOval>
      }
  return (
    <div>
      <div className='grid lg:grid-cols-3 gap-4'>
         { 
          reviews?.map(review => <ReviewCard
           key={review._id}
           review={review}
            
          ></ReviewCard>)
         }
    </div>

    <div>
      
      <form onSubmit={handleReview} className='mt-10'>
      <h2 className='text-3xl font-semibold mb-3'> Please Share Your Review Here.</h2>

      { user?.uid  ?
        <>
      <div className='justify-center'>
      <textarea name='review' className="textarea textarea-accent w-2/4 h-28" placeholder="Enter your Review" required></textarea>
      <input className='btn block btn-success text-white w-2/4' type="submit" value="Add Review" />                
      </div>
        </>
        :
        <p className='my-5 text-2xl'>Please <Link className='text-sky-400 text-2xl' to={'/login'}>LogIn</Link> to add review!!</p>
      }
    </form>
    </div>
    </div>
  );
};

export default ReviewSection;