import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FiImage, FiX } from "react-icons/fi"; // Importing icons from react-icons

const Root = () => {
    const [showBackground, setShowBackground] = useState(false);

    const toggleBackground = () => {
        setShowBackground(!showBackground);
    };

    return (
        <div className="relative min-h-screen">
            {/* Conditional background image */}
            {showBackground && (
                <div className="bg-[url('https://i.ibb.co.com/1r36PP8/bg.png')] bg-cover bg-center absolute inset-0 z-0">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                </div>
            )}

            {/* Toggle button */}
            <button
                onClick={toggleBackground}
                className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md z-20"
                title={showBackground ? "Hide Background" : "Show Background"}
            >
                {/* Toggling icon based on background state */}
                {showBackground ? <FiX size={24} /> : <FiImage size={24} />}
            </button>

            {/* Main content */}
            <div className="relative z-10">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
