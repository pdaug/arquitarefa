import React from "react";

import { AllowDrop, Drop } from "../functions/drop";

function Section(props) {

    return <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
        <div className="flex items-center justify-center gap-2"> 
        
            <i className={ props.icon }></i>

            <span> { props.title } </span>
            
        </div>

        <div className="flex flex-col flex-1 gap-4 pb-8" id="section" onDrop={ (event) => Drop({ event, title: props.title }) } onDragOver={ AllowDrop }>

            { props.children }
            
        </div>

    </div>

}

export default Section;