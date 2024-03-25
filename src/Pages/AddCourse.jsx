import React, { useState } from 'react'
import { Button, Form,  } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { uploadAPI } from '../Services/allAPIs';
import Headers from '../Components/Headers';


function AddCourse() {

  const navigate = useNavigate()
  const [uploadData,setUploadData] = useState({
    name:"",category:"",details:"",len:"",link:""
})
const handleCourseUpload = async (e)=>{
  e.preventDefault()
  console.log(uploadData);
  const {name,category,details,len,link,img} = uploadData
  if(!name || !category || !details || !len || !link){
    toast.info('Please fill the form completly!!')
  }else{
    // toast.succes('Proceed to call api ')
    try{
      const result = await uploadAPI(uploadData)
      console.log(result)
      if(result.status == 200){
        toast.success(`Course added successfully !!!`)
        setUploadData({name:"",category:"",details:"",len:"",link:""})
        setTimeout(() => {
          navigate('/allcourses')
        }, 3000);
      }
      else{
       toast.warning(result)
      }
    }catch(err){
      console.log(err);
    }
  }
}


  return (
    <>
    <Headers/>
    <div>

    
            <div width="60%" style={{ backgroundColor: '#f2f2f2', height: '430px',width:'800px', margin: '230px', marginTop: '30px', borderRadius: '10px' }}>
        <p style={{ margin: '20px', fontWeight: 'bold', fontSize: '18px' }} className='ms-5 '><br />Learn at the comfort of your own home</p>
      <div className='row'>
        <div className='col-lg-8 md-4'>

        
        <Form action="POST" className='w-100' >

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicname"> Course Name  <br />
            <Form.Control type="text" placeholder="Course Name " 
               onChange={e=>setUploadData({...uploadData,name:e.target.value})} value={uploadData.name}
               style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicCategory"> category  <br />
            <Form.Control  type="text" placeholder="category"
             onChange={e=>setUploadData({...uploadData,category:e.target.value})} value={uploadData.category}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicDetails"> Details  <br />
            <Form.Control  type="text" placeholder="About the course "
             onChange={e=>setUploadData({...uploadData,details:e.target.value})} value={uploadData.details}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>
          
          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLength"> Length of the Video  <br />
            <Form.Control type="text" placeholder="Length in Minutes"
             onChange={e=>setUploadData({...uploadData,len:e.target.value})} value={uploadData.len}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLink"> Link  <br />
            <Form.Control  type="text" placeholder="Youtube Link for Video"
             onChange={e=>setUploadData({...uploadData,link:e.target.value})} value={uploadData.link}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          {/* <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLink"> Add An Image For Video template  <br />
            <Form.Control  type="file" placeholder="Youtube Link for Video"
            onChange={e=>setUploadData({...courseData,courseTemp:e.target.files[0]})}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group> */}
          <Button className='btn btn-dark mb-2' style={{ border: '3px', background: '#80d4ff', margin: '20px', marginLeft: '35px', padding: '5px', fontSize: '15px', borderRadius: '15px' }} 
            onClick={handleCourseUpload}  >Add Course</Button>
        </Form>
        <ToastContainer autoClose={2000} theme="colored" position="top-center"/>
        </div>
        {/* <div className='col-lg-4'>
        <Form.Group id="forInpCol" className="mb-3 m-5"> Image 
            <Form.Control  type="file" placeholder="Image"
             onChange={e=>setUploadData({...uploadData,img:e.target.value})} value={uploadData.img}
            />
          </Form.Group>
        </div> */}
      </div>
       </div>
    </div> 
     </>
  )
}

export default AddCourse