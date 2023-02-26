import React,{useState , useRef,useEffect} from 'react'
import { Container,Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
// import products from '../assets/data/products';
import Helmet from "../Components/Helmet/Helmet"
import CommonSection from '../Components/UI/CommonSection';
import "../styles/product-details.css";
import {motion} from "framer-motion";
import ProductsList from "../Components/UI/ProductsList"
import { useDispatch } from 'react-redux';
import{ cartActions}  from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import {db} from '../firebase.config'
import {doc, getDoc} from  "firebase/firestore";
import useGetData from '../customer_hook/UseGetData';
 
const ProductDetails = () => {
  const [product, setProduct]= useState({})
  const {id} =useParams();

  const {data: products} = useGetData('products')

  const  reviewUser = useRef("");
  const reviewMsg =useRef("");
  const dispatch = useDispatch();

 
  const [tab,setTab] = useState('Desc');
  const [rating, setRating] =  useState(null);

  // const product = products.find(item => item.id ===id);
const docRef = doc(db, 'products', id)

useEffect(()=>{
  const getProduct = async()=>{
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      setProduct(docSnap.data())
    }else{
      console.log('no product')
    }
  }
  getProduct()
},[])

  const {imgUrl, 
    productName ,
     price,
    //  avgRating,
    //   reviews,
      description,
      shortDesc,
      category} = product
   const relatedProducts = products.filter(item => item.category===category);

   const  submitHandler = (e)=>{
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName:reviewUserName,
      text:reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success('review submit')
   };
   const  addToCart = ()=>{

    dispatch(cartActions.addItem({
      id,
      Image:imgUrl,
      productName,
      price
    }));
    toast.success('product add successfully')
   };
    useEffect(()=>{
      window.scrollTo(0,0);
    }, [product]);

   return <Helmet title={productName}>
    <CommonSection title={productName} />
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={ imgUrl} alt="" />
          </Col>

          <Col lg='6'>
            <div className="product_detail">
              <h2>{productName}</h2>
              <div className="product_rating d-flex align-items-center gap-5 mb-4">
                <div className="">
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-half-fill"></i></span>

                </div>
                {/* <p>(<span>{ avgRating}</span> ratings)</p> */}
              </div>
              <div cla5ssName='d-flex align-items-center gap-'>
            <span className='product_price'>${price}</span>
            <span>Category: {category}</span>

            </div>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button  whileTap={{scale: 1.2}} className="shope__btn" onClick={addToCart}>Add To Cart</motion.button>
            </div>
            
          </Col>

        </Row>
      </Container>
    </section>
    <section>
      <Container>
      <Row>
        <Col lg='12'>
          <div className="tab_wrapper d-flex align-items-center gap-5">
            <h6 className={`${tab==='desc' ? 
            'active_tab' : ""}`} onClick={()=>setTab('desc')}>Descrption</h6>
            <h6 className={`${tab==='rev' ? 'active_tab' : ""}`} 
             onClick={()=>setTab('rev')}>
              Reviews
              </h6>
          </div>

            {
              
              tab ==='desc' ? (<div className="tab_content mt-5">
              <p>{description}</p>
            </div> ): (<div className='product-reviws mt-5'>
              <div className="reviwes_wrapper">
                {/* <ul>
                  {
                    reviews?.map((item, index) => (
                      <li kew={index} className= "mb-4">
                        <h6>Esu</h6>
                        <span>{item.rating} (average rating)</span>
                       <p>{item.text}</p>
                      </li>
                    ))
                  }
                </ul> */}
                <div className="reviwes_form">
                  <h4>Leave your experience</h4>
                  <form action=''  onSubmit={submitHandler}>
                    <div className="form_group">
                      <input type="text" placeholder='Enter Your name' ref={reviewUser} required/>
                    </div>
                    <div className="form_group d-flex align-item-center gap-5 rating_group ">
                      <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}>1<i class="ri-star-half-s-fill"></i></motion.span>
                      <motion.span  whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-half-s-fill"></i></motion.span>
                      <motion.span   whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-half-s-fill"></i></motion.span>
                      <motion.span   whileTap={{scale:1.2}} onClick={()=> setRating(2)}>3<i class="ri-star-half-s-fill"></i></motion.span>
                      <motion.span  whileTap={{scale:1.2}}  onClick={()=> setRating(2)}>4<i class="ri-star-half-s-fill"></i></motion.span>
                      <motion.span  whileTap={{scale:1.2}}  onClick={()=> setRating(3)}>5<i class="ri-star-half-s-fill"></i></motion.span>
                      

                    </div>
                    <div className="form_group">
                      <textarea  ref={reviewMsg} rows={4} type="text" placeholder='Enter reviews message' required />
                    </div>  
                    <motion.button  whileTap={{scale:1.2}} className="shope__btn" type='submit' >submit</motion.button>
                  </form>
                </div>
              </div>
            </div>)
            }
          
        </Col>
        <Col lg='12' className='mt-5'>
          <h2 className="reiated_title">you might also like</h2>
        </Col>
        <ProductsList data={relatedProducts} />
      </Row>
      </Container>
    </section>

  </Helmet>
  
};

export default ProductDetails;
