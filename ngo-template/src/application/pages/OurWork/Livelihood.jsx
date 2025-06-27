import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import OurWork from '../../contentFiles/OurWork.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

function Livelihood() {
    return (
        <Container className="aboutContainer">
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1>Livelihood</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Tabs
                        defaultActiveKey="Natural Farming"
                        id="uncontrolled-tab-example"
                        className="subitemTabs"
                        justify
                    >
                        {OurWork.livelihood.map((livelihoodItem, index) => (
                            <Tab eventKey={livelihoodItem.label} title={livelihoodItem.label}>
                                <div key={index}>
                                    <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                        <Col><b>{livelihoodItem.label}</b></Col>
                                    </Row>
                                    <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                        <Col>{livelihoodItem.description}</Col>
                                    </Row>
                                    {typeof livelihoodItem.testimonial === 'string' ? (
                                        <div>
                                            <Container className="aboutContainer">
                                                <Row xs={1} md={2} className="g-4 d-flex align-items-center justify-content-center" style={{ padding: '20px' }}>
                                                    <Col key={index}>
                                                        <Card border="primary" style={{ width: '38rem', height: '24.5rem' }}>
                                                            <Card.Header>Testimonial</Card.Header>
                                                            <Card.Body style={{ overflowX: 'auto' }}>
                                                                <Card.Text>
                                                                    {livelihoodItem.testimonial}.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            {/* <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                <Col><b>Testimonial</b></Col>
                            </Row>
                            <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                <Col>{livelihoodItem.testimonial}</Col>
                            </Row> */}
                                        </div>
                                    ) : (
                                        <div>

                                            <Row className='textJustify custPadd' style={{ paddingTop: '25px', paddingBottom: '0px' }}>
                                                <Col><b>Testimonial</b></Col>
                                            </Row>
                                            <Container className="aboutContainer">
                                                <Row xs={1} md={2} className="g-4 d-flex align-items-center justify-content-center" style={{ padding: '45px' }}>
                                                    <Col key={index}>
                                                        <Card border="primary" style={{ width: '38rem', height: '24.5rem' }}>
                                                            <Card.Header>{livelihoodItem.testimonial.name}</Card.Header>
                                                            <Card.Body style={{ overflowX: 'auto' }}>
                                                                <Card.Text>
                                                                    {livelihoodItem.testimonial.description}.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            {/* <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                                <Col></Col>
                                            </Row>
                                            <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                                <Col></Col>
                                            </Row> */}
                                        </div>
                                    )}
                                    {livelihoodItem.aspects && (
                                        <div>
                                            <Row className='textJustify custPadd' style={{ paddingTop: '25px', paddingBottom: '0px' }}>
                                                <Col><b>Aspects</b></Col>
                                            </Row>
                                            {livelihoodItem.aspects.map((aspect, aIndex) => (
                                                <div key={aIndex}>
                                                    <Row className='textJustify custPadd' style={{ paddingTop: '25px', paddingBottom: '0px' }}>
                                                        <Col><b>{aspect.label}</b></Col>
                                                    </Row>
                                                    <Row className='textJustify custPadd' style={{ paddingTop: '15px', paddingBottom: '10px' }}>
                                                        <Col>{aspect.descrpition}</Col>
                                                    </Row>
                                                </div>
                                            ))}

                                        </div>
                                    )}
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
    );
}

export default Livelihood;