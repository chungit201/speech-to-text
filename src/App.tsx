import React from 'react';
import './App.css';
import "./assets/css/style.css"
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import MainLayout from "./pages/layouts/MainLayout";

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
