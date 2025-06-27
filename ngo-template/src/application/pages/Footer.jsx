import './Style.scss';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import routes from '../contentFiles/Routes.json';

const Footer = () => {
    return (<>
        <Container className="footerContainer">
            <Row>
                <Col>
                    <b>Home</b>
                </Col>
                <Col>
                <b>Who We Are</b>
                </Col>
                <Col>
                    <b>Our Work</b>
                </Col>
                <Col>
                    <b>Get Involved</b>
                </Col>
                <Col>
                    <b>Resources</b>
                </Col>
                <Col>
                    <b>Contact Us</b>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav className="flex-column">
                        <Nav.Link href={routes.home}>Home</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className="flex-column">
                    <Nav.Link href={routes.aboutUs}>About Us</Nav.Link>
                    <Nav.Link href={routes.vissionMission}>Our Vission & Mission</Nav.Link>
                    <Nav.Link href={routes.ourJourney}>Our journey</Nav.Link>
                    <Nav.Link href={routes.governingBody}>Governing Body</Nav.Link>
                    <Nav.Link href={routes.ourTeam}>Our Team</Nav.Link>
                    <Nav.Link href={routes.ourSupporters}>Our Supporters</Nav.Link> 
                    </Nav>
                </Col>
                <Col>
                    <Nav className="flex-column">
                        <Nav.Link href={routes.education}>Education</Nav.Link>
                        <Nav.Link href={routes.livelihood}>Livelihood</Nav.Link>
                        <Nav.Link href={routes.health}>Health</Nav.Link>
                        <Nav.Link href={routes.womenEmpowerment}>Women Empowerment</Nav.Link>
                        <Nav.Link href={routes.environment}>Environment & Disaster Response</Nav.Link>
                        <Nav.Link href={routes.careAndProtection}>Care & Protection</Nav.Link> 
                    </Nav>
                </Col>
                <Col>
                    <Nav className="flex-column">
                        <Nav.Link href={routes.individualSupport}>Individual Support</Nav.Link>
                        <Nav.Link href={routes.corporateSupport}>Corporate Support</Nav.Link>
                        <Nav.Link href={routes.volunteer}>Volunteers & Internships</Nav.Link>
                        <Nav.Link href={routes.workWithUs}>Work With Us</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className="flex-column">
                        <Nav.Link href={routes.annualReport}>Annual Report</Nav.Link>
                        <Nav.Link href={routes.auditReport}>Audit Report</Nav.Link>
                        <Nav.Link href={routes.legalDocument}>Legal Documents</Nav.Link>
                        <Nav.Link href={routes.accredition}>Accreditation & Validation</Nav.Link>
                        <Nav.Link href={routes.mediaCoverage}>Media Coverage</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className="flex-column">
                        <Nav.Link href={routes.contact}>Contact</Nav.Link> 
                    </Nav>
                </Col>
            </Row>
            <Row style={{textAlign:"center"}}>
                <Col>
                <br></br>
                <hr></hr>
                    Copyrights (c) 2024 KMSWS All rights reserved.
                </Col>
            </Row>
      </Container>
    </>);
}
export default Footer;