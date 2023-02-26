import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const LogIn = () => {
  const {signIn} = useContext(AuthContext)
  const [loginError, SetLoginError] = useState('')
 const navigate = useNavigate()

  const handleLogIn = event => {
    SetLoginError('')
    event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => {
              SetLoginError(err.message)
            })
  }
  return (
    <div>
      <h2 className='text-4xl font-bold text-center'>Log In </h2>
      <div className="hero  mb-10 mt-6">
  <div className="hero-content  w-2/3">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#gfdg" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label  >
            <p className='text-sm'>New to this site please  <Link to={'/signup'} className='text-emerald-600'>Create a New Account</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
        {loginError && <p className='text-red-600'>{loginError}</p>}

        <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default LogIn;