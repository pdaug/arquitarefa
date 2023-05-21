import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";

function App() {

  return <BrowserRouter>

    <Routes>

      <Route path="/" element={ <Dashboard/> }>

        <Route path="add" element={ <Add/> }/>

        <Route path="edit/:id" element={ <Edit/> }/>

      </Route>

    </Routes>

  </BrowserRouter>

}

export default App;