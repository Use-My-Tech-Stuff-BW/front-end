import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import OwnerHeader from "./OwnerHeader";
import OwnerSideBar from "./OwnerSideBar";


const OwnerDashboard = () => {

    return (
        <div>
            <OwnerHeader />
            <div className='dashboard'>
                <OwnerSideBar />
                <ItemCard />
            </div>
        </div>
    )
}

export default OwnerDashboard;