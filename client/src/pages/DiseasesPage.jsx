import React from "react";
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';

const DiseasesPage = () => {
    return(
        <div>
            <div className="sticky">
                <Navigation/>
            </div>
            <h1>Diseases</h1>
        </div>
    );
};

export default DiseasesPage;