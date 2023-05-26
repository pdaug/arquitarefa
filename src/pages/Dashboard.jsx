import React from "react";
import { Outlet } from "react-router-dom";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Nav from "../components/Nav.jsx";
import Skeleton from "../components/Skeleton.jsx";

import getTasks from "../functions/getTasks.jsx";
import sections from "../constants/sections.jsx";
import ContextTask from "../context/ContextTask.jsx";
import { overflowAuto } from "../functions/overflow.jsx";

function Dashboard() {

    const { tasks, loaded, setTasks, setReloadState } = getTasks();

    overflowAuto();

    return <>

        <Nav/>

        { loaded ?

            <ContextTask.Provider value={{ tasks, loaded, setTasks, setReloadState }}>

                <Outlet/>
    
                <div className="container my-4 mx-auto text-gray-800">

                    <div className="flex gap-4 flex-col md:flex-row">

                        {

                            sections.map(function(section) {

                                return <Section key={ crypto.randomUUID() } icon={ section.icon } category={ section.category }>

                                    { tasks.length > 0 ?
                                        
                                        tasks.map(function(task) {

                                            if (task.category === section.category)

                                                return <Card key={ crypto.randomUUID() } task={ task }/>

                                        })

                                    :

                                        <div className="text-center p-4 text-xs text-gray-500">

                                            <div> Vazio </div>

                                        </div>

                                    }

                                </Section>

                            })


                        }

                    </div>

                </div>

            </ContextTask.Provider>

        :

            <Skeleton/>

        }

    </>

}

export default Dashboard;