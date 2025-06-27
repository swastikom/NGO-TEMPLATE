import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/Logo.png';
import Hand from '../assets/Hand.svg';
import './Style.scss';
import { useState } from 'react';
import DonateUsModal  from './Donate/DonateUsModal';
import routes from '../contentFiles/Routes.json'



function Newnavbar() {
const [isVisible,setVisible]=useState(false);
const [isclass,setclass]=useState("");
const [isclass1,setclass1]=useState("");
const [isactive,setactive]=useState(false);
const [modalShow, setModalShow] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
      
  };
  const handleMouseEnter1 = () => {
    setclass("active");
      
  };
  const handleMouseLeave1 = () => {
    setclass("");
      
  };
  const handleMouseEnter2 = () => {
    setclass1("active");
      
  };
  const handleMouseLeave2 = () => {
    setclass1("");
      
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const onModalShow = (flag) => {
    setModalShow(flag);
  }
  const onModalHide =(flag)=>{
    setModalShow(flag);
  }
  const activeStyles = {
    color: 'green',
  };
  // const mynewstyle = {color : isVisible? "white" : "black" , backgroundColor : isVisible? "#1ac5ad" : "" } ;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="customContainer">
      <Navbar.Brand style={{color:"black",fontWeight:"bolder"}}>
        <div className="logoContainer"><img src={Logo}></img></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"  >&emsp;&emsp;&emsp;
          <Nav.Link  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}
          className={isclass} 
           style={{color:"#1ac5ad"}}
          href="/">Home</Nav.Link>&emsp;&emsp;&emsp;
            
          <NavDropdown onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} renderMenuOnMount={true} title="Who We Are">
              <NavDropdown.Item href={routes.aboutUs}>About Us</NavDropdown.Item>
              <NavDropdown.Item href={routes.vissionMission}>Our Vission & Mission</NavDropdown.Item>
              <NavDropdown.Item href={routes.ourJourney}>Our journey</NavDropdown.Item>
              <NavDropdown.Item href={routes.governingBody}>Governing Body</NavDropdown.Item>
              <NavDropdown.Item href={routes.ourTeam}>Our Team</NavDropdown.Item>
              <NavDropdown.Item href={routes.ourSupporters}>Our Supporters</NavDropdown.Item> 
            </NavDropdown>
            &emsp;&emsp;&emsp;
            
            <NavDropdown onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} renderMenuOnMount={true} title="Our Work" id="collapsible-nav-dropdown">
              <NavDropdown.Item href={routes.education}>Education</NavDropdown.Item>
              <NavDropdown.Item href={routes.livelihood}>Livelihood</NavDropdown.Item>
              <NavDropdown.Item href={routes.health}>Health</NavDropdown.Item>
              <NavDropdown.Item href={routes.womenEmpowerment}>Women Empowerment</NavDropdown.Item>
              <NavDropdown.Item href={routes.environment}>Environment & Disaster Response</NavDropdown.Item>
              <NavDropdown.Item href={routes.careAndProtection}>Care & Protection</NavDropdown.Item>
            </NavDropdown>
            &emsp;&emsp;&emsp;
            <NavDropdown onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} renderMenuOnMount={true} title="Get Involved" id="collapsible-nav-dropdown">
              <NavDropdown.Item href={routes.individualSupport}>Individual Support</NavDropdown.Item>
              <NavDropdown.Item href={routes.corporateSupport}>Corporate Support</NavDropdown.Item>
              <NavDropdown.Item href={routes.volunteer}>Volunteers & Internships</NavDropdown.Item>
              <NavDropdown.Item href={routes.workWithUs}>Work With Us</NavDropdown.Item>
            </NavDropdown>
            &emsp;&emsp;&emsp;
            <NavDropdown onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} renderMenuOnMount={true} title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href={routes.annualReport}>Annual Report</NavDropdown.Item>
              <NavDropdown.Item href={routes.auditReport}>Audit Report</NavDropdown.Item>
              <NavDropdown.Item href={routes.legalDocument}>Legal Documents</NavDropdown.Item>
              <NavDropdown.Item href={routes.accredition}>Accreditation & Validation</NavDropdown.Item>
              <NavDropdown.Item href={routes.mediaCoverage}>Media Coverage</NavDropdown.Item>
            </NavDropdown>
            &emsp;&emsp;&emsp;<Nav.Link className={isclass1} onMouseEnter={handleMouseEnter2}
             onMouseLeave={handleMouseLeave2} style={{color:"#1ac5ad"}} href={routes.contact}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        &nbsp;&nbsp;&nbsp;&nbsp; <DonateUsModal />
      </Container>
    </Navbar>
    
  );
}

export default Newnavbar;