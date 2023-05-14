import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import New from "./components/Form/New.jsx";
import Edit from "./components/Form/Edit.jsx";

function App() {

  const [ tasks, setTasks ] = useState([]);

  useEffect(function() {

    console.log(tasks)

  }, [tasks])

  function addTask({ period, resp, content }) {
        
    const id = crypto.randomUUID(); 

    const locale = "pt-BR";

    const options = { day: "2-digit", month: "long", year: "numeric" };

    const date = new Date().toLocaleDateString(locale, options);
        
    setTasks([ ...tasks, { id, period, resp, content, date }]);
        
  }

  function editTask({ id, content }) {

    const index = tasks.findIndex(value => value.id === id);

    const newTasks = [ ...tasks ];

    newTasks[index]["content"] = content;

    setTasks(newTasks);

  }

  function updateTask({ id, period }) {

    const index = tasks.findIndex(value => value.id === id);

    //const result = confirm(`Deseja alterar o periodo da tarefa?`);

    //if (result) {

      const newTasks = [ ...tasks ];

      newTasks[index]["period"] = period;

      setTasks(newTasks);

    //}   

  }

  function deleteTask({ id }) {

    const index = tasks.findIndex(value => value.id === id);

    const result = confirm(`Deseja concluir a tarefa?`);

    if (result) {

      const newTasks = [ ...tasks ];
      
      if (index > -1)

        newTasks.splice(index, 1);

      setTasks(newTasks);

    }

  }

  return <BrowserRouter>

    <Routes>

      <Route path="/" element={ <Dashboard updateTask={ updateTask } deleteTask={ deleteTask } tasks={ tasks }/> }>

        <Route path="new" element={ <New addTask={ addTask }/> }/>

        <Route path="edit/:id" element={ <Edit editTask={ editTask }/> }/>

      </Route>

    </Routes>

  </BrowserRouter>

}

export default App;