import React from "react";

function Nav() {

    return <div className="bg-white p-4">

        <div className="container mx-auto">

            <div className="flex md:flex-row flex-col items-center justify-between md:gap-0 gap-4">

                <div className="text-2xl"> ARQUITAREFA </div>

                <div className="flex gap-4">

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                        
                        <i className="ph ph-github-logo"></i>

                        <span> GitHub </span>

                    </button>

                </div>

            </div>

        </div>

    </div>

}

export default Nav;