import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { CurrencyRupee, People, PiggyBank, PersonVideo3,Award, CashStack, Wifi } from 'react-bootstrap-icons';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import GetInvolved from '../../contentFiles/GetInvolved.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function IndividualSupport() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Individual Support</h1>
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
                            <Col><b>{GetInvolved.IndividualSupport.label}</b></Col>
                        </Row>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '5rem' }}>
                            <Col>{GetInvolved.IndividualSupport.description}</Col>
                        </Row>
                        <Tabs
                            defaultActiveKey="Monetary Contributions"
                            id="uncontrolled-tab-example"
                            className="subitemTabs"
                            justify
                        >
                            {GetInvolved.IndividualSupport.tasks.map((task, index) => (
                                <Tab eventKey={task.label} title={<span>{index === 0 && (<CurrencyRupee size={40}></CurrencyRupee>)} {index === 1 && (<People size={40}></People>)} {index === 2 && (<PiggyBank size={40}></PiggyBank>)} {index === 3 && (<PersonVideo3 size={40}></PersonVideo3>)} {index === 4 && (<Award size={40}></Award>)} {index === 5 && (<CashStack size={40}></CashStack>)} {index === 6 && (<Wifi size={40}></Wifi>)}<br></br>{task.label}{index === 5 && (<><br></br><br></br></>)}</span>}>
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

export default IndividualSupport;