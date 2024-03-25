import React, { useState } from 'react'
import { Button, Container, Form, Navbar, Nav } from 'react-bootstrap'
import { Link, useNavigate,  } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {registerAPI} from "../Services/allAPIs"


function RegisterPage() {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
})
const handleRegister = async (e)=>{
  e.preventDefault()
  console.log(userData);
  const {username,email,password} = userData
  if(!username || !email || !password){
    toast.info('Please fill the form completly!!')
  }else{
    // toast.succes('Proceed to call api ')
    try{
      const result = await registerAPI(userData)
      console.log(result)
      if(result.status === 200){
        toast.success(`${result.data.username} has registered successfully !!!`)
        setUserData({username:"",email:"",password:""})
        setTimeout(() => {
          navigate('/login')
        }, 3000);
      }
      else{
       toast.warning(result.response.data)
      }
    }catch(err){
      console.log(err);
    }
  }
}

  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={'/'} style={{fontWeight:'bold'}}>Easy Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <NavDropdown title="All Category" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Graphic Design </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3D & Animation</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item ><Link to={'/allcourses'}> All courses </Link>  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#home">
             <p style={{ marginLeft: '10px', fontSize: '10px', color: "black" }} >Already Registered?
             <Link to={'/login'} style={{ textDecoration: 'none', fontSize: '9px', fontWeight: 'bold' }}>LOGIN </Link> here </p>
              {/* <p style={{ marginLeft: '50px', marginTop: '-10px', fontSize: '10px', color: "black" }}> <Link to={'/teacher'} style={{textDecoration:'none'}}> Register as Teacher</Link></p> */}
              </Nav.Link>
        </Navbar.Collapse>

      </Container>
    </Navbar> 
          
      <div width="60%" style={{ backgroundColor: '#f2f2f2', height: '350px',width:'500px', margin: '230px', marginTop: '30px', borderRadius: '10px' }}>
        <p style={{ margin: '20px', fontWeight: 'bold', fontSize: '18px' }} className='ms-5 '><br />Learn at the comfort of your own home</p>
        <Form action="POST" className='w-100' >

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicName">Fullname  <br />
            <Form.Control /*id="username"*/type="text" placeholder="What is your name?" 
            onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} 
             style={{ margin:'2x',width:'90%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicEmail"> Email ID  <br />
            <Form.Control /*id="email"*/ type="email" placeholder="Tell us your Email ID" 
            onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}
             style={{ margin:'2x',width:'90%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicPassword"> Password  <br />
            <Form.Control /*id="password"*/ type="password" placeholder="Create a password for your account"
             onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}
             style={{ margin:'2x',width:'90%' }}/>
          </Form.Group>
          <Button className='btn btn-dark mb-2' style={{ border: '3px', background: '#80d4ff', margin: '20px', marginLeft: '35px', padding: '5px', fontSize: '15px', borderRadius: '15px' }} 
            onClick={handleRegister}  >Register Now</Button>
        </Form>

      </div>
      <ToastContainer autoClose={2000} theme="colored" position="top-center"/>

    </>
  )
}

export default RegisterPage