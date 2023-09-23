import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Mainpart = () => {
    return (
        <div className="max-w-7xl mx-auto rounded-md">
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainpart;