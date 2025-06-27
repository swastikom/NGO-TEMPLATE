import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import OurWork from '../../contentFiles/OurWork.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function WomenEmpowerment() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Women Empowerment</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            defaultActiveKey="Empowering Self-Help Groups (SHGs)"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {OurWork.womenEmpowerment.map((item) => {
                                return (<Tab eventKey={item.label} title={item.label}>
                                    <div className="alternateRows">
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                            <Col><b>{item.label}</b></Col>
                                        </Row>
                                        <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                            <Col>{item.description}</Col>
                                        </Row>
                                        <Row className='textJustify' style={{ padding: '27px 40px 3px 40px' }}>
                                                    <Col><b>{item.components[0].label1}</b></Col>
                                                </Row>
                                        <Tabs
                                            defaultActiveKey={item.components[0].label}
                                            id="uncontrolled-tab-example"
                                            className="subitemTabs"
                                            
                                        >
                                        {item.components && item.components.map((component, componentIndex) => (
                                            <Tab eventKey={component.label} title={component.label}>
                                            <div key={componentIndex}>
                                                {/* <h3>{component.label1}</h3>
                                                <strong>{component.label2}</strong> {component.desc} */}
                                                <Row className='textJustify' style={{ padding: '13px 40px 3px 40px' }}>
                                                    <Col><b>{component.label}</b></Col>
                                                </Row>
                                                
                                                <Row className='textJustify' style={{ padding: '13px 40px 3px 40px' }}>
                                                    <Col>{component.desc}</Col>
                                                </Row>
                                            </div>
                                            </Tab>
                                        ))}</Tabs>
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

export default WomenEmpowerment;