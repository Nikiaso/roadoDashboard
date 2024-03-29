import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data, options } from "../assets/doughnut-data/data.jsx";
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ analyticData }) => {
  return (
    <div className=" w-full rounded-xl mx-4 bg-white mt-10">
      <h2 className="ml-2">{analyticData.Analysis_title}</h2>
      <div className="w-full h-[150px] mt-2 flex justify-center">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-6 px-2">
        <div className="w-full h-[24px] my-1 flex justify-between bg-gradient-to-r from-[#FFFFFF] to-[#FFCB49] rounded-[4px]">
          <span className="ml-1">Upcoming</span>
          <span className="mr-3">{analyticData.Upcoming}</span>
        </div>
        <div className="w-full h-[24px] my-1 flex justify-between bg-gradient-to-r from-[#FFFFFF] to-[#7464FF] rounded-[4px]">
          <span className="ml-1">Ongoing</span>
          <span className="mr-3">{analyticData.Ongoing}</span>
        </div>
        <div className="w-full h-[24px] my-1 flex justify-between bg-gradient-to-r from-[#FFFFFF] to-[#4FD2B5] rounded-[4px]">
          <span className="ml-1">Completed</span>
          <span className="mr-3">{analyticData.Completed}</span>
        </div>
      </div>
    </div>
  );
};

export default Charts;
