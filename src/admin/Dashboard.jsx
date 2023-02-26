import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import "../styles/dashboard.css";
import  useGetData from  "../customer_hook/UseGetData"

const Dashboard = () => {
  const {data: products}= useGetData('products')
  const {data: users}= useGetData('users')
  return (<>
  <section>
    <Container>
      <Row>
      <Col className="lg-3">
        <div className="revanu_box">
          <h5>Totale Sales</h5>
          <span>$675</span>
        </div>
      </Col>
      <Col className="lg-3">
      <div className="Order_box">
          <h5>Totale Order</h5>
          <span>75</span>
        </div>
      </Col>
      <Col className="lg-3">
      <div className="Products_box">
          <h5>Total products</h5>
          <span>{products.length}</span>
        </div>
      </Col>
      <Col className="lg-3">
      <div className="user_box">
          <h5>Totale user</h5>
          <span>{users.length}</span>
        </div>
      </Col>
      </Row>
    </Container>
  </section>


  
  </>
   
  )
}

export default Dashboard