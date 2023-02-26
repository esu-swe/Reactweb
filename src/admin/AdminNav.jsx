import React from 'react'
import { Container,Row,  } from 'reactstrap';
import useAuth from "../customer_hook/useAuth";
import { NavLink } from 'react-router-dom';

import "../styles/adminNav.css";
const admin_nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'All-products',
        path: 'dashboard/all-products'
    }, {
        display: 'Orders',
        path: '/dashboard/orders'
    }, {
        display: 'Users',
        path: '/dashboard/users'
    },
]

const AdminNav = () => {

    const {currentUser} = useAuth();
  return<> <header className='admin_header'>
    <div className="admin_nav-top">
    <Container>
    <div className='admin_nav-wrapper-top'>
        <div className="logo">
            <h2>Admin page</h2>
        </div>
        <div className="search_box">
            <input type="text" placeholder='search.....' />
            <span><i class="ri-search-2-line"></i></span>
        </div>
        <div className="admin_nav-top-right">
            <span><i class="ri-notification-3-line"></i></span>
            <span><i class="ri-settings-2-line"></i></span>
             <img src= {currentUser && currentUser.photoURL } alt="" /> 
        </div>
    </div>
  </Container>
    </div>
  </header>
  <section className="admin_menu p-0">
    <Container>
        <Row>
            <div className="admin_navigation">
                <ul className="admin_menulist">
                    {
                        admin_nav.map((item, index) =>(
                            <li className="admin_menu_item" key={index}>
                                <NavLink to={item.path} className={navClass =>
                                     navClass.isActive ? 'active__admin-menu' : ''}> 
                                     { item.display}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Row>
    </Container>
  </section>
  </>
};

export default AdminNav;