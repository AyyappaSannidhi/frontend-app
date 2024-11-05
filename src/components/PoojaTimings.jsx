const PoojaTimings = ({ data }) => {
  const showDateColumn = data.some(item => item.date);

  return (
    <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg shadow-md p-4 mx-auto">
      <table className="w-full border-collapse border border-gray-300 mx-auto mt-4">
        <thead>
          <tr>
            {showDateColumn && (
              <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">Day</th>
            )}
            <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">Timings</th>
            <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">Pooja</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              {showDateColumn && (
                <td className="px-6 py-4 border border-gray-300 text-gray-600">{item.day || '—'}</td>
              )}
              <td className="px-6 py-4 border border-gray-300 text-gray-600">{item.time}</td>
              <td className="px-6 py-4 border border-gray-300 text-gray-600">{item.pooja}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoojaTimings;