import { useSelector } from "react-redux";

const ScheduledActivities = () => {
  const scheduledData = useSelector(
    (state) => state.dashboardReducer.data.scheduledActivities
  );

  return (
    <div className="flex flex-col h-[224px] justify-between">
      {scheduledData.map((elm, idx) => (
        <div key={idx} className="text-sm ml-2 py-2 px-2">
          {elm.message}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ScheduledActivities;
