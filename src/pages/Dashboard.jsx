import DashboardSection from "../components/DashboardSection.jsx";
import Highlights from "../components/Highlights.jsx";
import Sidebar from "../components/Sidebar.jsx";
const Dashboard = () => {
  return (
    <div className="flex w-full justify-between">
      <Sidebar />
      <DashboardSection />
      <Highlights />
    </div>
  );
};

export default Dashboard;
