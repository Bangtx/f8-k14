import {createBrowserRouter} from "react-router";
import Employees from '../pages/Employees'
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {

    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: "/employees",
    element: <Employees/>,
  },
]);

export default router