import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit({ editTask }) {

    const navigate = useNavigate();

    const { id } = useParams();

    function back() {

        navigate("/");

    }

    function submitEditTask(event) {

        event.preventDefault();

        const content = event.target.content.value;

        editTask({ id, content }).then(result => console.log(result)).catch(console.error);

        navigate("/");

    }

    return <div className="bg-[#6666] absolute top-0 left-0 flex items-center justify-center w-full h-screen">

        <div className="bg-white flex flex-col gap-4 p-4">

            <div className="flex gap-2 items-center justify-center"> 

                <i className="ph ph-pencil-simple-line"></i>

                <span> Editar tarefa </span> 

            </div>

            <form className="flex flex-col gap-4 w-[360px]" onSubmit={ submitEditTask }>

                <textarea className="bg-gray-100 p-2 text-sm resize-none" type="text" name="content" placeholder="Edite aqui a descrição da tarefa..." minLength={ 8 } maxLength={ 256 } autoComplete="false" rows={ 4 } required></textarea>
    
                <div className="flex justify-center gap-4">

                    <button type="submit" className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4"> 
                    
                        <span> Editar </span>
                    
                    </button>

                    <button type="button" onClick={ back } className="bg-gray-100 text-sm py-1 px-4"> 

                        <span> Cancelar </span> 
                    
                    </button>

                </div>

            </form>

        </div>

    </div>

}

export default Edit;