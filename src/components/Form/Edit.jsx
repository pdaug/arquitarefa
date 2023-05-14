import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {

    const navigate = useNavigate();

    function EditTask() {

    }

    return <div className="absolute top-0 left-0 bg-[#000a] flex items-center justify-center w-full h-screen">

        <div className="bg-white flex flex-col gap-4 p-4 w-[480px] shadow rounded">

            <div className="flex gap-2 items-center justify-center"> 
            
                <i className="ph-bold ph-check-square-offset"></i>

                <span> Editar tarefa </span> 
                
            </div>

            <form className="flex flex-col gap-4" onSubmit={ EditTask }>

                <textarea 
                    className="bg-gray-100 p-2 text-sm resize-none rounded" 
                    type="text" 
                    name="content"
                    placeholder="Conteúdo" 
                    minLength={ 1 }
                    maxLength={ 255 }
                    autoComplete="false"
                    rows={ 3 }
                    required>
                </textarea>
    
                <div className="flex justify-center gap-4">

                    <button type="submit" className="flex items-center gap-2 bg-gray-800 text-white text-sm py-1 px-4 rounded"> 
                    
                        <i className="ph-bold ph-pencil-simple"></i>

                        <span> Editar </span>  
                    
                    </button>

                    <button type="button" onClick={ () => navigate("/") } className="bg-gray-100 text-sm py-1 px-4 rounded"> 

                        <span> Voltar </span> 
                    
                    </button>

                </div>

            </form>

        </div>

    </div>

}

export default Edit;