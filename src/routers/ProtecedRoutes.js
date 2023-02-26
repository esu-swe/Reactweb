import React from 'react'
import useAuth from "../customer_hook/useAuth";
import { Navigate } from 'react-router-dom';
import  { Outlet} from "react-router-dom"

const ProtecedRoutes = () => {
    const {currentUser} =  useAuth();
  return  currentUser ? <Outlet />: <Navigate  to="/login" />;
};

export default ProtecedRoutes;