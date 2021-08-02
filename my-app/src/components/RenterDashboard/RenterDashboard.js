import React from "react";
import { Link } from "react-router-dom";
import ItemCards from "./ItemCards";
import RenterHeader from "./RenterHeader";
import RenterSideBar from "./RenterSideBar";


const RenterDashboard = () => {

    return (
        <div className='bg-gray-300'>
            <RenterHeader />
            <RenterSideBar />
            <div className='cards'>
                <ItemCards />
            </div>
            <div className='text-gray-300'>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
                <div>empty space</div>
            </div>
            
            
            
            <Link to='/' className='logout'>Log Out</Link>
        </div>
    )
}

export default RenterDashboard;