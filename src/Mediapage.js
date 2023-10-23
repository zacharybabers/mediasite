import React from "react";
import Header from "./Header.js";
import Mediagrid from "./Mediagrid.js";

const Mediapage = () => {
    return (
        <div>
            <div className='m-10 mx-18 flex justify-center items-center flex-col space-y-5'>
                    <div className="font-inter font-semibold">
                        welcome 👋🏾 click items below to start exploring my stuff, or go to one of the pages above to see a specific type of content.
                    </div>
            </div>
            <div>
                <Mediagrid/>
            </div>
        </div>
    )
}

export default Mediapage;