import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../Layaout/Layaout'
import SignUpArea from '../Components/SignUpArea/SignUpArea'
import SignInSide from  '../Components/Login/login1'
import Layaout from '../Layaout/Layaout'

const router = createBrowserRouter([
 {
    path: "/",
    element: <Layaout/>,
    /* errorElement: <NotFound />, */

    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUpArea /> },
      { path: "/login", element: <SignInSide />, },
    
    ],
  },
  
])

export default router