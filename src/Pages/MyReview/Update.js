import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const storedReview = useLoaderData()
  const [review, setReview] = useState(storedReview);

  const handleUpdate = event =>{
    event.preventDefault()
    fetch(`http://localhost:5000/review/${review._id}`, {
      method: 'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log( 'data ', data);
       if(data.modifiedCount > 0){
        toast.success('Review update successfully')
        // refetch()
       }
    })
  }

  const handleInputChange = event =>{
    const field = event.target.name;
    const value = event.target.value;
    const newReview = {...review};
    newReview[field] = value;
    setReview(newReview)
  }
   
  return (
    <div>
     <p className='text-2xl font-semibold my-4'> Update Review of {storedReview.titlle}</p>
     <form  onSubmit={handleUpdate}>
      <input onChange={handleInputChange} defaultValue={storedReview.review} type="text" name='review' placeholder='review' className='border-gray-400 border-[1px] rounded-md p-3 text-xl' />
      <br />
      <button className='btn btn-primary btn-sm mt-2  ' type='submit'>Update</button>
     </form>
    </div>
  );
};

export default Update;