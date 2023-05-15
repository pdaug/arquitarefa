import React from "react";
import { Outlet } from "react-router-dom";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Nav from "../components/Nav.jsx";

function Dashboard({ tasks, updateTask, deleteTask }) {

    return <>

        <Outlet/>

        <Nav/>

        <div className="container my-4 mx-auto text-gray-800">

            <div className="flex gap-4">

                <Section title="Dia" icon="ph ph-lightning" updateTask={ updateTask }> 

                    { 
                        tasks.map(task => task.period === "Dia" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

                <Section title="Semana" icon="ph ph-clock" updateTask={ updateTask }>

                    {
                        tasks.map(task => task.period === "Semana" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

                <Section title="Mês" icon="ph ph-calendar-blank" updateTask={ updateTask }>

                    { 
                        tasks.map(task => task.period === "Mês" && <Card key={ crypto.randomUUID() } task={ task } deleteTask={ deleteTask }/>)
                    }

                </Section>

            

            </div>

        </div>

    </>

}

export default Dashboard;