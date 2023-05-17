import React from "react";
import { useNavigate } from "react-router-dom";

function Add({ addTask }) {

    const navigate = useNavigate();

    function back() {

        navigate("/");

    }

    function submitAddTask(event) {

        event.preventDefault();

        const category = event.target.category.value;

        const executor = event.target.executor.value;

        const describe = event.target.describe.value;

        addTask({ category, executor, describe });

        navigate("/");

    }

    return <div className="bg-[#6666] absolute top-0 left-0 flex items-center justify-center w-full h-screen">

        <div className="bg-white flex flex-col gap-4 p-4">

            <div className="flex gap-2 items-center justify-center"> 

                <i className="ph ph-check-square-offset"></i>

                <span> Adicionar tarefa </span> 

            </div>

            <form className="flex flex-col gap-4 w-[360px]" onSubmit={ submitAddTask }>

                <select name="category" className="bg-gray-100 p-2 text-sm" required>

                    <option value="1"> Para hoje </option>

                    <option value="2"> Esta semana </option>

                    <option value="3"> Este mês </option>

                </select>

                <input className="bg-gray-100 p-2 text-sm" type="text" name="executor" placeholder="Executor" minLength={ 1 } maxLength={ 32 } required/>

                <textarea className="bg-gray-100 p-2 text-sm resize-none" type="text" name="describe" placeholder="Digite aqui uma breve descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } required></textarea>
    
                <div className="flex justify-center gap-4">

                    <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                    
                        <span> Adicionar </span>  
                    
                    </button>

                    <button type="button" onClick={ back } className="bg-gray-100 text-sm py-1 px-4"> 

                        <span> Voltar </span> 
                    
                    </button>

                </div>

            </form>

        </div>

    </div>

}

export default Add;