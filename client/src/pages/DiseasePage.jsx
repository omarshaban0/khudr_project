import React from "react";
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';

const DiseasePage = () => {
    return(
        <div>
            <div className="sticky">
                <Navigation/>
            </div>
            <h1>Disease</h1>
        </div>
    );
};

export default DiseasePage;