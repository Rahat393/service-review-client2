import React from 'react';

const UpdateReview = ({title, handleUpdate, modalData, closeModal, setDeletingReview}) => {
  // console.log(modalData?.review);
  const {review} = modalData

  const handleInputChange = event =>{
    const field = event.target.review;
    const value = event.target.value;
    const newUser = {...review}
    newUser[field] = value;
    setDeletingReview(newUser);
}
  return (
    <div>
      <div className='h-96'>
 
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<form onSubmit={() => handleUpdate(modalData)} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> {title}</h3>
    <input onChange={handleInputChange}  defaultValue={review} type='text' name='review'  className="textarea textarea-accent" placeholder="update review"/>   
     <div className="modal-action">
     <label onClick={ () => closeModal} htmlFor="my-modal-6" className="btn btn-primary btn-sm">Cancel</label>
     <button type='submit'      htmlFor="my-modal-6" className="btn btn-primary btn-sm">Update</button>

    </div>
  </div>
</form>
     </div>
    </div>
  );
};

export default UpdateReview;