import React from 'react'
import  "./Footer.css";
import logo from '../../assets/images/eco-logo.png'

import { Container,Row, Col , ListGroup,ListGroupItem} from 'reactstrap';
import{ Link } from "react-router-dom"
const Footer = () => {
  const year = new Date().getFullYear();
  return  <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className="logo">
        <i class="ri-shopping-bag-fill"></i>
            <div>
              <h1 className='text-white'>Ecomerce App</h1>
            </div>
        </div>
        <p className="footer__text mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Eligendi veritatis adipisci dignissimos laboriosam?
        </p>
        </Col>
        <Col lg='3'className='mb-4'md='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categorys</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to="/shope">Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/shope">Modern Sofa</Link> 
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Arm Chir </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Smart watches</Link>
              </ListGroupItem>


            </ListGroup>
          </div>
        </Col>
        <Col lg='2'className='mb-4' md='4'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">usefull Links </h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/shope">Shope </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/cart">cart </Link> 
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/login">login </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">privacy police </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacts</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>+251, Adis Abeba ,Ethiopia</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
                <p>+25142566276</p>              
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
                <p>esumesele@gmail.com</p>              
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col  lg='12'>
          <p className="footer__copyright">Copyright {year} developed 
          by Esuyawukale Mesele. Allright reserved</p>
        </Col>

      </Row>
    </Container>
  </footer>
  
};

export default Footer;