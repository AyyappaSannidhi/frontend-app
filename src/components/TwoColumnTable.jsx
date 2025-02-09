import { useTranslation } from 'react-i18next';

const TwoColumnTable = ({column1, column2, data, column2Link = false, headerHeight = "h-[100px]", rowHeight = "h-[100px]" }) => {
  return (
      <div className="overflow-x-auto w-[90%] flex justify-center mt-10" >
        <table className="w-[80%] border border-gray-300 shadow-lg rounded-lg">
          {/* Reduce thead height */}
          <thead className="bg-gray-200">
            <tr className={headerHeight}>
              <th className="px-2 py-1 text-black text-center border border-gray-400">{column1}</th>
              <th className="px-2 py-1 text-black text-center border border-gray-400">{column2}</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className={`hover:bg-gray-100 ${rowHeight}`}>
                  <td className="px-2 py-1 border text-black text-center border-gray-400">{item.name}</td>

                  
                    {column2Link ? (
                      <td className="px-2 py-1 border text-center border-gray-400">
                        <a 
                        href={item.value} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 underline"
                        >
                          {item.value}
                        </a>
                      </td>
                    ):
                      <td className="px-2 py-1 border text-black text-center border-gray-400">
                        {item.value}
                      </td>
                    }
                  
                  
                </tr>
              ))
            ) : (
              <tr className="h-[25px]">
                <td colSpan="2" className="px-2 py-1 text-center text-gray-500">
                  No Data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  );
}

export default TwoColumnTable;