import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import { submitEditTask } from "../functions/submits.jsx";
import ContextTask from "../context/ContextTask.jsx";

function Edit() {

    const navigate = useNavigate();

    const { id, equip } = useParams();

    const { tasks, loaded } = useContext(ContextTask);
    
    const header = (<>

        <i className="ph ph-pencil-simple-line"></i>

        <span> Editar tarefa </span> 

    </>);

    const content = (<form className="flex flex-col gap-4 w-[360px]" onSubmit={ (event) => submitEditTask({ event, navigate, id, equip }) }>

        <textarea className="bg-gray-100 p-2 text-sm resize-none" type="text" name="describe" placeholder="Edite aqui a descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } defaultValue={ loaded ? tasks.find(item => item._id === id).describe : "" } required></textarea>

        <div className="flex justify-center gap-4">

            <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
            
                <span> Editar </span>
            
            </button>

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-1 px-4"> 

                <span> Cancelar </span> 
            
            </button>

        </div>

    </form>);

    return <Modal header={ header } content={ content }/>

}

export default Edit;