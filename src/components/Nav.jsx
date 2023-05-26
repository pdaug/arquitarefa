import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    return <div className="container mx-auto p-4">


            <div className="flex md:flex-row flex-col items-center justify-between md:gap-0 gap-4">

                <div className="text-2xl md:my-0 my-4"> ARQUITAREFA </div>

                <div className="flex gap-4">

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm" onClick={ () => navigate("/") }> 
                        
                        <i className="ph ph-house-simple"></i>

                    </button>

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm" onClick={ () => navigate(0) }> 
                        
                        <i className="ph ph-arrow-clockwise"></i>

                    </button>

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm" onClick={ () => navigate("./add") }> 
                        
                        <i className="ph ph-check-square-offset"></i>
                        
                        <span className="hidden md:inline-block"> Adicionar Tarefa </span>  

                    </button>

                </div>

            </div>


    </div>

}

export default Nav;