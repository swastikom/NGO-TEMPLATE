import { Container, Row, Col } from "react-bootstrap";
import "./ResourceStyle.scss"
import Rpt1 from "../../assets/AuditReports/KMSWS Audit 2019-20.pdf"
import Rpt2 from "../../assets/AuditReports/KMSWS Audit 2020-21.pdf"
import Rpt3 from "../../assets/AuditReports/KMSWS Audit 2021-22.pdf"
import {Eye} from "react-bootstrap-icons";

const Accredition = () => {
    
    return (
      <>
        <Container>
        <Row>
            <Col style={{textAlign:'center'}}>
                <h1>Accredition Reports</h1> <br></br>
            </Col>
        </Row>
            {/* <Row>
                <Col style={{textAlign:'center'}}>
                <h3>Report 2018-19 &nbsp; <a href={Rpt1} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt1}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>Report 2020-21&nbsp; <a href={Rpt2} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt2}></iframe>
                </Col>
                <Col style={{textAlign:'center'}}>
                <h3>Report 2021-22&nbsp; <a href={Rpt3} target="_blank" title="View Report"><Eye /></a></h3>
                    <iframe className="iframeReport" src={Rpt3}></iframe>
                </Col>
            </Row> */}
            <br></br>
        </Container>
      </>
    )
  };
  
  export default Accredition;