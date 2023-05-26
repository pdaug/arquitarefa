import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { AllowDrop, DropUpdate } from "../functions/drop";
import ContextTask from "../context/ContextTask";

function Section(props) {

    const { equip } = useParams();

    const { setTasks } = useContext(ContextTask);

    return <div className="bg-white flex flex-col flex-1 p-4 gap-4 rounded-sm">
            
        <div className="flex items-center justify-center gap-2"> 
        
            <i className={ props.icon }></i>
            
        </div>

        <div className="flex flex-col flex-1 gap-4 pb-8" id="section" onDrop={ (event) => DropUpdate({ event, category: props.category, equip, setTasks }) } onDragOver={ AllowDrop }>

            { props.children }
            
        </div>

    </div>

}

export default Section;