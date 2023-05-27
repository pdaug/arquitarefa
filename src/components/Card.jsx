import React from "react";
import { useNavigate } from "react-router-dom";

import { Drag } from "../functions/drag.jsx";

function Card(props) {

    const navigate = useNavigate();

    return <div onDragStart={ Drag } id={ props.task._id } onDoubleClick={ () => navigate("./edit/" + props.task._id) } draggable>

        <div className="flex flex-col bg-gray-100 p-4 gap-2 rounded-sm">

            <div className="text-normal"> { props.task.describe } </div>
            
            <div className="flex flex-wrap text-gray-500 text-xs gap-2">

                <span> { props.task.executor } </span>

                <span> &bull; </span>

                <span> { new Date(props.task.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) } </span> 

                <span> &bull; </span>
                
                <span className="cursor-pointer" onClick={ async () => navigate("./confirm/" + props.task._id) }> Concluir </span>

                <span> &bull; </span>

                <span className="cursor-pointer" onClick={ () => navigate("./edit/" + props.task._id) }> Editar </span> 

            </div>

        </div>

    </div>

}

export default Card;