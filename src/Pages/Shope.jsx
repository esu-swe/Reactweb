import React ,{ useState}from 'react'
import CommonSection from '../Components/UI/CommonSection';
import Helmet from "../Components/Helmet/Helmet"
import { Container,Row, Col } from 'reactstrap';

import "../styles/Shope.css";
// import products from '../assets/data/products';
import ProductsList from "../Components/UI/ProductsList"
import useGetData from "../customer_hook/UseGetData";


const Shope = () => {
  // const [productsData,setProductsData] = useState(products);
  const {data: products,loading} = useGetData('products');


  const handelFilter = e => {
    const filterValue = e.target.value;
    if(filterValue==='sofa'){
      const filteredProducts = products.filter(
        (item) =>item.category === 'sofa'
      );
      products(filteredProducts);
    }
    if(filterValue ==='mobile'){
      const filteredProducts = products.filter(
        (item) =>item.category === 'mobile'
     );
     products(filteredProducts);

    }

    if(filterValue==='chair'){
      const filteredProducts = products.filter(
        (item) =>item.category === 'chair'
      );
      products(filteredProducts);
    }
    if(filterValue==='wireless'){
      const filteredProducts = products.filter(
        (item) =>item.category === 'wireless'
      );
      products(filteredProducts);
    }
    
    if(filterValue==='watch'){
      const filteredProducts = products.filter(
        (item) =>item.category === 'watch'
      );
      products(filteredProducts);
    }
    

  };
  const handelSearch = e => {
    const searchTern = e.target.value;

    const searchedProducts = products.filter(item => 
      item.productName.toLowerCase().includes(searchTern.toLowerCase()));
      products(searchedProducts);
  }

  return <Helmet  title='shope'>
    <CommonSection title='products'/>
   <section>
   <Container>
      <Row>
        <Col lg='3'md='6'>
          <div className="filter_widget">
            <select onChange={handelFilter}>
              <option>Filter By Category</option>
              <option value="sofa">sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wirrless</option>
              </select>
          </div>
        </Col>
        <Col lg='3'md='6'className='text-end'>
        <div className="filter_widget">
            <select>
              <option>Sort By </option>
              <option value="asscending">Asscending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </Col>
        <Col lg='6'md='12'>
          <div className="search__box">
            <input placeholder='search here' onChange={handelSearch}/>
            <span><i class="ri-search-line"></i></span>
          </div>
        </Col>

      </Row>
    </Container> 
   </section>
   <section className='pt-0'>
    <Container>
      <Row>
        {
          products.length === 0? 
          (<h1 className='text-center fs-4'>No products are found</h1>):
          (
          <ProductsList data={products} /> )
        }
      </Row>
    </Container>
   </section>
     
  </Helmet>
};

export default Shope;
  