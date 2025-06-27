import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import GetInvolved from '../../contentFiles/GetInvolved.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CorporateSupport() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Corporate Support</h1>
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
                            <Col><b>{GetInvolved.CorporateSupport.label}</b></Col>
                        </Row>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '5rem' }}>
                            <Col>{GetInvolved.CorporateSupport.description}</Col>
                        </Row>
                        <Tabs
                            defaultActiveKey="Project Sponsorship"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {GetInvolved.CorporateSupport.tasks.map(task => (
                                <Tab eventKey={task.label} title={task.label}>
                                    <div key={task.label}>
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '6rem' }}>
                                            <Col>{task.desc}</Col>
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

export default CorporateSupport;