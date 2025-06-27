import React, { useState } from 'react';
import './Donate.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Hand from '../../assets/Hand.svg';
import donate from '../../assets/donate.png';
import QR from '../../assets/qrDonate/QR_code.jpeg'
import GetInvolved from '../../contentFiles/GetInvolved.json';
import TestimonialCard from '../TestimonialCard'

function DonateUsModal(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="info" className="donateButton" onClick={handleShow}><img src={Hand} width={'30'}/>&nbsp;&nbsp;Donate Now</Button>
    <Modal show={show} onHide={handleClose} className="donateModal">
        <Modal.Header closeButton>
          <Modal.Title><img src={donate} width={'50px'} /><b style={{color:'#1ac5ad'}}>Become A Smiling Partner Today & You Can Help The Needy Community Just Like Many!</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
                <Col xs={3}>
                    <img src={QR} />
                </Col>
                <Col>
                    <h5>{GetInvolved.donateUs.text}</h5><br></br>
                    <Card className={'testiCard'} style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title><b>Bank Details</b></Card.Title>
                            <Card.Text>
                                <b>Beneficiary Name: </b> {GetInvolved.donateUs.bankInfo.name}<br></br>
                                <b>Bank Name: </b> {GetInvolved.donateUs.bankInfo.bnkName}<br></br>
                                <b>Branch: </b> {GetInvolved.donateUs.bankInfo.branch}<br></br>
                                <b>A/C Number: </b> {GetInvolved.donateUs.bankInfo.AC}<br></br>
                                <b>IFSC: </b> {GetInvolved.donateUs.bankInfo.ifsc}<br></br>
                                <b>MICR: </b> {GetInvolved.donateUs.bankInfo.micr}<br></br>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="okButtonModal">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}


export default DonateUsModal;