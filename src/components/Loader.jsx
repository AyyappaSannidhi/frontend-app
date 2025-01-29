import './css/Loader.css';

const Loader = ({dots = 8}) => {
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