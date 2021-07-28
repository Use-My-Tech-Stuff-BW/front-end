import React from "react";
import { Link } from "react-router-dom";
import ItemCards from "./ItemCards";
import OwnerHeader from "./OwnerHeader";
import OwnerSideBar from "./OwnerSideBar";



const OwnerDashboard = () => {

    return (
        <div>
            <OwnerHeader />
            <div className='dashboard'>
                <OwnerSideBar />
                <ItemCards />
            </div>
        </div>
    )
}

export default OwnerDashboard;