import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import { submitAddTask } from "../functions/submits.jsx";

function Add() {

    const navigate = useNavigate();

    const { equip } = useParams();

    const header = <>

        <i className="ph ph-check-square-offset"></i>

        <span> Adicionar tarefa </span> 
    
    </>;

    const content = <form className="flex flex-col gap-4 w-[360px]" onSubmit={ (event) => submitAddTask({ event, navigate, equip }) }>

        <select name="category" className="bg-gray-100 p-2 text-sm" required>

            <option value="Dia"> Para hoje </option>

            <option value="Semana"> Esta semana </option>

            <option value="Mês"> Este mês </option>

        </select>

        <input className="bg-gray-100 p-2 text-sm" type="text" name="executor" placeholder="Executor" minLength={ 1 } maxLength={ 32 } required/>

        <textarea className="bg-gray-100 p-2 text-sm resize-none" type="text" name="describe" placeholder="Digite aqui uma breve descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } required></textarea>

        <div className="flex justify-center gap-4">

            <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
            
                <span> Adicionar </span>  
            
            </button>

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-1 px-4"> 

                <span> Voltar </span> 
            
            </button>

        </div>

    </form>;

    return <Modal header={ header } content={ content }/>

}

export default Add;