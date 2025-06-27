import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import OurWork from '../../contentFiles/OurWork.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Environment() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Environment</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            defaultActiveKey="Environment"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {OurWork.envDisasterResponse.map((item) => {
                                return (<Tab eventKey={item.label} title={item.label}>
                                    <div className="alternateRows">
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                            <Col><b>{item.label}</b></Col>
                                        </Row>
                                        <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                            <Col>{item.description}</Col>
                                        </Row>
                                        {item.content && item.content.map((contentItem, contentIndex) => (
                                            <div key={contentIndex}>
                                                {/* <h3>{component.label1}</h3>
                                                <strong>{component.label2}</strong> {component.desc} */}
                                                <Row className='textJustify' style={{ padding: '13px 40px 3px 40px' }}>
                                                    <Col><b>{contentItem.label}</b></Col>
                                                </Row>
                                                <Row className='textJustify' style={{ padding: '13px 40px 3px 40px' }}>
                                                    <Col>{contentItem.desc}</Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </div>
                                </Tab>)
                            })}
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

export default Environment;