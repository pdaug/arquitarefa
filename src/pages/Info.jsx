import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal.jsx";

function Info() {

    const navigate = useNavigate();

    const header = (<>

        <i className="ph ph-info"></i>

        <span> Sobre </span> 

    </>);

    const content = (<div className="flex flex-col gap-2 w-[360px]">

        <div>

            <div className="text-normal"> Ideia </div>

            <div className="text-sm p-4">

                A ideia surgiu para me organizar no dia-a-dia de estudo, programação e atividades em geral. Antes eu usava o meu próprio contato no Whatsapp, mas com uma demanda alta não era possivel ver a prioridade e manter a qualidade nas entregas. Então me desafiei a criar uma tecnologia usando as minhas tecnologias favoritas com apenas o tempo livro dos finais de semana.

            </div>

            <div className="text-normal"> Tecnologias </div>

            <div className="text-sm p-4">

                <ul className="list-disc">
                    <li> React </li>
                    <li> Vite </li>
                    <li> Tailwind CSS </li>
                    <li> Phosphor Icons </li>
                    <li> AOS Animate </li>
                    <li> Serverless </li>
                    <li> Vercel </li>
                    <li> MongoDB </li>
                </ul>

            </div>

            <div className="text-normal"> Contribuição </div>

            <div className="text-sm p-4">
                Caso queira ajudar de alguma forma ou notificar por favor acessar o repositório do GitHub e/ou entre em contato comigo!
            </div>

        </div>

        <div className="text-center">

            <button type="button" onClick={ () => navigate(-1) } className="bg-gray-100 text-sm py-1 px-4"> 

                <span> Voltar </span> 
                
            </button>

        </div>

        
    </div>);

    return <Modal header={ header } content={ content }/>

}

export default Info;