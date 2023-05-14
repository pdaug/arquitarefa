import React from "react";

function Section(props) {

    function AllowDrop(event) {

        event.preventDefault();

    }

    function Drop(event) {

        event.preventDefault();

        const id = event.dataTransfer.getData("card");

        if (event.target.id === "section") 

            props.updateTask({ id, period: props.title });

    }

    return <div className="flex flex-col flex-1 bg-white p-4 gap-4 shadow rounded">
            
        <div className="flex items-center justify-center gap-2"> 
        
            <i className={ props.icon }></i>

            <span> { props.title } </span>
            
        </div>

        <div className="flex flex-col flex-1 gap-4 pb-8" id="section" onDrop={ Drop } onDragOver={ AllowDrop }>

            { props.children }
            
        </div>

    </div>

}

export default Section;