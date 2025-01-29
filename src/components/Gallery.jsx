import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LazyImageWrapper from '../components/LazyImageWrapper';
import Pagination from '../components/Pagination'; // Import the Pagination component
import { useQuery } from '@tanstack/react-query'; // Import useQuery from react-query
import { getPictureGallery } from '../scripts/userRequests';
import Loader from './Loader';

Modal.setAppElement('#root');

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);

  const { data, isLoading, error } = useQuery({
    queryKey: ['picture_gallery', page, pageSize],
    queryFn: () => getPictureGallery(page, pageSize),
    keepPreviousData: true,
    staleTime: 600000, // Cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window is focused
    refetchOnMount: false, // Don't refetch when component mounts
  });

  const images = data?.images || [];
  const totalPages = data?.total_pages || 1;

  const openModal = (index) => {
    setSelectedIndex(index);
    setZoom(1);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const previousImage = () => {
    setSelectedIndex((selectedIndex ?? 0) - 1 + images.length % images.length);
    setZoom(1);
  };

  const nextImage = () => {
    setSelectedIndex((selectedIndex ?? 0) + 1 % images.length);
    setZoom(1);
  };

  const zoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3));
  const zoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col items-center mt-12 mb-24 relative w-full">
      {/* Pagination moved to the top of the gallery */}
      <div className="w-full max-w-7xl mb-8">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Fixed height for gallery */}
      <div className={`flex flex-col items-center w-full min-h-[500px] max-w-7xl overflow-y-auto overflow-x-hidden`}>
        {/* Loading Spinner */}
        {isLoading ? (
          <Loader dots={5} />
        ) : error ? (
          <div>Error fetching images</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 gap-x-4 p-4 w-full max-w-7xl">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center cursor-pointer overflow-hidden rounded-md hover:scale-105 transition-transform duration-200"
                onClick={() => openModal(index)}
                style={{ width: '100%', height: '200px' }}
              >
                <LazyImageWrapper
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="flex items-center justify-center w-full h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative bg-transparent w-full flex items-center justify-center mt-32">
          <button
            onClick={closeModal}
            className="absolute top-8 right-4 text-white text-3xl font-bold rounded-full p-2 z-50"
          >
            &times;
          </button>
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold rounded-full p-2 z-50"
          >
            &#8592;
          </button>
          {selectedIndex !== null && (
            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="transition-transform"
              style={{ transform: `scale(${zoom})`, maxWidth: '90vw', maxHeight: '80vh' }}
            />
          )}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold rounded-full p-2 z-50"
          >
            &#8594;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
            <button
              onClick={zoomIn}
              className="text-white text-2xl font-bold rounded-full p-2"
            >
              +
            </button>
            <button
              onClick={zoomOut}
              className="text-white text-2xl font-bold rounded-full p-2 "
            >
              -
            </button>
            <button
              onClick={resetZoom}
              className="text-white text-2xl font-bold rounded-full p-2"
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