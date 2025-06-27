import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import OurWork from '../../contentFiles/OurWork.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Education() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Education</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            defaultActiveKey="Tiyas School"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {OurWork.education.map((item) => {
                                return (<Tab eventKey={item.label} title={item.label}>
                                    <div className="alternateRows">
                                        <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                                            <Col><b>{item.label}</b></Col>
                                        </Row>
                                        <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                                            <Col>{item.description}</Col>
                                        </Row>
                                        {item.teachers && (
                                            <Row xs={1} md={2} className="g-4" style={{ padding: '45px' }}>
                                                {item.teachers.map((teacher, tIndex) => (
                                                    <Col key={tIndex}>
                                                        <Card border="primary" style={{ width: '38rem', height: '24.5rem' }}>
                                                            <Card.Header>{teacher.name}</Card.Header>
                                                            <Card.Body style={{ overflowX: 'auto' }}>
                                                                <Card.Text>
                                                                    {teacher.ideology}.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        )}
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

export default Education;