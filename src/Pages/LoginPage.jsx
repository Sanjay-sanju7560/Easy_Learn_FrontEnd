import React, { useState } from 'react'
import {  Button, Form} from 'react-bootstrap'
import Headers from '../Components/Headers'
import { useNavigate } from 'react-router-dom'
import { loginAPI } from '../Services/allAPIs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const navigate =useNavigate()
  const [loginStatus,setLoginStatus]=useState(false)

  const [userData,setUserData] = useState({
    username:"",email:"",password:""
})

const handleLogin = async (e)=>{
  e.preventDefault()
  console.log(userData);
  const {email,password} = userData
  if(!email || !password){
    toast.info('Please fill the form completly!!')
  }

else{
  // toast.succes('Proceed to call api ')
  try{
    const result = await loginAPI({email,password})
    console.log(result);
    if(result.status == 200){
      setLoginStatus(true)
      // sessionStorage.setItem("username",result.data.existingUser.username)
      // sessionStorage.setItem("token",result.data.token)
      // sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
      setUserData({email:"",password:""})
      toast.info('Loged in Successfuly!!')
      setTimeout(() => {
        navigate('/')
        setLoginStatus(false)
      }, 2000);
    }
    else{
     toast.warning(result.response.data)
    }
  }catch(err){
    console.log(err);
  }
}}

return (

    <>
    <Headers/>
    <div width="60%" style={{ backgroundColor: '#f2f2f2', height: '350px',width:'500px', margin: '230px', marginTop: '30px', borderRadius: '10px' }}>
        <p style={{ margin: '20px', fontWeight: 'bold', fontSize: '18px' }} className='ms-5 '><br />Learn at the comfort of your own home</p>
        <Form action="POST" className='w-100' >

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicEmail"> Email ID  <br />
            <Form.Control /*id="email"*/ type="email" placeholder="Tell us your Email ID" 
            onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}
             style={{ margin:'2x',width:'90%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicPassword"> Password  <br />
            <Form.Control /*id="password"*/ type="password" placeholder="Create a password for your account"
            onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}              style={{ margin:'2x',width:'90%' }}/>
          </Form.Group>
          <Button className='btn btn-dark mb-2' style={{ border: '3px', background: '#80d4ff', margin: '20px', marginLeft: '35px', padding: '5px', fontSize: '15px', borderRadius: '15px' }} 
            onClick={handleLogin}  >Login</Button>
        </Form>
        <ToastContainer autoClose={2000} theme="colored" position="top-center"/>

      </div>
    </>
  )
}

export default LoginPage