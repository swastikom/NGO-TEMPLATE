import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Style.scss';
import { Link } from 'react-router-dom';
const News = () => {
    return <>


<Container className="aboutContainer">
        <Row className='rowHeader'>
            <Col className='textAlignCenter'>
                <h1>NEWs</h1>
            </Col>
        </Row>
        {/* <Row className='textJustify custPadd'>
            <Col>{WhoWeAre.aboutUs}</Col>
        </Row>
        <Row className='textJustify custBackJoin custPadd'>
            <Col><h2>{WhoWeAre.join}</h2></Col>
        </Row> */}
        <div>
        {/* <a href="https://api.codingbeautydev.com" target="_blank" rel="noreferrer">
        <img src="img2.jpg" alt="Coding Beauty logo"height="100"></img> */}
      {/* </a> */}
    </div>
    <iframe src="https://platform.twitter.com/widgets/tweet_button.html">
    <img src="img2.jpg" alt="Coding Beauty logo"height="100"></img>
    </iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jZ7LFwaggyI?si=8hPuUfM15Im0Jfv4" title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay=1; clipboard-write; encrypted-media; gyroscope;  web-share" allowfullscreen></iframe>
    </Container>

    </>
  };
  
  export default News;
