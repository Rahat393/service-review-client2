import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() => { })
     .catch(err => console.log(err))
}
  // console.log( 'nnn',user);
  const navMenu = <>
      <li><Link to={'/'}>Home</Link></li>
      { user?.uid ?
        <>
        <li><Link to={'/myreview'}>My Review</Link></li>
        <li><Link to={'/addsevice'}>Add Service</Link></li>
        <li><button onClick={handleLogOut}>Sign Out</button></li>
        </>
      :
        <li><Link to={'/login'}>SignIn</Link></li>}
  </>
  return (
    <div>
      <div className="navbar flex justify-between bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-3xl font-semibold text-primary">Polaraid</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navMenu}
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navbar;