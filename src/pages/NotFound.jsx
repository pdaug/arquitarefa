import React from "react";

import Nav from "../components/Nav";

export default function NotFound() {

    return <>
    
        <Nav/>

        <div className="container my-4 mx-auto text-gray-800">

            <div className="bg-white p-4 text-center">

                <div className="text-4xl">

                    <i className="ph ph-warning"></i>

                </div>

                <div> Ops, infelizmente </div>

                <div> Não conseguimos encontrar a página! </div>

            </div>

        </div>

    </>

}