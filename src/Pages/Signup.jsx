import React,{useState} from 'react'

import { Container,Row,Col ,Form,FormGroup} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet'
 import { Link } from 'react-router-dom';
 import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
 import { auth } from "../firebase.config";

 
 import{ setDoc, doc} from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

import { storage } from '../firebase.config';
import  { db} from  "../firebase.config";


import { toast,  } from 'react-toastify';
 import "../styles/Login.css";
//  import {async} from '@firebase/util'
 import  {useNavigate} from "react-router-dom"
const Signup = () => {

  const [ username,setUsername] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("null");
  const [ loading , setLoading] = useState(false);

  const navigate = useNavigate( )

  const signup = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try{
      const userCridential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCridential.user;
      console.log(user);

     const storageRef = ref(storage, `images/${Date.now()+  username}`);
     const uploadTask = uploadBytesResumable(storageRef,file)
     

     uploadTask.on ((error)=>{
      toast.error(error.message);
     }, ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
         await updateProfile(user,{
          displayName:username,
          photoURL:downloadURL,
        });
        //storage use in firebase
        await  setDoc(doc(db, 'users', user.uid),{
          uid:user.uid, 
          displayName:username,
          email,
          photoURL:downloadURL,

        });
      });
     });

     
setLoading(false);
toast.success("Accounte Created successfully");
navigate("/login")
    }
    catch(error){
      setLoading(true);
      toast.success("some thing went wrong");
    }
  };

  return <Helmet title="Signup">
    <section>
      <Container>
        <Row>
         {
          loading? (<col lg="12" className='text-center'>
            <h5 className='fw-bold'>Loading....</h5></col>):
            ( <Col lg="6" className='m-auto text-center'>
            <h3 className="fw-bold mt-4">Signup</h3>
            <Form className='auth__form' onSubmit={signup}>
            <FormGroup className='form__group'>
                <input type="text" placeholder='Username'  
                value={username} onChange = {e=> setUsername(e.target.value)}
                />
              </FormGroup>
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
              <FormGroup className='form__group'>
                <input type="file" 
                onChange = {e=> setFile(e.target.files[0])}
                />
              </FormGroup>
              <button type='submit' className='shope__btn auth__btn'>Cearte Account</button>
              <p>Already have an account ? {" "}
                <Link to="/login">login</Link>
              </p>
            </Form>
          </Col>)
         }
        </Row>
      </Container>
    </section>
  </Helmet>
  
};

export default Signup;