import React,{useState} from 'react'

import { Container,Row,Col ,Form,FormGroup} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet'
// import CommonSection from  "../Components/UI/CommonSection";
 import { Link, useNavigate } from 'react-router-dom';
  import {signInWithEmailAndPassword} from "firebase/auth";
  import {auth} from "../firebase.config";
  import { toast } from 'react-toastify';

 import "../styles/Login.css";
 const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const signIn = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try{
      const userCrednetial =await signInWithEmailAndPassword(auth,email,password);
      const user = userCrednetial.user
      console.log(user);
      setLoading(false);
      toast.success("lsuccessfully logged in");
      navigate("/heckout");

    }catch (error){
      setLoading(false);
      toast.error(error.message);

    }
  }

  return <Helmet title="Login">
    <section>
      <Container>
        <Row>
          {
             loading? (<col lg="12" className='text-center'>
             <h6 className='fw-bold'>Loading....</h6></col>):
             (
              <Col lg="6" className='m-auto text-center'>
              <h3 className="fw-bold mt-4">Login</h3>
              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Eenter Your email' 
                  value={email} onChange = {e=> setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Eenter Your password'
                  value={password} onChange = {e=> setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type='submit' className='shope__btn auth__btn'>Login</button>
                <p>Don't have an account ? {" "}
                  <Link to="/signup">Create account</Link>
                </p>
              </Form>
            </Col>
             )
          }
         
        </Row>
      </Container>
    </section>
  </Helmet>
  
};

export default Login;