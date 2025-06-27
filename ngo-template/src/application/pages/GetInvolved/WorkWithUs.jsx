import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import GetInvolved from '../../contentFiles/GetInvolved.json';

function WorkWithUs() {
    return (
        <>
            <br></br>
            <Container className="aboutContainer">
                <Row className='rowHeader'>
                    <Col className='textAlignCenter'>
                        <h1>Work With Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className='textJustify custPadd' style={{ paddingBottom: '0px' }}>
                            <Col><b>{GetInvolved.workWithUs.label}</b></Col>
                        </Row>
                        <Row className='textJustify custPadd' style={{ paddingTop: '25px' }}>
                            <Col>{GetInvolved.workWithUs.description}</Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='textJustify custBackJoin custPadd'>
                    <Col><h2>{WhoWeAre.join}</h2></Col>
                </Row>
            </Container>
        </>
    );
}

export default WorkWithUs;