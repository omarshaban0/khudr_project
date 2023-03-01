import React from "react";
import { Router } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DiseasesPage from "./pages/HomePage";
import PreventPage from "./pages/HomePage";

const NavBar = () => {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>

                <Link to='/diseases'>Diseases</Link>

                <Link to='/prevent'>Prevent</Link>
            </div>

            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/diseases" exact>
                    <DiseasesPage />
                </Route>

                <Route path="/prevent" exact>
                    <PreventPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default NavBar;