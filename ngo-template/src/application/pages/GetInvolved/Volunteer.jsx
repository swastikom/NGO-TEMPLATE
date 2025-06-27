import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import GetInvolved from '../../contentFiles/GetInvolved.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Volunteers() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Volunteers and Internships</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Tabs
                            defaultActiveKey="Care & Protection"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        > */}
                        <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                            <Col><b>{GetInvolved.volunteers.label}</b></Col>
                        </Row>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '5rem' }}>
                            <Col>{GetInvolved.volunteers.description}</Col>
                        </Row>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '5rem' }}>
                            <Col><b>{GetInvolved.volunteers.volOpportunities}</b></Col>
                        </Row>
                        <Tabs
                            defaultActiveKey="Community Engagement"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {GetInvolved.volunteers.volunteerOpportunities.map(opportunity => (
                                <Tab eventKey={opportunity.label} title={opportunity.label}>
                                    <div key={opportunity.label}>
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '6rem' }}>
                                            <Col>{opportunity.desc}</Col>
                                        </Row>
                                    </div>
                                </Tab>
                            ))}
                        </Tabs>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '5rem' }}>
                            <Col><b>{GetInvolved.volunteers.InternOpportunities}</b></Col>
                        </Row>
                        <Tabs
                            defaultActiveKey="Research & Development"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {GetInvolved.volunteers.InternalTasks.map(opportunity => (
                                <Tab eventKey={opportunity.label} title={opportunity.label}>
                                    <div key={opportunity.label}>
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '6rem' }}>
                                            <Col>{opportunity.desc}</Col>
                                        </Row>
                                    </div>
                                </Tab>
                            ))}
                        </Tabs>
                    </Col>
                </Row>
                <Row className='textJustify custBackJoin custPadd'>
                    <Col><h2>{WhoWeAre.join}</h2></Col>
                </Row>
            </Container>
        </>
    );
}

export default Volunteers;