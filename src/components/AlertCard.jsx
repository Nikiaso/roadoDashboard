import driver from "../assets/alerts-logo/driver.png";
import temp from "../assets/alerts-logo/temp.png";
const AlertCard = ({ alertData }) => {
  return (
    <div className="bg-white rounded-2xl p-4 m-7">
      <div className="flex justify-between">
        <div className="flex items-center py-3">
          <img
            src={alertData.Alert_title.includes("Driver") ? driver : temp}
            className="w-9 h-9 bg-slate-500 rounded-lg p-2"
          />
          <div className="mx-2">
            <h1 className="font-bold">{alertData.Alert_title}</h1>
            <p className="font-medium text-xs text-slate-700">
              Load No : {alertData.Load_no}, Bill To : {alertData.Bill_to}
            </p>
          </div>
        </div>
        <h2 className="font-medium mt-2">{alertData.Date}</h2>
      </div>
      <p className="">{alertData.Description}</p>
      <div
        className="flex items-center
      justify-end mt-5"
      >
        <a>Ignore</a>
        <button className="bg-[#1A3875] text-white px-4 py-2 rounded-md mx-6">
          Resolve
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
