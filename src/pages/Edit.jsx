import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import ContextTask from "../context/ContextTask.jsx";
import { overflowHidden } from "../functions/overflow";
import { submitEditTask } from "../functions/submits.jsx";

function Edit() {

    const navigate = useNavigate();

    const { id, equip } = useParams();

    const { tasks, setTasks, loaded } = useContext(ContextTask);

    overflowHidden();
    
    const header = (<>

        <i className="ph-bold ph-pencil-simple-line"></i>

    </>);

    const content = (<form className="flex flex-col gap-4" onSubmit={ (event) => submitEditTask({ event, navigate, id, equip, setTasks }) }>

        <select name="category" className="bg-gray-100 p-2 text-sm outline-none rounded-sm" defaultValue={ loaded ? tasks.find(item => item._id === id).category : "" } required>

            <option value="1"> Inadiável </option>

            <option value="2"> Neutra </option>

            <option value="3"> Adiável </option>

        </select>

        <textarea className="bg-gray-100 p-2 text-sm resize-none outline-none rounded-sm" type="text" name="describe" placeholder="Descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } defaultValue={ loaded ? tasks.find(item => item._id === id).describe : "" } required></textarea>

        <div className="flex justify-center gap-4">

            <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm"> 
            
                <span> Editar </span>
            
            </button>

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-2 px-4 rounded-sm"> 

                <span> Cancelar </span> 
            
            </button>

        </div>

    </form>);

    return <Modal header={ header } content={ content }/>

}

export default Edit;