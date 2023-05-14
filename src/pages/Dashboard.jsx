import React from "react";
import { Outlet, useNavigate  } from "react-router-dom";

import Section from "../components/Section/index.jsx";
import Card from "../components/Cards/index.jsx";

function Dashboard({ tasks, updateTask, deleteTask }) {

    const navigate = useNavigate();

    return <>

        <Outlet/>

        <div className="bg-white p-4 shadow text-gray-800">

            <div className="container mx-auto flex items-center justify-between">

                <div className="text-2xl tracking-widest"> ARQUITAREFA </div>

                <div className="flex gap-4">

                    <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm py-1 px-4 rounded shadow" onClick={ () => location.reload() }> 
                        
                        <i className="ph-bold ph-arrow-clockwise"></i>

                        <span> Sincronizar </span>  
                    
                    </button>

                    <button onClick={ () => navigate("/new") } className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm py-1 px-4 rounded shadow"> 
                    
                        <i className="ph-bold ph-plus"></i>

                        <span> Adicionar tarefa </span>
                    
                    </button>
                    
                </div>

            </div>

        </div>

        <div className="container my-4 mx-auto text-gray-800">

            <div className="flex gap-4">

                <Section title="Dia" icon="ph-bold ph-lightning" updateTask={ updateTask }> 

                    { 
                        tasks.map(task => task.period === "Dia" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

                <Section title="Semana" icon="ph-bold ph-clock" updateTask={ updateTask }>

                    {
                        tasks.map(task => task.period === "Semana" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

                <Section title="Mês" icon="ph-bold ph-calendar-blank" updateTask={ updateTask }>

                    { 
                        tasks.map(task => task.period === "Mês" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

            </div>

        </div>

    </>

}

export default Dashboard;