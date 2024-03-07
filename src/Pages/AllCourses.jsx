import React, { useEffect, useState } from 'react'
import Headers from '../Components/Headers'
import { Card, Col, Row } from 'react-bootstrap'
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import ElLogos from '../assets/El-Logos.png'
import { getAllCourseAPI } from '../Services/allAPIs'

function AllCourses() {

  const [allCourses,setAllCourses] = useState([])
  console.log(allCourses);
    const getAllCourses = async () => {
      const result = await getAllCourseAPI()
      if(result.status===200){
        setAllCourses(result.data)
      }else{
        console.log(result);
      }
      console.log(allCourses);
    }
  
  
    useEffect(() =>{ 
      getAllCourses()
      // if(sessionStorage.getItem("token")){
      //   setIsLoggedIn(true)
      // }else{
      //   setIsLoggedIn(false)
      // }
    },[])

    

  return (
    <>
    <Headers/>
      <div>

      {/* {allCourses.length>0? allCourses.map((course,index)=>(
         <div key={index}className='me-5'> 

          <ProjectCard course={course}/> 
       </div>
       )): null} */}


      <div style={{ width: '100%', height: '' }}>
        <p className='fw-bolder ms-5 mt-4 fs-3'>All  Courses</p>
        {/* ====================================================================================================================================================================== */}
        {allCourses.length>0? allCourses.map((course,index)=>(
         <div key={index}className='me-5'> 
        <Row>
            <Col xs={6} md={4}>
               {/*   <div>   */}
                 {/* {allCourses.length>0? allCourses.map((course,index)=>(
         <div key={index}className='me-5'>  */}
            <Card sx={{ maxWidth: 345 }} style={{margin:'8%'}}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={ElLogos}  onClick={` ${course.link}`}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {course.details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      {/* </div> )): null} */}
      </Col>
      
      </Row>
      </div> )): null}
      
      </div>
      </div>
     
      {/* </div> */}
    </>
  )
}

export default AllCourses