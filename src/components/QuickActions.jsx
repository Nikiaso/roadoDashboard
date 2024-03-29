import driver from "../assets/action-logo/driver.png";
import fleet_icons from "../assets/action-logo/fleet_icons.png";
import rv_hookup from "../assets/action-logo/rv_hookup.png";
import truck from "../assets/action-logo/truck.png";
import vehicle from "../assets/action-logo/vehicle.png";

const QuickActions = () => {
  return (
    <div className="my-4">
      <h1 className="ml-5 my-2 text-lg font-medium">Quick Actions</h1>
      <div className="flex bg-white w-[95%] mx-10 rounded-2xl justify-around h-[74px] items-center font-medium px-3 py-12">
        <div className="h-[42px] flex flex-col justify-center items-center">
          <img src={fleet_icons} alt="fleet_icons" className="h-5 w-5" />
          <p>Create Indents</p>
        </div>
        <div className="h-[42px] flex flex-col justify-center items-center">
          <img src={vehicle} alt="vehicle" className="h-5 w-5" />
          <p>Add Vehicle</p>
        </div>
        <div className="h-[42px] flex flex-col justify-center items-center">
          <img src={rv_hookup} alt="rv_hookup" className="h-5 w-5" />
          <p>Add Trailer</p>
        </div>
        <div className="h-[42px] flex flex-col justify-center items-center">
          <img src={driver} alt="driver" className="h-5 w-5" />
          <p>Add Driver</p>
        </div>
        <div className="h-[42px] flex flex-col justify-center items-center">
          <img src={truck} alt="truck" className="h-5 w-5" />
          <p>Add Indents</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
