import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import gov1 from '../../assets/GoverningBody/Pratangsu Bose.jpeg';
import gov2 from '../../assets/GoverningBody/Madhumita Jana.jpeg';
import gov3 from '../../assets/GoverningBody/Secretary, Sajal Kanti Kayal.jpg';
import gov4 from '../../assets/GoverningBody/Pranab Kayal.jpeg';
import gov5 from '../../assets/GoverningBody/Arup Barick.jpeg';
import gov6 from '../../assets/GoverningBody/Mita Kayal 1.jpeg';
import gov7 from '../../assets/GoverningBody/Beauti Mondal.jpeg';

//import { Card } from 'react-bootstrap';
function GoverningBody() {
    return (
        <Container className="aboutContainer govBody">
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1 style={{color:'#1ac5ad'}}>Governing Body </h1>
                </Col>
            </Row>
            <Row className='textJustify custPadd'>
            <Col>This is Governing body brief This is Governing body brief This is Governing body brief</Col>
            </Row>
            <div className="grid-container">
            {WhoWeAre.governingBody.map((item, index) => (
                 <>
            <Card className="customcard">
            <Card.Img variant="top" src={index === 0 ? gov1:index === 1 ? gov2:index === 2 ? gov3:index === 3 ? gov4:index === 4 ? gov5:index === 5 ? gov6:index === 6 ? gov7:""} />
            {item.img}
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold'}}>{item.name} ({item.designation})</Card.Title>
              <Card.Text>
                {item.brief}
              </Card.Text>
            </Card.Body>
          </Card>
          </>
            ))
                }
               </div>
               <h1>{WhoWeAre.governingBody.name}</h1> 
            <Row className='textJustify custBackJoin custPadd'>
                <Col><h2>{WhoWeAre.governingBody.join}</h2></Col>
            </Row>
        </Container>
    );
}

export default GoverningBody;