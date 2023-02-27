import { createBrowserRouter } from "react-router-dom";
 import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyReview from "../Pages/MyReview/MyReview";
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
        path:'/myreview',
        element:  <MyReview></MyReview>
      },
      {
        path:'/addsevice',
        element:  <AddService></AddService>
      },
      {
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      }
    ]
  }
])