import React, {useState} from 'react'
import { Container,Row, Col,Form,FormGroup, } from "reactstrap";
import { toast } from 'react-toastify';
import  {db,storage} from  "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection , addDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom"

const AddProducts = () => {
    const [enterTitle, setEnterTitle] =  useState("")
    const [enterShortDesc, setEnterShortDesc] =  useState("")
    const [enterDescrption, setEnterDescrption] =  useState("")
    const [enterCategory, setEnterCategory] =  useState("")
    const [enterPrice, setEnterPrice] =  useState("")
    const [enterProductImg, setEnterProductImg] =  useState("null")
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate()

    const addPrduct = async(e) => {
        e.preventDefault()
        
        // const product = {
        //     title : enterTitle,
        //     shortDesc: enterShortDesc,
        //     describtion : enterDescrption,
        //     category : enterCategory,
        //     price : enterPrice,
        //     imgUrl : enterProductImg
        // }

        try {
        const docRef = await collection(db,'products')

        const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
        const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

        uploadTask.on(()=>{
            toast.error('image is not uploade')
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                await addDoc(docRef,
                    {
                        productName : enterTitle,
                        shortDesc: enterShortDesc,
                        describtion : enterDescrption,
                        category : enterCategory,
                        price : enterPrice,
                        imgUrl : downloadURL,
                    }
                    )
            })


        })
        toast.success("product added successfully");
        navigate('/dashboard/all-products');


        }catch(error){
            setLoading(false);
            toast.error("product not added")

        }
       
        
    }


  return  <section>
    <Container>
        <Row>
            <Col lg="12">
               {
                loading ? <h4 className="py-5">Loading.......</h4> : <>
                 <h4 className='mb-5'>Add product</h4>
                <Form onSubmit={addPrduct}>
                    <FormGroup className='form_group'>
                        <span>Product title</span>
                        <input type="text" placeholder='Double sofa' 
                        value={enterTitle} onChange= {e=> setEnterTitle(e.target.value)} required />
                    </FormGroup>
                    <FormGroup className='form_group'>
                        <span>Short Dsc </span>
                        <input type="text" placeholder='lorm.... '
                        value={enterShortDesc} onChange= {e=> setEnterShortDesc(e.target.value)} required />
                    </FormGroup>
                    <FormGroup className='form_group'>
                        <span>Descrption </span>
                        <input type="text" placeholder='Double sofa' 
                        value={enterDescrption} onChange= {e=> setEnterDescrption(e.target.value)} required />
                    </FormGroup>
                    <div className='d-flex align-items-center 
                    justify-content-between gap-5'>
                    <FormGroup className='form_group w-50 '>
                        <span>price</span>
                        <input type="number" placeholder='$100 ' 
                        value={enterPrice} onChange= {e=> setEnterPrice(e.target.value)} required />
                    </FormGroup>
                    <FormGroup className='form_group w-50'>
                        <span>Category </span>
                        <select className=' w-100 p-2' value={enterCategory} onChange= 
                        {e=> setEnterCategory(e.target.value)}  required>
                            <option>select Category</option>
                            <option value= "chair">Chair</option>
                            <option value= "sofa">Sofa</option>
                            <option value= "wireless">Wireless</option>
                            <option value= "mobile">Mobile</option>
                            <option value= "watch">Watch</option>

                        </select>
                    </FormGroup>
                    </div>
                    <div>
                    <FormGroup className='form_group'>
                        <span>Product image</span>
                        <input type="file" onChange={e=> setEnterProductImg(e.target.files[0])}  required />
                    </FormGroup>
                    </div>
                    <button className="shope__btn" type='submit'>Add Product</button>
                </Form>
                </>
               }
            </Col>
        </Row>
    </Container>
  </section>
};

export default AddProducts;