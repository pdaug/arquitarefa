import React from "react";

function Card(props) {

    function Drag(event) {

        const id = event.target.id;

        event.dataTransfer.setData("card", id);

    }

    return <div onDragStart={ Drag } id={ props.task.id } draggable>

        <div className="flex flex-col bg-gray-100 p-2 gap-2 rounded">

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

                <div className="flex items-center gap-2 text-xs"> 

                    <a draggable={ false } onClick={ () => props.deleteTask({ id: props.task.id }) }>

                        <i className="ph-bold ph-check-fat"></i>

                        <span> Concluir </span> 

                    </a>
                    
                </div>

            </div>

        </div>

    </div>

}

export default Card;