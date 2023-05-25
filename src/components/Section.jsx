import React from "react";
import { useParams } from "react-router-dom";

import { AllowDrop, DropUpdate } from "../functions/drop";

function Section(props) {

    const { equip } = useParams();

    return <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
        <div className="flex items-center justify-center gap-2"> 
        
            <i className={ props.icon }></i>
            
        </div>

        <div className="flex flex-col flex-1 gap-4 pb-8" id="section" onDrop={ (event) => DropUpdate({ event, title: props.title, equip }) } onDragOver={ AllowDrop }>

            { props.children }
            
        </div>

    </div>

}

export default Section;