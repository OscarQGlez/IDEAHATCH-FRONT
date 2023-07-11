import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../layaout/Dashboard'
import SignUpArea from '../Components/SignUpArea/SignUpArea'
import SignInSide from  '../Components/Login/login'

const router = createBrowserRouter([
 {
    path: "/",
    element: <Dashboard/>,
    /* errorElement: <NotFound />, */

    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUpArea /> },
      {
        path: "/login",
        element: <SignInSide />,

      },
    
    ],
  },
  
])

export default router