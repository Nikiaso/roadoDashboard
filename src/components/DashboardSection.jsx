import Charts from "./Charts.jsx";
import { useSelector } from "react-redux";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import QuickActions from "./QuickActions.jsx";
import AlertCard from "./AlertCard.jsx";

const DashboardSection = () => {
  const analysis = useSelector(
    (state) => state.dashboardReducer.data.chartAnalysis
  );
  const alerts = useSelector(
    (state) => state.dashboardReducer.data.highPriorityAlerts
  );
  return (
    <div className="w-full bg-gradient-to-r from-[#d9d4d4] to-[#d1e1f2]">
      <div className="flex justify-between">
        <h1 className="w-[135px] h-[29px] font-serif ml-5 mt-5 text-3xl">
          Dashboard
        </h1>
        <div className="bg-white rounded-3xl flex w-[132px] h-[32px] mx-5 mt-5 flex justify-around items-center">
          <IoIosSearch />
          <IoIosNotificationsOutline />
          <CiMenuKebab />
        </div>
      </div>
      <div className="flex justify-around w-full -mt-5">
        {analysis.map((analyticData, idx) => (
          <Charts analyticData={analyticData} key={idx} />
        ))}
      </div>
      <QuickActions />
      <h2 className="ml-5 font-medium">High Priority Alerts (14)</h2>
      <div className=" flex rounded-lg justify-between w-full  ">
        {alerts.map((alert, idx) => (
          <AlertCard alertData={alert} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSection;
