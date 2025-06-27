import { Container, Row, Col } from "react-bootstrap";
import "./ResourceStyle.scss"
import Rpt1 from "../../assets/AnnualReports/KMSWS Annual report -2018-19.pdf"
import Rpt2 from "../../assets/AnnualReports/KMSWS Anaual Report 2020 -21.pdf"
import Rpt3 from "../../assets/AnnualReports/KMSWS Annual Report FY21-22.pdf"
import {Eye} from "react-bootstrap-icons";
import Media from '../../contentFiles/Media.json';

const MediaCoverage = () => {
    
    return (
      <>
        <Container>
        <Row>
            <Col style={{textAlign:'center'}}>
                <h1>MediaCoverage</h1> <br></br>
            </Col>
        </Row>
            <Row>
                <Col style={{textAlign:'center'}}>
                <h3>South 24 Parganas News&nbsp; <a href={Media.med1} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med1}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>DD Bangla Live News&nbsp; <a href={Media.med2} target="_blank" title="View Report"><Eye /></a></h3>
                <iframe  className="iframeReport" src="https://www.youtube.com/embed/vjlRmlqJLfE?si=VEPbdK0lTfqK6ZlQ" ></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>M3&nbsp; <a href={Media.med3} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med3}></iframe>
                </Col>
            </Row>
            <hr></hr><br></br>
            <Row>
                <Col style={{textAlign:'center'}}>
                <h3>M4 &nbsp; <a href={Media.med4} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe  className="iframeReport" 
                    src="https://www.youtube.com/embed/XhazhVIA2q8?si=8wkZvpSAYhk0TyaX?autoplay=1&mute=1"
                     ></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>M5&nbsp; <a href={Media.med5} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med5}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>M6&nbsp; <a href={Media.med6} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med6}></iframe>
                </Col>
            </Row>
            <hr></hr><br></br>
            <Row>
                <Col style={{textAlign:'center'}}>
                <h3>M7&nbsp; <a href={Media.med7} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med7}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>M8&nbsp; <a href={Media.med8} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med8}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>M9&nbsp; <a href={Media.med9} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Media.med9}></iframe>
                </Col>
            </Row>



            <br></br>
        </Container>
      </>
    )
  };
  
  export default MediaCoverage;