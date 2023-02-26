import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Shope from '../Pages/Shope';
import ProductDetails from '../Pages/ProductDetails';
import Checkout from '../Pages/Checkout';
import ProtecedRoutes from './ProtecedRoutes';

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';

const Routers = () => {
  return( <Routes>
    <Route path='/' element={<Navigate to= 'home' />} />
    <Route path='home' element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='shope' element={<Shope /> }/>
    <Route path='shope/:id' element={<ProductDetails />} />

    <Route path='/*' element={<ProtecedRoutes />} >
      <Route path='checkout' element ={<Checkout /> } />
      <Route path='dashboard' element ={<Dashboard />} />
      <Route path='dashboard/all-products' element ={<AllProducts />} />
      <Route path='dashboard/add-products' element ={<AddProducts />} />
      <Route path='dashboard/users' element ={<Users />} />
    </Route>

    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />

  </Routes>
   );
};

export default Routers;
