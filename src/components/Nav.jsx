import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    function openAddTask() {

        navigate("/add");

    }

    return <div className="bg-white p-4">

        <div className="container mx-auto">

            <div className="flex md:flex-row flex-col items-center justify-between md:gap-0 gap-[16px]">

                <div className="text-2xl"> ARQUITAREFA </div>

                <div className="flex gap-4">

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4" onClick={ openAddTask }> 
                        
                        <i className="ph ph-check-square-offset"></i>
                        
                        <span> Adicionar Tarefa </span>  

                    </button>

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                        
                        <i className="ph ph-arrow-clockwise"></i>

                    </button>

                    <button className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                        
                        <i className="ph ph-moon"></i>

                    </button>

                </div>

            </div>

        </div>

    </div>

}

export default Nav;