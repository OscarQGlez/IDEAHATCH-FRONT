import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'

import SignUpArea from '../Components/SignUpArea/SignUpArea'
import SignInSide from  '../Components/Login/login1'
import Layaout from '../Layaout/Layaout'
import Checkout from '../pages/StartNewProject/StartNewProject'
const router = createBrowserRouter([
 {
    path: "/",
    element: <Layaout/>,
    /* errorElement: <NotFound />, */

    children: [
      { path: "/", element: <Home/> },
      { path: "/signup", element: <SignUpArea/> },
      { path: "/login", element: <SignInSide/>, },
      { path: "/startproject", element: <Checkout/>, },
    
    ],
  },
  
])

export default router