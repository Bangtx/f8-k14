import {createBrowserRouter} from "react-router";
import Employees from '../pages/Employees'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {

    path: '/login',
    element: <>login</>
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