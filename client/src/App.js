import React from "react";
import ReactDOM from "react-dom/client";
//import Navigation from "./components/navbar2"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DiseasesPage from "./pages/DiseasesPage";
import PreventPage from "./pages/PreventPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/diseases" element={<DiseasesPage/>}/>
            <Route path="/prevent" element={<PreventPage/>}/>
        </Routes>
    );
}
export default App;