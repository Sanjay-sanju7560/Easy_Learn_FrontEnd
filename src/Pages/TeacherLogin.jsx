import React, { useState } from 'react'
import {  Button,Form, } from 'react-bootstrap'
import Headers from '../Components/Headers'
import { useNavigate } from 'react-router-dom'
import {teacherAPI} from "../Services/allAPIs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TeacherLogin() {

const navigate = useNavigate()
  const [userData,setUserData] = useState({
    fullname:"",email:"",number:"",password:""
})

const handleRegister = async (e)=>{
  e.preventDefault()
  console.log(userData);
  const {fullname,email,number,password} = userData
  if(!fullname || !email || !number || !password){
    toast.info('Please fill the form completly!!')
  }else{
    // toast.succes('Proceed to call api ')
    try{
      const result = await teacherAPI(userData)
      console.log(result);
      if(result.status === 200){
        toast.success(`${result.data.fullname} has registered successfully !!!`)
        setUserData({fullname:"",email:"",number:"",password:""})

        setTimeout(() => {

          navigate('/teacherLogin')
        }, 3000);
      }
      else{
       toast.warning(result)
      }
    // }catch(err){
    //   console.log(err);
    // }
    }catch (err) {
  if(!err.data?.message) {
    console.log("Server error please try later!")
  }
}
  }
}

  return (
    <>
    <Headers/>
    <div width="40%" style={{backgroundColor:'#f2f2f2', height:'390px',margin:'230px',marginTop:'30px',borderRadius:'10px'}}>
                <p style={{margin:'20px',fontWeight:'bold',fontSize:'18px'}} className='ms-5 '><br />Register as Teacher</p>
            <Form className='w-100 ' >
             
                    <Form.Group  id="forInpCol" className="mb-3" controlId="formBasicName">Fullname<br /> 
                      <Form.Control /* id="forInpCol2" */  type="text" placeholder="What is your name?"
                      style={{ margin:'2x',width:'50%' }}  onChange={e=>setUserData({...userData,fullname:e.target.value})} value={userData.fullname}/>
                    </Form.Group>
                  
                  <Form.Group id="forInpCol" className="mb-3" controlId="formBasicEmail">Email ID<br />
                    <Form.Control /* id="forInpCol2" */  type="email" placeholder="Tell us your Email ID"
                    style={{ margin:'2x',width:'50%' }}  onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}/>
                  </Form.Group>

                  <Form.Group id="forInpCol" className="mb-3" controlId="formBasicNumber">Mobile Number<br />
                    <Form.Control /* id="forInpCol2" */  type="text" placeholder="Tell us your Mobile number"
                    style={{ margin:'2x',width:'50%' }}  onChange={e=>setUserData({...userData,number:e.target.value})} value={userData.number}/>
                  </Form.Group>

                  <Form.Group id="forInpCol" className="mb-3" controlId="formBasicPassword">Password<br />
                    <Form.Control /* id="forInpCol2" */  type="password" placeholder="Create a password for your account"
                    style={{ margin:'2x',width:'50%' }}  onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}/>
                  </Form.Group>

                  <Button className='btn btn-dark mb-2'  style={{border:'3px',background:'#80d4ff',margin:'20px',marginLeft:'300px',padding:'8px',fontSize:'15px',borderRadius:'15px'}}
                  onClick={handleRegister}>Register</Button>
                </Form>
                
            </div>
   </>
  )
}

export default TeacherLogin