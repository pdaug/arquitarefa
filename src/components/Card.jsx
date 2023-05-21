import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import deleteTask from "../functions/deleteTask.jsx";
import { Drag } from "../functions/drag.jsx";
import { categoryToString } from "../functions/categoryConverter.jsx";

function Card(props) {

    const { equip } = useParams();

    const navigate = useNavigate();

    const editURL = "./edit/" + props.task._id;

    return <div onDragStart={ Drag } id={ props.task._id } onDoubleClick={ () => navigate(editURL) } draggable>

        <div className="flex flex-col bg-gray-100 p-2 gap-2">

            <div className="text-justify"> { props.task.describe } </div>
            
            <div className="flex text-gray-500 text-xs gap-2">

                <span> { props.task.executor } </span>

                <span> &bull; </span>

                <span> { new Date(props.task.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) } </span> 

                <span> &bull; </span>

                <span> { categoryToString({ number: props.task.category }) } </span> 

            </div>

            <div className="flex text-gray-500 text-xs gap-2">

                <span className="cursor-pointer" onClick={ async () => await deleteTask({ _id: props.task._id, equip }) }> Concluir </span>

                <span className="cursor-pointer" onClick={ () => navigate(editURL) }> Editar </span> 

            </div>

        </div>

    </div>

}

export default Card;