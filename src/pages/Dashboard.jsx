import React from "react";
import { Outlet } from "react-router-dom";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Nav from "../components/Nav.jsx";
import Skeleton from "../components/Skeleton.jsx";

import getTasks from "../functions/getTasks.jsx";
import sections from "../constants/sections.jsx";

function Dashboard() {

    const { tasks, loaded } = getTasks();

    return <>

        <Outlet/>

        <Nav/>

        { loaded ?

            <div className="container my-4 mx-auto text-gray-800">

                <div className="flex gap-4 flex-col md:flex-row">

                    {

                        sections.map(function(section) {

                            return <Section key={ crypto.randomUUID() } title={ section.title } icon={ section.icon }>

                                {
                                    
                                    tasks.map(function(task) {

                                        if (task.category === section.category)

                                            return <Card key={ crypto.randomUUID() } task={ task }/>

                                    })

                                }

                            </Section>

                        })


                    }

                </div>

            </div>

        :

            <Skeleton/>

        }

    </>

}

export default Dashboard;