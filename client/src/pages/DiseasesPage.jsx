import React from "react";
import Navigation from "../components/Navigation/Navigation";
import DiseaseListEntry from "../components/Diseases/DiseaseListEntry";
import '../styles/styles.css';
import '../styles/diseases_styles.css';

const DiseasesPage = () => {
    return(
        <div>
            <div className="sticky">
                <Navigation/>
            </div>
            <div className="page" >
                <h1 className="header1">Diseases</h1>
                <p className="basic-text">Directory of various plant diseases with information on how to identify them, and how to deal with them</p>
                <div className="disease-list-container"> 
                    <DiseaseListEntry name = "APPLE" plantID="640be3ef7e64d4948f5124f2" />
                    <div className="divider-entries"/>
                </div>
            </div>
        </div>
    );
};

export default DiseasesPage;