import Carousel from './Carousel'
import Heading from './Heading';

const Hero = ({ heading, images }) => { 
  return (
    <div>
      <Heading heading= {heading} marginTop={'mt-8'}/>
      <Carousel images={images} />
    </div>
  );
}

export default Hero

