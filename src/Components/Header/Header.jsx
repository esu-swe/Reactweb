import React ,{ useRef,useEffect}from 'react'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from  '../../assets/images/user-icon.png'

import './Header.css'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Container,Row } from 'reactstrap';
import { useSelector } from 'react-redux'

import useAuth from  "../../customer_hook/useAuth"; 
import  {signOut} from "firebase/auth";
import {auth} from  "../../firebase.config";
import { toast } from 'react-toastify'

const nav__links =[
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shope',
    display: 'Shop'
  }, {
    path:'cart',
    display: 'Cart'
  },
]

const Header = () => {
  const  headerRef = useRef(null);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity);
  const profileActionRef = useRef(null);


  const menuRef = useRef(null);
  const navigate = useNavigate();


  const {currentUser} = useAuth()


  const stickyHeaderFunc = () =>{
    window.addEventListener(`scroll`,()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add('stick__header');
      }else{
        headerRef.current.classList.remove('stick__header');

      }
    });
  };

  const logout = ()=>{
    signOut(auth).then(()=>{
      toast.success('logout');
      navigate("/home");
    }).catch(err=>{
      toast.error(err.message);

    });
  };

  useEffect(()=>{
    stickyHeaderFunc ();

    return () => window.removeEventListener('scroll',stickyHeaderFunc);

  });
  const menuToggle = () => menuRef.current.classList.toggle('active_menu');
  const navigatToCart = () => {
    navigate('/Cart');

  };
  const  toggleProfile = () =>
   profileActionRef.current.classList.toggle('profile_actions');


  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav_wrapper'>
          <div className="logo">
          <i class="ri-shopping-cart-2-line"></i>
            <div>
              <h1>Ecom App</h1>
            </div>
          </div>
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              
                {nav__links.map((item, index) => (
                <li className='nav__item' key={index}>
                  <NavLink to={item.path} className={(navClss)=>
                  navClss.isActive ? "nav__active" : ""
                  }>
                    {item.display}</NavLink>
                    </li>))
              }
            </ul>
          </div>
          <div className="nav_icons">
            <span className='fav__icon'>
              <i class="ri-heart-3-line"></i>
              <span className='badge'>1</span>
              </span>
            <span className='cart__icon' onClick={navigatToCart}>
              <i class="ri-shopping-bag-fill"></i>
              <span className='badge'>{totalQuantity}</span>
              </span>
            <div className='profile'><motion.img whileTap={{scale: 1.2}} 
            src={currentUser? currentUser.photoURL:userIcon} alt="" 
            onClick={toggleProfile} />

            <div className="profile_actions" ref={profileActionRef} 
            onClick={toggleProfile}> 
              {
                currentUser ? ( 
                <span onClick={logout}>logout</span>) :
                 (
                <div className='d-flex align-items-center justify-content-center flex-column'> 
                  <Link to="/signup">signup</Link>
                  <Link to="/login">login</Link>
                  <Link to="/dashboard">Dashboard</Link>

                </div>) 
              }
            </div>
            </div>
            <div className='mobile_menu'>
               <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
               </span>
             </div>
       </div>
    </div>
   </Row>
    </Container>
     
  </header>
};

export default Header;