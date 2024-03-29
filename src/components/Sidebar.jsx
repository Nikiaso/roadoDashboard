import logo from "../assets/sidebar-logo/logo.png";
import dashboard from "../assets/sidebar-logo/dashboard.png";
import add_to_queue from "../assets/sidebar-logo/add_to_queue.png";
import label_important from "../assets/sidebar-logo/label_important.png";
import assignment from "../assets/sidebar-logo/assignment.png";
import shipping from "../assets/sidebar-logo/shipping.png";
import local_shipping from "../assets/sidebar-logo/local_shipping.png";
import parcel_tracking from "../assets/sidebar-logo/parcel_tracking.png";
import buisness_center from "../assets/sidebar-logo/buisness_center.png";
import account_balance_wallet from "../assets/sidebar-logo/account_balance_wallet.png";
import dynamic_feed from "../assets/sidebar-logo/dynamic_feed.png";
import settings from "../assets/sidebar-logo/settings.png";
const Sidebar = () => {
  return (
    <div className="w-20 flex flex-col items-center h-[640px] justify-between">
      <img src={logo} alt="logo" className="w-8 h-[29px] mt-4 mb-3" />
      <img src={dashboard} alt="dashboard" className="w-6 h-6" />
      <img src={add_to_queue} alt="add_to_queue" className="w-6 h-6" />
      <img src={label_important} alt="label_important" className="w-6 h-6" />
      <img src={assignment} alt="assignment" className="w-6 h-6" />
      <img src={shipping} alt="shipping" className="w-6 h-6" />
      <img src={local_shipping} alt="local_shipping" className="w-6 h-6" />
      <img src={parcel_tracking} alt="parcel_tracking" className="w-6 h-6" />
      <img src={buisness_center} alt="buisness_center" className="w-6 h-6" />
      <img
        src={account_balance_wallet}
        alt="account_balance_wallet"
        className="w-6 h-6"
      />
      <img src={dynamic_feed} alt="dynamic_feed" className="w-6 h-6" />
      <img src={settings} alt="settings" className="w-6 h-6" />
    </div>
  );
};

export default Sidebar;
