import Carousel from 'react-bootstrap/Carousel';
import "./Style.scss";
import TestimonialCard from './TestimonialCard';
import HomeText from '../contentFiles/HomeText.json';
import img1 from '../assets/TestimonialPics/Payel Ghosh.jpg'
import img2 from '../assets/TestimonialPics/Niladri.jpg'
import img3 from '../assets/TestimonialPics/Nishita Soumya.jpg'
import img4 from '../assets/TestimonialPics/Tapas Chakrabarti.jfif'
import img5 from '../assets/TestimonialPics/Gaver Chatterjee.jfif'

function TestimonialCarousel() {
  return (
    <Carousel data-bs-theme="dark" style={{height:'340px',display:'flex'}}>
      <Carousel.Item>
      <TestimonialCard image={img1} classFlag={1} cardTitle={'Payel Ghosh'} cardSubtitle={'subtitle1'} cardContent={HomeText.PayelGhosh} />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialCard image={img2} classFlag={1} cardTitle={'Neeladri'} cardSubtitle={'subtitle2'} cardContent={HomeText.Neeladri} />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialCard image={img3} classFlag={1} cardTitle={'Nishita Somya'} cardSubtitle={'subtitle3'} cardContent={HomeText.NishitaSomya} />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialCard image={img4} classFlag={1} cardTitle={'Tapas Chakrabarti'} cardSubtitle={'subtitle5'} cardContent={HomeText.TapasChakrabarti} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialCard image={img5} classFlag={1} cardTitle={'Gaver Chatterjee'} cardSubtitle={'subtitle5'} cardContent={HomeText.GaverChatterjee} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TestimonialCarousel;