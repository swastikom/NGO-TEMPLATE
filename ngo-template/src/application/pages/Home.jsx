import React from "react";
import {
    useNavigate,
} from "react-router-dom";
import Carousel from "./HomeCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Style.scss";
import HomeText from "../contentFiles/HomeText.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TestimonialCarousel from './TestimonialCarousel';
import Logo from '../assets/Logo.png';
import sup1 from '../assets/supporters/1083.png';
import sup2 from '../assets/supporters/311_profilepicture.jpg';
import sup3 from '../assets/supporters/GuideStar India Transparency Key.png';
import sup4 from '../assets/supporters/Inner wheel logo.png';
import sup5 from '../assets/supporters/Rotary_Logo.jpg';
import sup6 from '../assets/supporters/Smile.jpg';
import sup7 from '../assets/supporters/Untitled.jpg';
import sup8 from '../assets/supporters/Untitled_1.jpg';
import sup9 from '../assets/supporters/asha-logo.jpg';
import sup10 from '../assets/supporters/channels4_profile.jpg';
import sup11 from '../assets/supporters/f686e6_ae5b70decde146698be2586f255b65fe~mv2.png';
import sup12 from '../assets/supporters/images.jpg';
import sup13 from '../assets/supporters/images.png';
import sup14 from '../assets/supporters/indiaisusog.jpg';
import sup15 from '../assets/supporters/maxresdefault.jpg';
import routes from '../contentFiles/Routes.json';
import sup16 from '../assets/supporters/unique.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel />
      <Container fluid className="aboutContainer">
        <Row>
          <Col className="textAlignCenter">{HomeText.aboutOrg} <a href={routes.aboutUs}>read more {'>>'}</a></Col>
        </Row>
      </Container>
      <Container fluid className="programmeContainer">
        <Row>
          <Col className="textAlignCenter" ><h1>OUR PROGRAMMES <br></br><br></br></h1></Col>
        </Row>
        {/**Cards */}
        <Row className="textAlignCenter">
          <Col ><Card className="customBorder1">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '25px'}}>EDUCATION</Card.Title>
              <Card.Text>
                {HomeText.education}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#47b5ff', border:'1px solid #47b5ff'}} onClick={()=> navigate(routes.education)}>read more</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className="customBorder2">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '25px'}}>LIVELIHOOD</Card.Title>
              <Card.Text>
              {HomeText.livelihood}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#fe5fc9', border:'1px solid #fe5fc9'}} onClick={()=> navigate(routes.livelihood)}>read more</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className="customBorder3">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '25px'}}>HEALTH</Card.Title>
              <Card.Text>
              {HomeText.health}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#22e67e', border:'1px solid #22e67e'}} onClick={()=> navigate(routes.health)}>read more</Button>
            </Card.Body>
          </Card></Col>
        </Row>
        <Row className="textAlignCenter">
          <Col><Card className="customBorder4">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '25px'}}>WOMEN EMPOWERMENT</Card.Title>
              <Card.Text>
              {HomeText.women}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#2de8fe', border:'1px solid #2de8fe'}} onClick={()=> navigate(routes.womenEmpowerment)}>read more</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className="customBorder5">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '25px'}}>CARE & PROTECTION</Card.Title>
              <Card.Text>
              {HomeText.care}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#d9f105', border:'1px solid #d9f105'}} onClick={()=> navigate(routes.careAndProtection)}>read more</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className="customBorder6">
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold',fontSize: '20px'}}>ENVIRONMENT & DISASTER RESPONSE</Card.Title>
              <Card.Text>
              {HomeText.environment}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#47b5ff', border:'1px solid #47b5ff'}} onClick={()=> navigate(routes.environment)}>read more</Button>
            </Card.Body>
          </Card></Col>
        </Row>
        {/**End Cards */}
         {/**our journey */}
         <Row className='ourjourney'>
          <Col className="textAlignCenter"><h1>Our Journey </h1></Col>
        </Row>
      <Row className='ourjourney'>
          <Col className="textAlignCenter">
            {HomeText.journey}<a href={routes.ourJourney}>read more {'>>'}</a>
          </Col>
        </Row>
        {/**Journey ends */}
        {/**Testimonials */}
        <Row>
          <Col className="textAlignCenter"><h1><br></br>Supporter Testimonials <br></br><br></br></h1></Col>
        </Row>
      <Row>
          <Col>
            <TestimonialCarousel></TestimonialCarousel>
          </Col>
        </Row>
        {/**Testimonials end */}
       
      </Container>
      <Container fluid className="supporterContainer">
      <Row className="textAlignCenter supporterBorder" >
          <Col><h1>Our Supporters</h1></Col>
      </Row>
      <marquee id="scroll_news" style={{ color: 'red', fontSize: '3em',height:'250px' }} direction="up" loop="-1" scrollamount="10" >
      <div onMouseOver={()=>document.getElementById('scroll_news').stop()} onMouseOut={()=>document.getElementById('scroll_news').start()}> 
      <Row className="textAlignCenter padbtm" >
          <Col>
            <img src={sup9} width="200" />
          </Col>
          <Col>
            <img src={sup2} width="200" />
          </Col>
          <Col>
            <img src={sup3} width="200" />
          </Col>
          <Col>
            <img src={sup1} width="200" />
          </Col>
          <Col>
            <img src={sup6} width="200" />
          </Col>
      </Row>
      
      <Row className="textAlignCenter padbtm" >
          <Col>
            <img src={sup16} width="200"/>
          </Col>
          <Col>
            <img src={sup5} width="200"/>
          </Col>
          <Col>
            <img src={sup8} width="200"/>
          </Col>
          <Col>
            <img src={sup4} width="200"/>
          </Col>
          <Col>
            <img src={sup10} width="200"/>
          </Col>
      </Row>
      <Row className="textAlignCenter padbtm" >
          <Col>
            <img src={sup12} width="200"/>
          </Col>
          <Col>
            <img src={sup11} width="200"/>
          </Col>
          <Col>
            <img src={sup13} width="200"/>
          </Col>
          <Col>
            <img src={sup14} width="200"/>
          </Col>
          <Col>
            <img src={sup15} width="200"/>
          </Col>
      </Row>
      <Row className="textAlignCenter padbtm" >
          <Col>
            <img src={sup7} width="200"/>
          </Col>
      </Row>
      </div>
      </marquee>
      </Container>
    </>
  )


};

export default Home;