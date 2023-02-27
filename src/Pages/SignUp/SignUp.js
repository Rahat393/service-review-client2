import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
 
const SignUp = () => {
   
  const {createUser, updateUser} =  useContext(AuthContext) 
  const [signUpError, setSignUPError] = useState('')
 
  const navigate = useNavigate()

  const handleSignUp = event => {
    setSignUPError('')
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    createUser( email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      toast.success('User Create Successfully')
      const userInfo = {
         name
      };
      updateUser(userInfo)
          .then(() => {
             
          })
          .then((err) => console.log(err));
      navigate('/')
    })
    .catch(err => {
      console.log(err);
      setSignUPError(err.message)
    })

  }

  return (
    <div>
    <h2 className='text-4xl font-bold text-center'>Sign Up </h2>
    <div className="hero  mb-10 mt-6">
          <div className="hero-content   w-[900px]">
  
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleSignUp}  className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input type="text" name='name' placeholder="your name" className="input input-bordered" required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        <label className="label">
          <a href="#gfdg" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        <label  >
          <p className='text-sm'>Have an account please  <Link to={'/login'} className='text-emerald-600'>Login</Link></p>
        </label>
      </div>
      {signUpError && <p className='text-red-600'>{signUpError}</p>}

      <div className="form-control mt-6">
         <input className='btn btn-primary' type="submit" value="Sign Up" />
      </div>
    </form>
  </div>
</div>
</div>
  </div>
  );
};

export default SignUp;