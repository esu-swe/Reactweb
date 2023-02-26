import React from 'react'
import "../styles/cart.css";
import Helmet from "../Components/Helmet/Helmet";
import CommonSecton from "../Components/UI/CommonSection"
import { Container,Row, Col } from 'reactstrap';

import { motion} from "framer-motion";
import{ cartActions} from "../redux/slices/cartSlice";
import {  useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector ( state => state.cart.cartItems);
  const totalAmount = useSelector(state =>state.cart.totalAmount );
  return <Helmet title="cart">

    <CommonSecton  title="Shoping cart " />
    <Container className='mt-5'>
      <Row>
        <Col lg="9">
          {
            cartItems.length ===0 ? (<h3 className='fs-4 text-center'>No Items add to cart</h3>): (  
            <table className='table border'>
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {
              cartItems.map((item, index) =>(
                <Tr item ={item} key={index} />
              
              ))
             }
            </tbody>
             
          </table>)

          }
         
          
        </Col>
        <Col lg='3'>
          <div>
            <h6 className='d-flex align-items-center justify-content-between mt-12'>suutotal
            <span className='fs-4 fw-bold'>${totalAmount}</span>
            </h6>
          </div>
          <p className='fs-6 mt-2'>taxis and shiping ill calculte in the checkout </p>
          <div>
          <button className="shope__btn w-100 mt-3"><Link to='/checkout'>CheckOut</Link></button>

            <button className="shope__btn w-100 mt-3"><Link to='/shope'> Continu shopping</Link></button>

          </div>

        </Col>
      </Row>
    </Container>
     
  </Helmet>
};
  const Tr = ({item})=>{
    const dispatch = useDispatch();

    const deleteProducts = ()=>{
      dispatch(cartActions.deleteItem(item.id))
    }
    return   <tr>  
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <td><motion.i whileTab={{scale: 1.2}} onClick={deleteProducts}
    class="ri-delete-bin-line"></motion.i></td>
  </tr>
  
};

export default Cart;