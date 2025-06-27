import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeText from '../contentFiles/HomeText.json'
import ContactText from '../contentFiles/ContactText.json';
import { Facebook, Instagram, Linkedin, Twitter,Youtube, PhoneVibrate,EnvelopeAt } from 'react-bootstrap-icons';

const Contact = () => {
    return(
      <Container fluid className="aboutContainer">
      <Row>
        <Col className="textAlignCenter"><h1>{ContactText.contactUs}</h1><br></br></Col>
      </Row>
      <Row>
        <Col>
        {/* <Card className="customcard"> */}
        <iframe
                src={ContactText.googleMap}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </Col>
        <Col xs={4} style={{textAlign:"left"}}>
          <p>{ContactText.addressLine1}<br></br>
          {ContactText.addressLine2}<br></br>
          {ContactText.addressLine3}<br></br>
          {ContactText.pin}</p>
          <p><PhoneVibrate size={'26px'} style={{color:"#1ac5ad"}} />&nbsp;{ContactText.phone}</p>
          <p><EnvelopeAt style={{color:"#1ac5ad"}} />&nbsp;{ContactText.email}</p>
        </Col>
        <Col>
        <div className="socialMediaIcons">
        <Facebook className="mrgnRght facebook" onClick={()=>window.open(HomeText.facebook,'_blank')}/>
        <Instagram className="mrgnRght instagram" onClick={()=>window.open(HomeText.instagram,'_blank')}/>
        <Linkedin className="mrgnRght linkedin" onClick={()=>window.open(HomeText.linkedin,'_blank')}/>
        <Twitter className="mrgnRght twitter" onClick={()=>window.open(HomeText.twitter,'_blank')}/>
        <Youtube className="mrgnRght youtube" onClick={()=>window.open(HomeText.youtube,'_blank')}/>
        </div>
        </Col>
      </Row>
    </Container>
    )
    
  };
  
  export default Contact;