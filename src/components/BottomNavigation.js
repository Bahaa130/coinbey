import React, { useEffect, useState } from "react";
import money from "../assets/greenmony.png";
import friends from "../assets/friends.png";
import daily from "../assets/daily.png";
import blockchain from "../assets/blockchain.png";
import home from "../assets/home.png";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNavigation() {
        const navigate = useNavigate();
        const location = useLocation();

        const [currentScreen, setCurrentScreen] = useState("/");
        useEffect(() => {
            setCurrentScreen(location.pathname);
        }, [location]);

    return   (<nav className="fixed px-[6px] text-white bottom-0 left-0 right-0 rounded-lg bg-black flex justify-around items-center h-[100px] z-50">
    <div 
        onClick={() => navigate("/")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg  ${
            currentScreen === "/" ? "bg-black" : "bg-gray-900"
        }`}
        >
        <div className="flex flex-col items-center justify-center">
            <img className="w-7 h-7 object-centain" src={home} alt="M" />
            <p className="text-xs text-center">Home</p>
        </div>
    </div>

    <div 
        onClick={() => navigate("/Earn")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg  ${
            currentScreen === "/Earn" ? "bg-black" : "bg-gray-900"
        }`}
        >
        <div className="flex flex-col items-center justify-center">
            <img className="w-9 h-9 object-centain" src={money} alt="M" />
            <p className="text-xs text-center">Earn</p>
        </div>
    </div>

    <div 
        onClick={() => navigate("/Referrals")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg  ${
            currentScreen === "/Referrals" ? "bg-black" : "bg-gray-900"
        }`}
        >
        <div className="flex flex-col items-center justify-center">
            <img className="w-9 h-9 object-centain" src={friends} alt="M" />
            <p className="text-xs text-center">Friends</p>
        </div>
    </div>

    <div 
        onClick={() => navigate("/daily")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg  ${
            currentScreen === "/daily" ? "bg-black" : "bg-gray-900"
        }`}
        >
        <div className="flex flex-col items-center justify-center">
            <img className="w-7 h-7 object-centain" src={daily} alt="M" />
            <p className="text-xs text-center">Daily</p>
        </div>
    </div>

    <div 
        onClick={() => navigate("/airdrop")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg  ${
            currentScreen === "/airdrop" ? "bg-black" : "bg-gray-900"
        }`}
        >
        <div className="flex flex-col items-center justify-center">
            <img className="w-7 h-7 object-centain" src={blockchain} alt="M" />
            <p className="text-xs text-center">AirDrop</p>
        </div>
    </div>

    
</nav>
);
}

export default BottomNavigation;