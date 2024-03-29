import { useSelector } from "react-redux";

import ScheduledActivities from "./ScheduledActivities";
import CompletedActivities from "./CompletedActivities";

const Highlights = () => {
  const { data } = useSelector((state) => state.dashboardReducer);

  console.log(data);

  return (
    <div className="justify-end w-[360px] m-5 ">
      <h1 className="font-bold">Todays Highlights (14)</h1>
      <p className="text-xs my-1">19 Mar 2024</p>
      <div className="flex w-[360] justify-between mt-3">
        <div className="border border-[#CBCBCB] rounded w-[49%] p-2">
          <p className="text-xs font-medium text-gray-500">Income</p>
          <h1 className="text-green-500 font-medium">100000 CAD</h1>
          <h2 className="text-xs font-medium text-gray-500">
            2 payments received
          </h2>
        </div>
        <div className="border border-[#CBCBCB] rounded w-[49%] p-2">
          <h3 className="text-xs font-medium text-gray-500">Income</h3>
          <h1 className="text-red-500 font-medium">50000 CAD</h1>
          <h3 className="text-xs font-medium text-gray-500">5 payments paid</h3>
        </div>
      </div>
      <div className="flex justify-between mt-5 mb-3">
        <h1 className="font-bold">Completed Activities (14)</h1>
        <a className="underline">View all</a>
      </div>
      <div className="border rounded w-[328px] h-[224px]">
        <CompletedActivities />
      </div>
      <div className="flex justify-between mt-5 mb-3">
        <h1 className="font-bold">Scheduled Activities (14)</h1>
        <a className="underline">View all</a>
      </div>
      <div className="border rounded w-[328px] h-[224px]">
        <ScheduledActivities />
      </div>
    </div>
  );
};

export default Highlights;
