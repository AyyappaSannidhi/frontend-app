import Carousel from './Carousel'
import Heading from './Heading';

const Hero = ({ heading, images }) => { 
  return (
    <div>
      <Heading heading= {heading}/>
      <Carousel images={images} />
    </div>
  );
}

export default Hero

