import { useSelector } from "react-redux";

const CompletedActivities = () => {
  const completedData = useSelector(
    (state) => state.dashboardReducer.data.completedActivities
  );

  return (
    <div className="flex flex-col h-[224px] justify-between ">
      {completedData.map((elm, idx) => (
        <div key={idx} className="text-sm py-2 px-2">
          {elm.message}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CompletedActivities;
