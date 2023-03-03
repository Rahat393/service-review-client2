import React from 'react';

const ConfimationModal = ({title, message, handleDeleteReview, modalData, closeModal}) => {
  // console.log(modalData);
  return (
    <div>
      <div>
 
 <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
 <div className="modal">
   <div className="modal-box">
     <h3 className="font-bold text-lg"> {title}</h3>
     <p className="py-4 ">{message}</p>
     <div className="modal-action">
       <label onClick={ () => handleDeleteReview(modalData)} htmlFor="confirmation-modal" className="btn btn-primary btn-sm">Delete</label>
       <button onClick={closeModal} className='btn btn-sm btn-outline '>Cancel</button>
     </div>
 
   </div>
 </div>
     </div>
    </div>
  );
};

export default ConfimationModal;