import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const navigate = useNavigate();

    function Drag(event) {

        const id = event.target.id;

        event.target.style.border = "2px dashed #888";

        event.dataTransfer.setData("card", id);

    }

    function DragOff(event) {

        event.target.style.border = "none";

    }

    return <div onDragStart={ Drag } id={ props.task.id } onDragEnd={ DragOff } draggable>

        <div className="group flex flex-col bg-gray-100 p-2 gap-2 rounded">

            <div className="text-justify"> { props.task.content } </div>
            
            <div className="flex flex-col">

                <div className="flex items-center gap-2 text-xs"> 
                
                    <i className="ph-bold ph-user"></i>

                    <span> { props.task.resp } </span>
                    
                </div>

                <div className="flex items-center gap-2 text-xs"> 

                    <i className="ph-bold ph-calendar-blank"></i>

                    <span> { props.task.date } </span> 
                    
                </div>

            </div>

            <div className="group-hover:opacity-100 opacity-0 flex justify-end gap-4 transition">

                <div className="cursor-pointer flex items-center gap-2 text-xs"> 

                    <a draggable={ false } onClick={ () => props.deleteTask({ id: props.task.id }) }>

                        <span> Concluir </span> 

                    </a>
                    
                </div>

                <div className="cursor-pointer flex items-center gap-2 text-xs"> 

                    <a draggable={ false } onClick={ () => navigate(`/edit/${ props.task.id }`) }>

                        <span> Editar </span> 

                    </a>
                    
                </div>

            </div>

        </div>

    </div>

}

export default Card;