import React from 'react'
import { Container,Row,Col ,Form,FormGroup} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from  "../Components/UI/CommonSection";

import { useSelector} from "react-redux"
import  "../styles/checkout.css";
const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const  totalAmount = useSelector(state=> state.cart.totalAmount);
  return <Helmet title="Checkout">
    <CommonSection title="Checkout" />
    <section>
      <Container>
        <Row>
          <Col lg ="8">
            <h6 className="mb-4  fw-bold"> Billing System </h6>
            <Form className='Billinf_info'>
              <FormGroup className="form__group">
                <input type="text" placeholder='Enter your name' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="email" placeholder='Enter your email' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="number" placeholder='Enter your phone number' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Enter your adress' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Enter your city' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Enter your postal code' />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="your Country" />
              </FormGroup>
              
              
              
              </Form> 
          </Col>

          <Col lg="4">
            <div className="checkout__cart">
              <h6>Total Qty: <span>{totalQty}items</span></h6>
              <h6> Sub Total: <span>${totalAmount}</span></h6>
              <h6><span>Shipping: <br /> Free Shipping:</span> <span>0</span></h6>
              <h4>Total Cost: <span>${totalAmount}</span></h4>
              <button className="shope_btn auth_btn w-100">place an order </button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
     
  </Helmet>
  
};

export default Checkout;