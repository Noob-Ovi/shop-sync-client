import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Footer from "../SharedComponents/Footer/Footer";


const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[20%] min-h-full bg-[#D1A054]">
                <Drawer></Drawer>
            </div>
            <div className="flex-1 m-7">
                <Outlet></Outlet>
                <div className="mt-44">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;