import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading';

const VideoGallery = () => {
const { t }= useTranslation();
  // Replace these with actual YouTube video IDs
  const videos = [
    { id: "0BNCOgc0Rek", title: "" },
    { id: "aRhGKQXKWJw", title: "" },
    { id: "3gqhhdszTqQ", title: "" },
    { id: "wo46cNDi_Os", title: "" },
    { id: "oCSsdsj8hc4", title: "" },
    { id: "oUAIdkBb81c", title: "" },
    { id: "eh_G77gPzlI", title: "" },
    { id: "0rkEP3UTDwA", title: "" },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <Heading heading={t('common.videoGallery')} marginTop="mt-5"/>
      
      {/* 4x4 Video Thumbnails Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {videos.map((video) => (
          <a 
            key={video.id} 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img 
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
              alt={video.title} 
              className="w-64 h-36 rounded-lg shadow-lg hover:opacity-80 transition"
            />
            <p className="mt-2 text-sm font-semibold text-gray-700 text-center">{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;