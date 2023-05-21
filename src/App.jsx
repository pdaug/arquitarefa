import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return <BrowserRouter>

    <Routes>

      <Route index path="/" element={ <Home/> }/>

      <Route path="/:equip" element={ <Dashboard/> }>

        <Route path="add" element={ <Add/> }/>

        <Route path="edit/:id" element={ <Edit/> }/>

      </Route>

      <Route path="*" element={ <NotFound/> }/>

    </Routes>

  </BrowserRouter>

}

export default App;