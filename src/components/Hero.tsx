import Carousel from './Carousel';
import Heading from './Heading';

interface HeroProps {
  heading: string;
  images: string[];
}

const Hero = ({ heading, images }: HeroProps) => {
  return (
    <div>
      <Heading heading={heading} marginTop={'mt-8'} />
      <Carousel images={images} />
    </div>
  );
};

export default Hero;