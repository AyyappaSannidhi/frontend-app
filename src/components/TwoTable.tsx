import { Link } from "react-router-dom";
import CommonTable from "./CommonTable";
import Heading from './Heading';
import routes from "../scripts/routes";

interface TwoTableProps {
  heading1: string;
  heading2: string;
  headers1: string[];
  headers2: string[];
  showDateColumn1: boolean;
  showDateColumn2: boolean;
  table1: any[]; // Adjust the type according to your table data structure
  table2: any[]; // Adjust the type according to your table data structure
}

const TwoTable: React.FC<TwoTableProps> = ({
  heading1,
  heading2,
  headers1,
  headers2,
  showDateColumn1,
  showDateColumn2,
  table1,
  table2
}) => {
  return (
    <div className="w-full lg:w-[90%] p-4 mx-auto">
      <Link to={routes.poojaScheduleRoute}>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Heading heading={heading1} />
            <div className="mt-4 w-full lg:max-w-[90%] mx-auto"> 
              <CommonTable headers={headers1} data={table1} showDateColumn={showDateColumn1} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Heading heading={heading2} />
            <div className="mt-4 w-full lg:max-w-[90%] mx-auto"> 
              <CommonTable headers={headers2} data={table2} showDateColumn={showDateColumn2} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TwoTable;