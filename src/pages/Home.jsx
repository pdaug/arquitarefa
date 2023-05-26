import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { submitEnterEquip } from "../functions/submits";
import { overflowAuto } from "../functions/overflow";

export default function Home() {
    
    const navigate = useNavigate();

    overflowAuto();

    return <>
    
        <Outlet/>

        <div className="absolute top-4 right-4">

            <a href="https://github.com/pdaug/arquitarefa">

                <div className="bg-black text-white flex items-center justify-center h-12 w-12 rounded-sm">
                    
                    <i className="ph ph-github-logo"></i>

                </div>

            </a>
            
        </div>

        <div className="h-screen w-scren flex flex-col items-center justify-center">

            <div className="text-4xl text-center mb-8"> ARQUITAREFA </div>

            <div className="text-normal text-center mb-8"> Arquitete as suas tarefas em equipe. </div>

            <form className="flex" onSubmit={ (event) => submitEnterEquip({ event, navigate }) }>

                <input className="flex-1 bg-white h-12 px-4 text-sm outline-none rounded-sm" type="text" name="equip" placeholder="Entre na equipe..." minLength={ 3 } maxLength={ 6 } autoComplete="false" autoCorrect="false" autoFocus required/>

                <button className="flex items-center gap-2 bg-black text-white text-sm px-4 rounded-sm" type="submit"> 
                    
                    <span> Entrar </span>  

                </button>

            </form>
            
        </div>

    </>

}