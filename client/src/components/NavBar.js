import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DiseasesPage from "../pages/DiseasePage";
import PreventPage from "../pages/PreventPage";

const NavBar = () => {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>

                <Link to='/diseases'>Diseases</Link>

                <Link to='/prevent'>Prevent</Link>

            <Routes>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/diseases" exact>
                    <DiseasesPage />
                </Route>

                <Route path="/prevent" exact>
                    <PreventPage />
                </Route>
            </Routes>
            </div>
        </Router>
    );
};

export default NavBar;