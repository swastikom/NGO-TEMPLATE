import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
import gov1 from '../../assets/Team/Secretary, Sajal Kanti Kayal.jpg';
import gov2 from '../../assets/Team/Pranab Kayal.jpeg';
import gov3 from '../../assets/Team/Madhumita Jana.jpeg';
import gov4 from '../../assets/Team/Suparna Kayal.jpg';
import gov5 from '../../assets/Team/Pranita Mondal.jpeg';
import gov6 from '../../assets/Team/Modhusree Jana.jpg';
import gov7 from '../../assets/Team/Moumita Naskar-office execeyuive.jpeg';
import gov8 from '../../assets/Team/Raju Sha.jpeg';
function OurTeam() {
    return (
        <Container className="aboutContainer teamCont">
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1 style={{color:'#1ac5ad'}}>OurTeam</h1>
                </Col>
            </Row>
            <Row className='textJustify custPadd'>
            <Col>{WhoWeAre.ourTeamBrief}</Col>
            </Row>
            <div className="grid-container">
            {WhoWeAre.ourTeam.map((Item, index) => (
                 <>
            <Card className="customcard">
            <Card.Img variant="top" src={index === 0 ? gov1:index === 1 ? gov2:index === 2 ? gov3:index === 3 ? gov4:index === 4 ? gov5:index === 5 ? gov6:index === 6 ? gov7 : index === 7 ? gov8:""} height="250px" />
            <Card.Body>
              <Card.Title style={{color:'#1ac5ad', fontWeight:'bold'}}>{Item.name} ({Item.designation})</Card.Title>
              <Card.Text>
                {Item.brief}
              </Card.Text>
            </Card.Body>
          </Card>
          </>
            ))
                }
               </div>
                
            <Row className='textJustify custBackJoin custPadd'>
                <Col><h2>{WhoWeAre.ourTeam.join}</h2></Col>
            </Row>
        </Container>
    );
}

export default OurTeam;