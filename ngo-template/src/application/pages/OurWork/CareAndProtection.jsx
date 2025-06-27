import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import OurWork from '../../contentFiles/OurWork.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import Card from 'react-bootstrap/Card';

function CareAndProtection() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Care And Protection</h1>
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
                        {OurWork.careProtection.map((item, tIndex) => {
                            return (
                                <div className="">
                                    {item.label === "Care & Protection" && (
                                        <div>
                                            <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                                <Col><b>{item.label}</b></Col>
                                            </Row>

                                            <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                                <Col>{item.description}</Col>
                                            </Row>
                                            <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                                <Col>{item.testimonial}</Col>
                                            </Row>
                                        </div>
                                    )}

                                    {item.label === "Purnima Mondal" && (
                                        <Row xs={1} md={2} className="g-4 d-flex align-items-center justify-content-center" style={{ padding: '45px' }}>
                                            <Col key={tIndex}>
                                                <Card border="primary" style={{ width: '38rem', height: '24.5rem' }}>
                                                    <Card.Header>{item.label}</Card.Header>
                                                    <Card.Body style={{ overflowX: 'auto' }}>
                                                        <Card.Text>
                                                            {item.testimonial}.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    )}

                                </div>
                            )
                        })}
                        {/* </Tabs> */}
                    </Col>
                </Row>
                <Row className='textJustify custBackJoin custPadd'>
                    <Col><h2>{WhoWeAre.join}</h2></Col>
                </Row>
            </Container>
        </>
    );
}

export default CareAndProtection;