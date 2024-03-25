import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import temp1 from '../assets/temp1.jpg'
import temp2 from '../assets/temp2.jpg'
import temp3 from '../assets/temp3.jpg'
import cTemp from '../assets/cardTemp.jpg'
import profileTemp from '../assets/profileTemp.png'
import angularTemp from '../assets/angularTemp.png'
import reactTemp from '../assets/reactTemp.png'
import nodeTemp from '../assets/nodeTemp.png'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Headers from './Headers'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllCourseAPI } from '../Services/allAPIs'
import AllCourses from '../Pages/AllCourses'

function Home(course) {

  const [allCourses, setAllCourses] = useState([])
  console.log(allCourses);

  const getAllCourses = async () => {
    const result = await getAllCourseAPI()
    if (result.status === 200) {
      setAllCourses(result.data)
    } else {
      console.log(result);
    }
    console.log(allCourses);
  }


  useEffect(() => {
    getAllCourses()
    // if(sessionStorage.getItem("token")){
    //   setIsLoggedIn(true)
    // }else{
    //   setIsLoggedIn(false)
    // }
  }, [])

  return (
    <>
      <Headers />
      {/* CAROUSAL  */}
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={temp1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" src={temp2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" src={temp3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>



        {/* ====================================================================================================================================================================== */}
      {/* Top Courses */}
      <div style={{ width: '100%', height: '' }}>

        <p className='fw-bolder ms-5 mt-3 fs-3'>Top Courses</p>
       

        <Row>
  {allCourses.length > 0 && AllCourses.length==0 ? (
    allCourses.map((course, index) => (
      <Col lg={3} key={index}>
        <Card style={{ width: '20rem', margin: '25px' }}>
          <Card.Img variant="top" src={cTemp} />
          <Card.Body>
            <Card.Title className='fw-bold'>{course.name}</Card.Title>
            <Card.Text className='fs-6'>{course.details}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ fontSize: '10px', padding: '5px', fontWeight: 'bolder' }}>{course.len} Min</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '10px', padding: '8px', margin: '' }}><span style={{ backgroundColor: '#4dd2ff', padding: '1px' }}>{course.category}</span></ListGroup.Item>
            <ListGroup.Item>
              <span style={{ fontWeight: 'bolder', fontSize: '15px' }}>
                <div className="d-flex justify-content-between">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={profileTemp} />
                    <p style={{ marginLeft: '149px', marginTop: '5px' }}>Free</p>
                  </Stack>
                </div>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    ))
  ) : null}
</Row>

      </div>


      {/* Top Categories */}
      <div style={{ width: '100%', height: '' }}>
        <p className='fw-bolder ms-5 mt-3 fs-3'>Top Categories</p>
        {/* ====================================================================================================================================================================== */}
        <Row>
          <Col xs={6} md={4}>
            <div>
              <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '20px' }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={angularTemp} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Angular  Tutorials
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Angular
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Col>


          <Col xs={6} md={4}>
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={reactTemp} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       React Tutorial
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      React
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Col>


          <Col xs={6} md={4}>
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={nodeTemp} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Node.js
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Node
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Container>
          <Row>
            <Col >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/register'}>
                <div className='d-flex justify-content-center text-align-center  m-3 mb-5' style={{ height: '20vh', width: '90%', backgroundColor: '#ffad33', borderRadius: '20px', padding: '48px', fontSize: '25px', fontFamily: 'cursive', textDecoration: 'none' }}>
                  BECOME A STUDENT
                </div>
              </Link>
            </Col>

            <Col>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/teacher'}>
                <div className='d-flex justify-content-center text-align-center border m-3 mb-5' style={{ height: '20vh', width: '90%', backgroundColor: '#ffad33', borderRadius: '20px', padding: '48px', fontSize: '25px', fontFamily: 'cursive' }}>
                  BECOME A TUTOR
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>

  )
}

export default Home