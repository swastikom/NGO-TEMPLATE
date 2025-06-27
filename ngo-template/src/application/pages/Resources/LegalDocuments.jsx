import { Container, Row, Col } from "react-bootstrap";
import "./ResourceStyle.scss"
import Rpt1 from "../../assets/LegalDocuments/KMSWS Pan.pdf"
import Rpt2 from "../../assets/LegalDocuments/KMSWS computerised registration certificate.pdf"
import Rpt3 from "../../assets/LegalDocuments/Fcra renewal certificate.pdf"
import Rpt4 from "../../assets/LegalDocuments/KMSWS FCRA certificate.pdf"
import Rpt5 from "../../assets/LegalDocuments/NITI Ayog 1.pdf"
import {Eye} from "react-bootstrap-icons";

const LegalDocuments = () => {
    
    return (
      <>
        <Container>
        <Row>
            <Col style={{textAlign:'center'}}>
                <h1>Legal Documents</h1> <br></br>
            </Col>
        </Row>
            <Row>
                <Col style={{textAlign:'center'}}>
                <h3>KMSWS Pan &nbsp; <a href={Rpt1} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt1}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>KMSWS computerised registration certificate&nbsp; <a href={Rpt2} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt2}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>Fcra renewal certificate&nbsp; <a href={Rpt3} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt3}></iframe>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center'}}>
                <h3>KMSWS FCRA certificate&nbsp; <a href={Rpt4} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt4}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>NITI Ayog&nbsp; <a href={Rpt5} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt5}></iframe>
                </Col>
            </Row>
            <br></br>
        </Container>
      </>
    )
  };
  
  export default LegalDocuments;