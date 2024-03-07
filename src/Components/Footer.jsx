import React from 'react'
import FooterImg from '../assets/FootImg.png'
function Footer() {
  return (
    <>
   <div  >
    <img src={FooterImg} width={'100%'} alt="" />
    <div  class="site-footer">
    <div class="container">
    <div class="row">
            <div class="col-md-3" style={{marginTop:'-220px',marginLeft:'290px',color:'white'}}>
            
                <ul class="list-unstyled" >
                    <li typr='none'><a style={{textDecoration:"none",color:'white'}} href="#">About us</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Home</a></li> <br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Courses</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Contact</a></li><br />
                </ul>
            </div>

            <div class="col-md-3" style={{marginTop:'-225px',marginLeft:'460px',color:'white'}}>
          
                <ul class="list-unstyled" >
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Help center</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Summons/Notices</a></li> <br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Grievances</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Report issue</a></li><br />
                </ul>
            </div>

            <div class="col-md-3" style={{marginTop:'-225px',marginLeft:'690px',color:'white'}}>
          
                <ul class="list-unstyled" >
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Privacy policy</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Terms & conditions</a></li> <br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Fruad alert</a></li><br />
                    <li><a style={{textDecoration:"none",color:'white'}} href="#">Trust & safty</a></li><br />
                </ul>
            </div>
            </div>
    </div>

    </div>
   </div>
   

    </>
  )
}

export default Footer