import React from "react";
import menuburger from "./media/images/Misc/menu-burger.svg"


const Nameplate = () => {
    return (
        <div className="flex justify-around font-inter max-sm:text-3xl sm:text-3xl md:text-5xl lg:text-5xl text-center font-semibold">
            <a href="/">
                <h1>
                    Zach Babers™
                </h1>
            </a>
        </div>
    );
}

export default Nameplate;

/*
<button className="md:hidden">
                <img src={menuburger} className="" alt='menu burger' />
            </button>
*/