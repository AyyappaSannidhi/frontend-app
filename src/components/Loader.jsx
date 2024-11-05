import './css/loader.css';

const Loader = () => {
  return (
    <div className="loader">
      {[...Array(8)].map((_, i) => (
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