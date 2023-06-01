import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import ContextTask from "../context/ContextTask.jsx";
import { overflowHidden } from "../functions/overflow";
import { submitDeleteTask } from "../functions/submits.jsx";

function Info() {

    const navigate = useNavigate();

    const { id, equip } = useParams();

    const { tasks, loaded, setTasks } = useContext(ContextTask);

    overflowHidden();
    
    const header = (<>

        <i className="ph-bold ph-check-fat"></i>

    </>);

    const content = (<form className="flex flex-col gap-4" onSubmit={ (event) => submitDeleteTask({ event, navigate, id, equip, setTasks }) }>

        <textarea className="bg-gray-100 p-2 text-sm resize-none outline-none rounded-sm" rows={ 4 } defaultValue={ loaded ? tasks.find(item => item._id === id)?.describe : "" } disabled></textarea>

        <div className="flex justify-center gap-4">

            <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-2 px-4 rounded-sm"> 
            
                <span> Concluir </span>
            
            </button>

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-2 px-4 rounded-sm"> 

                <span> Cancelar </span> 
            
            </button>

        </div>

    </form>);

    return <Modal header={ header } content={ content }/>

}

export default Info;