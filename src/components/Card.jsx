import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const navigate = useNavigate();

    function openEditTask() {

        const url = "/edit/" + props.task.id;

        navigate(url);

    }

    function openDeleteTask() {

        props.deleteTask({ id: props.task.id })

    }

    function Drag(event) {

        const id = event.target.id;

        event.dataTransfer.setData("card", id);

    }


    return <div onDragStart={ Drag } id={ props.task.id } onDoubleClick={ openEditTask } draggable>

        <div className="flex flex-col bg-gray-100 p-2 gap-2">

            <div className="text-justify"> { props.task.content } </div>
            
            <div className="flex text-gray-500 text-xs gap-2">

                <span> { props.task.resp } </span>

                <span> &bull; </span>

                <span> { props.task.date } </span> 

                <span> &bull; </span>

                <span> { props.task.period } </span> 

            </div>

            <div className="flex text-gray-500 text-xs gap-2">

                <span className="cursor-pointer" onClick={ openDeleteTask }> Concluir </span>

                <span className="cursor-pointer" onClick={ openEditTask }> Editar </span> 

            </div>

        </div>

    </div>

}

export default Card;