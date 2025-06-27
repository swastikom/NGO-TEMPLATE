import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import './Style.scss';
import Newnavbar from './Newnavbar';
import Footer from './Footer';
import HomeText from '../contentFiles/HomeText.json'
import { Facebook, Instagram, Linkedin, Twitter,Youtube } from 'react-bootstrap-icons';

const Layout = () => {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <>
  <div style={{background:'#1ac5ad', textAlign:'right', paddingRight:'10px', paddingBottom:'10px', paddingTop:'5px'}}>
  <p style={{color:"white", textAlign:"left", position:'absolute',left:'12%', fontSize:'22px'}}><b>K</b>ankura <b>M</b>asat <b>S</b>ocial <b>W</b>elfare <b>S</b>ociety</p>
    <div className="headerMedia">
      <Facebook className="mrgnRght facebook" onClick={()=>window.open(HomeText.facebook,'_blank')}/>
      <Instagram className="mrgnRght instagram" onClick={()=>window.open(HomeText.instagram,'_blank')}/>
      <Linkedin className="mrgnRght linkedin" onClick={()=>window.open(HomeText.linkedin,'_blank')}/>
      <Twitter className="mrgnRght twitter" onClick={()=>window.open(HomeText.twitter,'_blank')}/>
      <Youtube className="mrgnRght youtube" onClick={()=>window.open(HomeText.youtube,'_blank')}/>
    </div>
  </div>
    <Newnavbar/>
      <Outlet />
    <Footer />
    </>
  )
};

export default Layout;