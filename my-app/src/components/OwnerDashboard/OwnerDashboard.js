import React from "react";
import NewItemForm from "./addItemForm";
import ItemCards from "./ItemCards";
import OwnerHeader from "./OwnerHeader";
import OwnerSideBar from "./OwnerSideBar";
import { Link } from "react-router-dom";


const OwnerDashboard = () => {

    return (
        <div className='bg-gray-300'>
            <OwnerHeader />
            <div className='dashboard'>
                <OwnerSideBar />
                <ItemCards />
            </div>
            <NewItemForm />
            <Link to='/' className='logout'>Log Out</Link>
        </div>
    )
}

export default OwnerDashboard;