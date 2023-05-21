import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import editTask from "../functions/editTask.jsx";
import Modal from "../components/Modal.jsx";

function Edit() {

    const navigate = useNavigate();

    const { id } = useParams();

    async function submitEditTask(event) {

        event.preventDefault();

        const describe = event.target.describe.value;
        
        await editTask({ _id: id, describe });

        navigate("/");

    }

    const header = (<>

        <i className="ph ph-pencil-simple-line"></i>

        <span> Editar tarefa </span> 

    </>);

    const content = (<>

        <form className="flex flex-col gap-4 w-[360px]" onSubmit={ submitEditTask }>

            <textarea className="bg-gray-100 p-2 text-sm resize-none" type="text" name="describe" placeholder="Edite aqui a descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } required></textarea>

            <div className="flex justify-center gap-4">

                <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                
                    <span> Editar </span>
                
                </button>

                <button type="button" onClick={ () => navigate("/") } className="bg-gray-100 text-sm py-1 px-4"> 

                    <span> Cancelar </span> 
                
                </button>

            </div>

        </form>
        
    </>);

    return <Modal header={ header } content={ content }/>

}

export default Edit;