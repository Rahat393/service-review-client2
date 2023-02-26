import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewProvide = ({titlle}) => {
  const {user} = useContext(AuthContext)
  if (!user?.uid) {
    return <p className='my-5 text-2xl'>Please <Link className='text-sky-400 text-2xl' to={'/login'}>LogIn</Link> to add review!!</p>
      }
  return (
    <div>
      
      <div className='mt-10'>
      { user?.uid &&
        <>
        <h2 className='text-3xl font-semibold mb-3'> Please Share Your Review</h2>
      <div className='justify-center'>
      <textarea name='review' className="textarea textarea-accent w-2/4 h-28" placeholder="Enter your Review" required></textarea>
      <input className='btn block btn-success text-white w-2/4' type="submit" value="Add Review" />                
      </div>
        </>
      }
    </div>
    </div>
  );
};

export default ReviewProvide;