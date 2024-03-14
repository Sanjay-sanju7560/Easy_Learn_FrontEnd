import React, { useEffect, useState } from 'react';
import Headers from '../Components/Headers';
import { Card, Col, Row } from 'react-bootstrap';
import { CardActionArea, CardContent, CardMedia, Fab, Typography } from '@mui/material';
import { getAllCourseAPI } from '../Services/allAPIs';
import AddIcon from '@mui/icons-material/Add';
import ElLogos from '../assets/El-Logos.png'

function AllCourses() {
  const [allCourses, setAllCourses] = useState([]);

  const getAllCourses = async () => {
    try {
      const result = await getAllCourseAPI();
      if (result.status === 200) {
        setAllCourses(result.data);
      } else {
        console.error('Failed to fetch courses:', result);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      <Headers />
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ width: '100%' }}>
          <p className='fw-bolder ms-5 mt-4 fs-3'>All Courses</p>
          <Row>
            {allCourses.map((course, index) => (
              <Col className='ms-5' key={index} lg={2} xs={3} md={3} style={{ display: 'flex', marginBottom: '20px' }}>
                <Card style={{ width: '18rem' }}>
                  <CardActionArea onClick={() => window.open(course.link)}>
                    <CardMedia component="img" height="180" image={ElLogos} />
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
              </Col>
            ))}
          </Row>
        </div>
        
      </div><div style={{ marginTop: '10%' }}>
          <Fab style={{marginLeft:'89%'}} size="medium" color="secondary" aria-label="add" >
            <AddIcon />
          </Fab>
        </div>
    </>
  );
}

export default AllCourses;
