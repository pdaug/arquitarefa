import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContextTask from "../context/ContextTask.jsx";
import deleteTask from "../functions/deleteTask.jsx";
import { Drag } from "../functions/drag.jsx";

function Card(props) {

    const { equip } = useParams();

    const { setTasks } = useContext(ContextTask);

    const navigate = useNavigate();

    return <div onDragStart={ Drag } id={ props.task._id } onDoubleClick={ () => navigate("./edit/" + props.task._id) } draggable>

        <div className="flex flex-col bg-gray-100 p-4 gap-2 rounded-sm">

            <div className="text-normal"> { props.task.describe } </div>
            
            <div className="flex flex-wrap text-gray-500 text-xs gap-2">

                <span> { props.task.executor } </span>

                <span> &bull; </span>

                <span> { new Date(props.task.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) } </span> 

                <span> &bull; </span>
                
                <span className="cursor-pointer" onClick={ async () => await deleteTask({ _id: props.task._id, equip, setTasks }) }> Concluir </span>

                <span> &bull; </span>

                <span className="cursor-pointer" onClick={ () => navigate("./edit/" + props.task._id) }> Editar </span> 

            </div>

        </div>

    </div>

}

export default Card;