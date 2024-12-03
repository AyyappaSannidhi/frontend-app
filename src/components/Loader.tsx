import './css/Loader.css';

interface LoaderProps {
  dots?: number;
}

const Loader: React.FC<LoaderProps> = ({dots = 8}) => {
  return (
    <div className="loader">
      {[...Array(dots)].map((_, i) => (
        <div
          key={i}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Loader;