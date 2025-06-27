import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json'
import sup1 from '../../assets/supporters/1083.png';
import sup2 from '../../assets/supporters/311_profilepicture.jpg';
import sup3 from '../../assets/supporters/GuideStar India Transparency Key.png';
import sup4 from '../../assets/supporters/Inner wheel logo.png';
import sup5 from '../../assets/supporters/Rotary_Logo.jpg';
import sup6 from '../../assets/supporters/Smile.jpg';
import sup7 from '../../assets/supporters/Untitled.jpg';
import sup8 from '../../assets/supporters/Untitled_1.jpg';
import sup9 from '../../assets/supporters/asha-logo.jpg';
import sup10 from '../../assets/supporters/channels4_profile.jpg';
import sup11 from '../../assets/supporters/f686e6_ae5b70decde146698be2586f255b65fe~mv2.png';
import sup12 from '../../assets/supporters/images.jpg';
import sup13 from '../../assets/supporters/images.png';
import sup14 from '../../assets/supporters/indiaisusog.jpg';
import sup15 from '../../assets/supporters/maxresdefault.jpg';
import sup16 from '../../assets/supporters/unique.png';

function OurSupporters() {
  return (
    <>
    <Container className="aboutContainer">
        <Row className="textAlignCenter" >
          <Col><h1>Our Supporters <br></br><br></br></h1></Col>
      </Row>
      <Row className='textJustify custPadd'>
            <Col>{WhoWeAre.ourSupportersBrief}</Col>
        </Row>
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
        <Row className='textJustify custBackJoin custPadd'>
            <Col><h2>{WhoWeAre.join}</h2></Col>
        </Row>
    </Container>
    </>
  );
}

export default OurSupporters;