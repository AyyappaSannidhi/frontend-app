import { useState } from 'react';
import Modal from 'react-modal';
import Images from "../scripts/carousel"; // Import your images from a separate file
import Heading from './Heading';
import LazyImageWrapper from '../components/LazyImageWrapper';
import { useTranslation } from 'react-i18next';

const images: string[] = Images; // Typing images as an array of strings

Modal.setAppElement('#root');

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for modal open/close
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Index of the selected image
  const [zoom, setZoom] = useState<number>(1); // Default zoom level

  // Open modal and set selected image index
  const openModal = (index: number): void => {
    setSelectedIndex(index);
    setZoom(1); // Reset zoom when opening a new image
    setIsOpen(true);
  };

  // Close modal
  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  // Navigate to previous image
  const previousImage = (): void => {
    setSelectedIndex((selectedIndex ?? 0) - 1 + images.length % images.length);
    setZoom(1); // Reset zoom on image change
  };

  // Navigate to next image
  const nextImage = (): void => {
    setSelectedIndex((selectedIndex ?? 0) + 1 % images.length);
    setZoom(1); // Reset zoom on image change
  };

  // Zoom controls
  const zoomIn = (): void => setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3)); // Limit max zoom
  const zoomOut = (): void => setZoom((prevZoom) => Math.max(prevZoom - 0.25, 0.5)); // Limit min zoom
  const resetZoom = (): void => setZoom(1);

  return (
    <div className="flex flex-col items-center mt-40">
      <Heading heading={t('common.pictureGallery')} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 gap-x-4 p-4 w-full max-w-7xl"> {/* Responsive grid */}
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center cursor-pointer overflow-hidden rounded-md hover:scale-105 transition-transform duration-200"
            onClick={() => openModal(index)}
            style={{ width: '100%', height: '200px' }} // Set width to 100% for responsive images
          >
            <LazyImageWrapper
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="flex items-center justify-center w-full h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative bg-transparent w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-8 right-4 text-white text-3xl font-bold rounded-full p-2 z-50" // Added z-50
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '5rem' }} // No background color for close button
          >
            &times;
          </button>

          {/* Left Arrow (Fixed to Left Edge of the Screen) */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold rounded-full p-2 z-50" // Added z-50
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} // No background color
          >
            &#8592;
          </button>

          {/* Image with Zoom */}
          {selectedIndex !== null && (
            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="transition-transform"
              style={{ transform: `scale(${zoom})`, maxWidth: '90vw', maxHeight: '80vh' }}
            />
          )}

          {/* Right Arrow (Fixed to Right Edge of the Screen) */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold rounded-full p-2 z-50" // Added z-50
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} // No background color
          >
            &#8594;
          </button>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50"> {/* Added z-50 */}
            <button
              onClick={zoomIn}
              className="text-white text-2xl font-bold rounded-full p-2"
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} // No background color for zoom buttons
            >
              +
            </button>
            <button
              onClick={zoomOut}
              className="text-white text-2xl font-bold rounded-full p-2"
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} // No background color for zoom buttons
            >
              -
            </button>
            <button
              onClick={resetZoom}
              className="text-white text-2xl font-bold rounded-full p-2"
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} // No background color for reset button
            >
              Reset
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;