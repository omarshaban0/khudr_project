import React from "react";
import ReactDOM from "react-dom/client";
//import Navigation from "./components/navbar2"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiseasesPage from "./pages/DiseasesPage";
import BlackRotDiseasePage from "./pages/disease-pages/BlackRotDiseasePage";
import AppleScabDiseasePage from "./pages/disease-pages/AppleScabDiseasePage";
import PreventPage from "./pages/PreventPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/home_styles.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/diseases" element={<DiseasesPage/>}/>
                <Route path="/prevent" element={<PreventPage/>}/>
                <Route path="/disease/apple/black-rot" element={<BlackRotDiseasePage/>}/>
                <Route path="/disease/apple/apple-scab" element={<AppleScabDiseasePage/>}/>
            </Routes>
        </div>
    );
}
export default App;