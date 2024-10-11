import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-black flex items-center justify-between px-5 text-white font-semibold py-4">
            <div><Link to="#"><img className="h-[16px] w-[16px]" src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="" /></Link></div>
            <ul className="flex gap-1">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "px-5 py-2 bg-[#006b41] hover:bg-green-600 rounded-full transition duration-300 ease-in-out transform"
                            : "px-5 py-2 hover:bg-gray-800 rounded-full transition duration-300 ease-in-out transform"
                    }
                >
                    <li className="flex gap-1 items-center"><img height="18px" width="18" src="https://img.icons8.com/?size=100&id=9hNax2SNoOjq&format=png&color=FFFFFF"/>Premium</li>
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive
                            ? "px-5 py-2 bg-[#006b41] hover:bg-green-600 rounded-full transition duration-300 ease-in-out transform"
                            : "px-5 py-2 hover:bg-gray-800 rounded-full transition duration-300 ease-in-out transform"
                    }
                >
                    <li>Sign In</li>
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive
                            ? "px-5 py-2 bg-[#006b41] hover:bg-green-600 rounded-full transition duration-300 ease-in-out transform"
                            : "px-5 py-2 hover:bg-gray-800 rounded-full transition duration-300 ease-in-out transform  "
                    }
                >
                    <li>Sign Up</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;
