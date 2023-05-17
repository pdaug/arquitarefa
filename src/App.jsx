import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";

import getTasks from "./functions/getTasks.jsx";
import addTask from "./functions/addTask.jsx";
import updateTask from "./functions/updateTask.jsx";
import deleteTask from "./functions/deleteTask.jsx";
import editTask from "./functions/editTask.jsx";

function App() {

  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {

    getTasks()

      .then((result) => setTasks(result.data))

      .catch(console.error);

  }, []);

  return <BrowserRouter>

    <Routes>

      <Route path="/" element={ <Dashboard updateTask={ updateTask } deleteTask={ deleteTask } tasks={ tasks }/> }>

        <Route path="add" element={ <Add addTask={ addTask }/> }/>

        <Route path="edit/:id" element={ <Edit editTask={ editTask }/> }/>

      </Route>

    </Routes>

  </BrowserRouter>

}

export default App;