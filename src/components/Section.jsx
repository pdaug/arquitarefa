import React from "react";

function Section(props) {

    function AllowDrop(event) {

        event.preventDefault();

    }

    function Drop(event) {

        event.preventDefault();

        const _id = event.dataTransfer.getData("card");

        let category = 1;

        if (props.title === "Dia") category = 1;

        else if (props.title === "Semana") category = 2;
        
        else if (props.title === "Mês") category = 3;

        if (event.target.id === "section") 

            props.updateTask({ _id, category }).then(result => { console.log(result); window.location.reload(); }).catch(console.error);

    }

    return <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
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