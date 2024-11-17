import React from 'react';

interface TableHeaders {
  col1: string;
  col2: string;
  col3: string;
}

interface TableData {
  col1: string | null;
  col2: string;
  col3: string;
}

interface CommonTableProps {
  headers: TableHeaders;
  data: TableData[];
  showDateColumn: boolean;
}

const CommonTable: React.FC<CommonTableProps> = ({ headers, data, showDateColumn }) => {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg shadow-md p-4 mx-auto">
      <table className="w-full border-collapse border border-gray-300 mx-auto mt-4">
        <thead>
          <tr>
            {showDateColumn && (
              <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">
                {headers.col1}
              </th>
            )}
            <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">
              {headers.col2}
            </th>
            <th className="px-6 py-4 border border-gray-300 font-semibold text-gray-700">
              {headers.col3}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              {showDateColumn && (
                <td className="px-6 py-4 border border-gray-300 text-gray-600">
                  {item.col1 || '—'}
                </td>
              )}
              <td className="px-6 py-4 border border-gray-300 text-gray-600">{item.col2}</td>
              <td className="px-6 py-4 border border-gray-300 text-gray-600">{item.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;