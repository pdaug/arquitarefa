import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContextTask from "../context/ContextTask.jsx";
import Modal from "../components/Modal.jsx";
import { submitAddTask } from "../functions/submits.jsx";
import { getExecutor } from "../Storage/Executor.jsx";
import { overflowHidden } from "../functions/overflow.jsx";

function Add() {

    const navigate = useNavigate();

    const { equip } = useParams();

    const { setTasks } = useContext(ContextTask);

    overflowHidden();

    const header = (<>

        <i className="ph-bold ph-check-square-offset"></i>
    
    </>);

    const content = (<form className="flex flex-col gap-4 w-full" onSubmit={ (event) => submitAddTask({ event, navigate, equip, setTasks }) }>

        <select name="category" className="bg-gray-100 p-2 text-sm outline-none rounded-sm" required>

            <option value="1"> Inadiável </option>

            <option value="2"> Neutra </option>

            <option value="3"> Adiável </option>

        </select>

        <input className="bg-gray-100 p-2 text-sm outline-none rounded-sm" type="text" name="executor" placeholder="Executor" minLength={ 1 } maxLength={ 32 } defaultValue={ getExecutor() } required/>

        <textarea className="bg-gray-100 p-2 text-sm resize-none outline-none rounded-sm" type="text" name="describe" placeholder="Digite aqui uma breve descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } required></textarea>

        <div className="flex justify-center gap-4">

            <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm"> 
            
                <span> Adicionar </span>  
            
            </button>

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-2 px-4 rounded-sm"> 

                <span> Voltar </span> 
            
            </button>

        </div>

    </form>);

    return <Modal header={ header } content={ content }/>

}

export default Add;