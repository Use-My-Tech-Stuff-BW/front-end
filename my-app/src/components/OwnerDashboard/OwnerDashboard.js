import React from "react";
import { Link } from "react-router-dom";
import OwnerHeader from "./OwnerHeader";
import OwnerSideBar from "./OwnerSideBar";


const OwnerDashboard = () => {

    return (
        <div>
            <OwnerHeader />
            <OwnerSideBar />
        </div>
    )
}

export default OwnerDashboard;