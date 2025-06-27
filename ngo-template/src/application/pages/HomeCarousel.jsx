import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/slider/1.jpeg';
import image2 from '../assets/slider/2.JPG';
import image3 from '../assets/slider/3.JPG';
import image4 from '../assets/slider/4.JPG';
import image5 from '../assets/slider/5.JPG';
import image6 from '../assets/slider/6.JPG';
import image7 from '../assets/slider/7.JPG';
import image8 from '../assets/slider/8.JPG';
import image9 from '../assets/slider/9.JPG';
function HomeCarousel() {
  return (
    <div class="homeCarousel">
    <Carousel fade>
      <Carousel.Item interval={1500}>
      <img src={image1} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv1'>
          <span className="carouselText color1"><b>HEALTH:</b><br></br></span>
          <span className='carouselTextInner color2'>Providing healthcare for needy.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src={image2} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv2'>
          <span className="carouselText color2"><b>WOMEN EMPOWERMENT:</b><br></br></span>
          <span className='carouselTextInner color1'>Empowering Women through skill training.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item> 
       <Carousel.Item interval={1500}>
      <img src={image3} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv3'>
          <span className="carouselText color2"><b>FARMING:</b><br></br></span>
          <span className='carouselTextInner color1'>Nurturing natural farming.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={1500}>
      <img src={image4} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv3'>
          <span className="carouselText color1"><b>PLANTING TREES:</b><br></br></span>
          <span className='carouselTextInner color2'>Planting and protecting nature.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={1500}>
      <img src={image5} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv4'>
          <span className="carouselText color1"><b>EDUCATION:</b><br></br></span>
          <span className='carouselTextInner color2'>Providing quality education.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={1500}>
      <img src={image6} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv4'>
          <span className="carouselText color1"><b>WELL BEING:</b><br></br></span>
          <span className='carouselTextInner color2'>Advocating for wellbeing.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src={image7} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv2'>
          <span className="carouselText color1"><b>COMMUNITY:</b><br></br></span>
          <span className='carouselTextInner color2'>Empowering community.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src={image8} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv2'>
          <span className="carouselText color1"><b>DIGITAL EDUCATION:</b><br></br></span>
          <span className='carouselTextInner color2'>Empowering student's digital education.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src={image9} class="d-block w-100" alt="..." />
      <Carousel.Caption>
        <div className='carouselDiv2'>
          <span className="carouselText color1"><b>EDUCATION:</b><br></br></span>
          <span className='carouselTextInner color2'>Empowering quality education.</span>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomeCarousel;