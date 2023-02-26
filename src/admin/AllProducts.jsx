import React from 'react'
import { Container,Row, Col } from "reactstrap";
import useGetData from '../customer_hook/UseGetData';
import { db } from "../firebase.config"
import { doc, deleteDoc} from "firebase/firestore";
import  { toast} from  "react-toastify"

const AllProducts = () => {
  const  {data: productsData,loading} = useGetData('products')

  const deleteProduct = async(id)=>{
    await deleteDoc( doc(db,"products" , id))
    toast.success("Product deleted Succesfuly !!")
  }
  return (
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <table className="table">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>price</th>
              <th>Action</th>
            </tr>
            <tbody>
                {
                  loading ?
                  <h3 className='py-5'>Loading.......</h3> : (
                    
                      productsData.map(item =>(
                        <tr key={item.id}>
                      <td><img src={item.imgUrl} alt="" /></td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td><button onClick={() =>{deleteProduct(item.id);}} className='btn btn-danger'>Delete</button></td>
                    </tr> 
                      ))
                  )
                }
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default AllProducts