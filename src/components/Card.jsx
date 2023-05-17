import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const navigate = useNavigate();

    function openEditTask() {

        const url = "/edit/" + props.task._id;

        navigate(url);

    }

    function openDeleteTask() {

        props.deleteTask({ _id: props.task._id })

    }

    function Drag(event) {

        const _id = event.target.id;

        event.dataTransfer.setData("card", _id);

    }

    return <div onDragStart={ Drag } id={ props.task._id } onDoubleClick={ openEditTask } draggable>

        <div className="flex flex-col bg-gray-100 p-2 gap-2">

            <div className="text-justify"> { props.task.describe } </div>
            
            <div className="flex text-gray-500 text-xs gap-2">

                <span> { props.task.executor } </span>

                <span> &bull; </span>

                <span> { new Date(props.task.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) } </span> 

                <span> &bull; </span>

                <span> { props.task.category } </span> 

            </div>

            <div className="flex text-gray-500 text-xs gap-2">

                <span className="cursor-pointer" onClick={ openDeleteTask }> Concluir </span>

                <span className="cursor-pointer" onClick={ openEditTask }> Editar </span> 

            </div>

        </div>

    </div>

}

export default Card;