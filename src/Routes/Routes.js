import { createBrowserRouter } from "react-router-dom";
 import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path:'/login',
        element:  <LogIn></LogIn>
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      }
    ]
  }
])