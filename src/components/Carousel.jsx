import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation on click
import LazyImageWrapper from "./LazyImageWrapper";
import routes from "../js/routes";

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Use navigate for routing to '/image_gallery'

  // Auto slide functionality
  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval); // Cleanup on unmount
    }
  }, [autoSlide, autoSlideInterval]);

  // Number of images visible based on screen size (default is 4)
  const getVisibleImages = () => {
    if (window.innerWidth < 640) return 2; // For mobile, show 2 images
    if (window.innerWidth < 1024) return 3; // For tablets, show 3 images
    return 5; // Default for larger screens
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  // Update visible images on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleImages(getVisibleImages());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go to the next slide (slide by the number of visible images)
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= images.length - visibleImages ? 0 : prev + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? images.length - visibleImages : prev - 1
    );
  };

  // Handle image click to navigate to '/image_gallery'
  const handleImageClick = () => {
    navigate(routes.pictureGalleryRoute);
  };

  return (
    <div className="relative lg:w-[95%]  mx-auto h-[300px] flex items-center justify-center overflow-hidden">
      {/* Custom Arrow Buttons (Left) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        &#10094; {/* Left arrow symbol */}
      </button>

      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${(currentSlide * 100) / visibleImages}%)`,
          width: `${(images.length / visibleImages) * 100}%`, // Adjust width based on visible images
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleImageClick} // On image click, navigate to '/image_gallery'
            style={{ width: `calc(100% / ${visibleImages})` }}
          >
            <LazyImageWrapper
              src={img}
              loading="lazy"
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] object-cover border-4 border-orange-500 rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Custom Arrow Buttons (Right) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        &#10095; {/* Right arrow symbol */}
      </button>

      {/* Dots to indicate current slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: images.length - visibleImages + 1 }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;