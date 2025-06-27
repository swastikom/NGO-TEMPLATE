import Card from 'react-bootstrap/Card';
import "./Style.scss";
import { Container, Row, Col } from 'react-bootstrap';
import {Quote} from 'react-bootstrap-icons';

function TestimonialCard(props) {
    const {cardTitle, cardSubtitle, cardContent, classFlag, image} = props;
  return (
    <Card className={classFlag === 1 ?'testiCard1':'testiCard2'} style={{ width: '80%' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={3}>
              <img src={image} width="200" style={{position:"static"}} />
            </Col>
            <Col>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>
              <Quote className="quoteTop" />{cardContent}<Quote style={{transform:"rotate(180Deg)"}} className="quoteDown" />
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;