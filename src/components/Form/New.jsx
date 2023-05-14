import React from "react";
import { useNavigate } from "react-router-dom";

function New({ addTask }) {

    const navigate = useNavigate();

    function Submit(event) {

        event.preventDefault();

        const period = event.target.period.value;

        const resp = event.target.resp.value;

        const content = event.target.content.value;

        addTask({ period, resp, content });

        navigate("/");

    }

    return <div className="absolute top-0 left-0 bg-[#000a] flex items-center justify-center w-full h-screen">

        <div className="bg-white flex flex-col gap-4 p-4 w-[480px] shadow rounded">

            <div className="flex gap-2 items-center justify-center"> 
            
                <i className="ph-bold ph-check-square-offset"></i>

                <span> Adicionar tarefa </span> 
                
            </div>

            <form className="flex flex-col gap-4" onSubmit={ Submit }>

                <select 
                    name="period"
                    className="bg-gray-100 p-2 text-sm rounded"
                    required>

                    <option value="Dia" className="text-sm"> Para hoje </option>

                    <option value="Semana" className="text-sm"> Esta semana </option>

                    <option value="Mês" className="text-sm"> Este mês </option>

                </select>

                <input 
                    className="bg-gray-100 p-2 text-sm rounded" 
                    type="text" 
                    name="resp"
                    placeholder="Responsável" 
                    minLength={ 1 }
                    maxLength={ 32 }
                    required/>

                <textarea 
                    className="bg-gray-100 p-2 text-sm resize-none rounded" 
                    type="text" 
                    name="content"
                    placeholder="Conteúdo" 
                    minLength={ 1 }
                    maxLength={ 255 }
                    autoComplete="false"
                    rows={ 3 }
                    required>
                </textarea>
    
                <div className="flex justify-center gap-4">

                    <button type="submit" className="flex items-center gap-2 bg-gray-800 text-white text-sm py-1 px-4 rounded"> 
                    
                        <i className="ph-bold ph-check"></i>

                        <span> Adicionar </span>  
                    
                    </button>

                    <button type="button" onClick={ () => navigate("/") } className="bg-gray-100 text-sm py-1 px-4 rounded"> 

                        <span> Voltar </span> 
                    
                    </button>

                </div>

            </form>

        </div>

    </div>

}

export default New;