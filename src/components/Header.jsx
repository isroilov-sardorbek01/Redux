import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="bg-blue-300 p-3 mb-[70px]">
            <div className="container flex justify-between items-center header">
                <h1
                    className="text-[35px] text-white cursor-pointer select-none font-bold"
                    draggable={false}
                >
                    8oy 5dars
                </h1>
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        1-ms
                    </NavLink>
                    <NavLink
                        to="/ms2"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        2-ms
                    </NavLink>
                </ul>
                <button className="bg-white p-3 rounded-md text-[20px] font-bold active:scale-90 transition-all cursor-pointer">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Header;
