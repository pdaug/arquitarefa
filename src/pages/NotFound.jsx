import React from "react";

import Nav from "../components/Nav";

export default function NotFound() {

    return <>
    
        <Nav/>

        <div className="container my-4 mx-auto text-gray-800 p-4 text-center">

            <div className="text-4xl">

                <i className="ph ph-warning"></i>

                <div> 404 Not found! </div>

            </div>

        </div>

    </>

}