import React,{ useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion }  from "framer-motion"
// import products from "../assets/data/products";
import Clock from '../Components/UI/Clock';

import Helmet from "../Components/Helmet/Helmet";
import '../styles/Home.css'
import { Container,Row ,Col } from 'reactstrap';
import heroImg from  '../assets/images/hero-img.png';
import Services from '../services/Services';
// import ProductsCard from '../Components/UI/ProductsCard';
import ProductsList from '../Components/UI/ProductsList';

import counterImg from "../assets/images/counter-timer-img.png";
import useGetData from "../customer_hook/UseGetData";


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const {data: products,loading} = useGetData('products');

  const year = new  Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category ==="chair");

    const filteredMobileProducts = products.filter(
        (item) => item.category ==="mobile");
    const filteredBestSalesProducts = products.filter(
    (item) => item.category ==="sofa");
    const filteredWirelessProducts = products.filter(
            (item) => item.category ==="wireless");
     const filteredPopularProducts = products.filter(
              (item) => item.category ==="watch");
      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);


  },[products]);

  return <Helmet title={"Home"}>
    <section className='hero_section'> 
    <Container>
      <Row>
        <Col lo='6' md='6'>
          <div className="hero__content">
          <p className="hero__subtitle">Treading product in   {year}</p>
          <h2>well come to our website</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Tempora non voluptates repellendus quaerat laborum molestiae
              provident vero blanditiis, quidem voluptatem harum 
            quibusdam eaque, molestias unde ipsam hic sapiente dolor qui!</p>
            <motion.button whileTap={{ scale: 1.5 }} className='shope__btn'>
              <Link to='/shope'> SHOP NOW</Link></motion.button>
         </div>
       </Col>
       <Col lg='6' md='6'>
        <div className="hero__img">
          <img src={heroImg} alt="hero" />
        </div>
       </Col>
      </Row>
   </Container>
</section>
< Services />
<section className="product_itme">
  <Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section_title'>Treading products</h2>
      </Col>
      {
        loading ? <h6>Loading .......</h6>:
        <ProductsList  data={trendingProducts}/>
      }
    </Row>
  </Container>
</section>
<section className="best_salse">
  <Container>
    <Row>
    <Col lg='12' className='text-center'>
        <h2 className='section_title'>Best salse</h2>
      </Col>
      {
        loading ? <h6>Loading .......</h6>:
        <ProductsList  data={bestSalesProducts}/>
      }
      {/* <ProductsList  data={bestSalesProducts}/> */}
    </Row>
  </Container>
</section>
<section className="timer__count">
  <Container>
    <Row>
      <Col lg='6' md='12' className='count_down'>
        <div className="clock__top-content">
          <h4 className='text-white fs-6 mb-2'>Limited offer</h4>
          <h3 className='text-white fs-5 mb-3'>Qoulity armchir</h3>
        </div>
        <Clock />
        <motion.button whileTap={{scale:1.2}} className="shope__btn stor__btn">
          <Link to="/shope"> Vist story</Link>
        </motion.button>
      </Col>
      <Col lg='6' md='12' className='text-end counter_img'>
        <img src={counterImg} alt="" />
      </Col>

    </Row>
  </Container>
</section>
<section className="new__arrivals">
  <Container>
    <Row>
    <Col lg='12' className='text-center mb-5'>
        <h2 className='section_title'>New  Arivals</h2>
      </Col>
      {
        loading ? <h6>Loading .......</h6>:
        <ProductsList  data={mobileProducts}/>
      }
      {/* <ProductsList  data={mobileProducts}/>
      <ProductsList  data={wirelessProducts}/> */}
      {
        loading ? <h6>Loading .......</h6>:
        <ProductsList  data={wirelessProducts}/>
      }



    </Row>
  </Container>

</section>
<section className="popular__category">
<Container>
    <Row>
    <Col lg='12' className='text-center mb-5'>
        <h2 className='section_title'>populat in category  </h2>
      </Col>
      {
        loading ? <h6>Loading .......</h6>:
        <ProductsList  data={popularProducts}/>
      }
      {/* <ProductsList  data={popularProducts}/> */}

    </Row>
  </Container>


</section>
  </Helmet> ;
};

export default Home;
