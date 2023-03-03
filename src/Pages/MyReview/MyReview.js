import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaQuoteLeft  } from 'react-icons/fa';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
 
import { AuthContext } from '../../Contexts/AuthProvider';
import SpinnerOval from '../Shared/Spinner/SpinnerOval';
import ConfimationModal from './ConfimationModal';
import UpdateReview from './UpdateReview';
 

const MyReview = () => {
  const {user} = useContext(AuthContext)
  const [deletingReview, setDeletingReview] = useState(null);
  // const [updateReview, setUpdateReview] = useState(null)
 


  const {data: reviews, refetch, isLoading } = useQuery({
    
    queryKey : ['review'],
    queryFn: async () => {
      try{
        const res = await fetch(`http://localhost:5000/review?email=${user?.email}`)
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
 
  const handleDeleteReview = review =>{
    fetch(`http://localhost:5000/review/${review._id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount > 0){
       refetch();
       toast.success( `Review of ${ review.titlle} deleted successfully !`)
}
})
  }


  // const handleUpdate = review => {
  //   fetch(`http://localhost:5000/review/${review._id}`, {
  //     method: 'PUT',
  //     headers:{
  //       'content-type' : 'application/json'
  //     },
  //     body: JSON.stringify(updateReview)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log( 'data ', data);
  //      if(data.modifiedCount > 0){
  //       toast.success('Review update successfully')
  //       refetch()
  //      }
  //   })
  // }

  const closeModal =() => {
    setDeletingReview(null)
  }

 
  if(reviews?.length === 0){
    // console.log(reviews.length);
 return <h2 className='flex justify-center items-center text-3xl font-semibold'>No review were added !!</h2>
  }
  // console.log(reviews?.length);
  return (
    <div  >
       
      <h1 className='text-3xl font-semibold text-center'> Here are my all review</h1>
        <div  className='grid lg:grid-cols-3 gap-4 my-12'>
        {reviews?.map(review =>  <div 
         key={review._id}
        >
        <div className='border-slate-700   p-6 shadow-2xl rounded-lg'>
       
       <FaQuoteLeft  />
        
         <p className='  text-xl'>{review?.review}</p>
         <small>Review of <span className='font-semibold'>{review.titlle}</span></small>

         <div className='flex mt-3'>
         <label    className='btn btn-xs  mr-5'> <Link to={`/update/${review._id}`}>Edit</Link></label>
         {/* <label htmlFor="my-modal-6" onClick={() => setUpdateReview(review)} className='btn btn-xs  mr-5'> Edit</label> */}
         <label htmlFor="confirmation-modal" onClick={() => setDeletingReview(review)}  className='btn btn-xs  '> Delete</label>
         </div>
       </div>
       
    </div>)}
         
        </div>
        {
        deletingReview && 
         
        <ConfimationModal
        title={'Are you sure you want to delete?'}
        message={`If you delete review of  ${deletingReview.titlle}. You can't be undone !!`}
        handleDeleteReview={handleDeleteReview}
        modalData={deletingReview}
        closeModal={closeModal}
        ></ConfimationModal>
       }
       {/* {
        updateReview &&
        <UpdateReview
        title={'Are you sure you want to update your review ?'}
        modalData={updateReview}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
        setDeletingReview={setDeletingReview}
        >
        </UpdateReview>
       } */}
    </div>
  );
};

export default MyReview;