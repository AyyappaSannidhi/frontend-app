import { Link } from "react-router-dom";
import CommonTable from "./CommonTable";
import Heading from './Heading';
import routes from "../js/routes";

const TwoTable = ({ heading1, heading2, headers1,headers2,showDateColumn1,showDateColumn2, table1, table2 }) => {
  return (
    <div className="w-full lg:w-[90%] p-4 mx-auto"> {/* Main container centered */}
      <Link to={routes.poojaScheduleRoute}>
      {/* Display both tables side by side with equal spacing */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        
        {/* First table with centered content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <Heading heading={heading1} />
          <div className="mt-4 w-full lg:max-w-[90%] mx-auto"> {/* Center table */}
            <CommonTable headers={headers1} data={table1} showDateColumn={showDateColumn1} />
          </div>
        </div>
        
        {/* Second table with centered content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <Heading heading={heading2} />
          <div className="mt-4 w-full lg:max-w-[90%] mx-auto"> {/* Center table */}
          <CommonTable headers={headers2} data={table2} showDateColumn={showDateColumn2} />
          </div>
        </div>

      </div>
      </Link>
      
    </div>
  );
};

export default TwoTable;