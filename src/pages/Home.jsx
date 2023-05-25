import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { submitEnterEquip } from "../functions/submits";
import { overflowAuto } from "../functions/overflow";

export default function Home() {
    
    const navigate = useNavigate();

    overflowAuto();

    return <>
    
        <Outlet/>

        <div className="h-screen w-scren flex flex-col items-center justify-center">

            <div className="text-4xl text-center mb-8"> ARQUITAREFA </div>

            <form className="flex gap-4" onSubmit={ (event) => submitEnterEquip({ event, navigate }) }>

                <input className="flex-1 bg-white h-12 px-4 text-sm" type="text" name="equip" placeholder="Digite o nome da equipe aqui" minLength={ 3 } maxLength={ 6 } required/>

                <button className="flex items-center gap-2 bg-black text-white text-sm px-4" type="submit"> 
                    
                    <span> Entrar </span>  

                </button>

            </form>
            
        </div>

    </>

}