import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import { submitEnterEquip } from "../functions/submits";

export default function Home() {
    
    const navigate = useNavigate();

    return <>
    
        <Nav/>

        <div className="bg-white container p-4 my-4 mx-auto text-gray-800">

            <form className="flex gap-4" onSubmit={ (event) => submitEnterEquip({ event, navigate }) }>

                <input className="flex-1 bg-gray-100 py-1 px-4 text-sm" type="text" name="equip" placeholder="Digite o nome da equipe aqui" minLength={ 3 } maxLength={ 6 } required/>

                <button className="flex items-center gap-2 bg-black text-white text-sm py-1 px-4" type="submit"> 
                    
                    <span> Entrar </span>  

                </button>

            </form>
            
        </div>

        <div className="bg-white flex flex-col md:flex-row container my-4 mx-auto text-gray-800">

            <div className="md:w-1/3 flex flex-col items-center justify-center bg-black text-white p-4 text-4xl">

                <i className="ph ph-check-square-offset"></i>

                <div> Arquitete</div> 

                <div> as suas </div>

                <div> tarefas! </div>

            </div>

            <div className="flex-1 p-4">

                <div className="text-normal"> Resumo </div>

                <div className="text-sm p-4">

                    O Arquitarefa é uma plataforma simples para arquitetar as atividades pendentes, gerenciar as tarefas em equipes e construir uma rotina programada usando as operações básicas e interações simples.

                </div>

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

        </div>

        <div className="container flex flex-col md:flex-row gap-4 mx-auto">

            <div className="bg-white flex-1 p-4 flex flex-col gap-4">

                <div className="text-4xl text-center">

                    <i className="ph ph-cursor-click"></i>
                
                </div>
                
                <div> Práticidade </div>

                <div className="text-sm">
                    Clique e arraste as tarefas entre as sessões para tornar mais eficiente os trabalhos.
                </div>
                
            </div>

            <div className="bg-white flex-1 p-4 flex flex-col gap-4">

                <div className="text-4xl text-center">
                    
                    <i className="ph ph-users"></i>

                </div>

                <div> Para grupos </div>

                <div className="text-sm">
                    Colabore com as tarefas entre seus colegas usando o endereço de navegação compartilhado e tenha maior proveito sobre a ferramenta.
                </div>

            </div>

            <div className="bg-white flex-1 p-4 flex flex-col gap-4">

                <div className="text-4xl text-center">

                    <i className="ph ph-browsers"></i>

                </div>

                <div> Todos dispositivos </div>

                <div className="text-sm">
                    Acesse de qualquer aparelho como celular, notebook, tablets e computadores.
                </div>

            </div>

        </div>

    </>

}