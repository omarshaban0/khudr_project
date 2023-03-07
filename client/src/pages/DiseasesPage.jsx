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
            <div className="page">
                <h1>Diseases</h1>
                <div className="disease-list-container"> 
                    <DiseaseListEntry name="APPLE" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="BLUBERRY" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="CHERRY" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="CORN" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="GRAPE" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="ORANGE" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="PEACH" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="BELL PEPPER" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="POTATO" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="RASPBERRY" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="SOYBEAN" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="SQUASH" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="STRAWBERRY" />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="TOMATO" />
                </div>
            </div>
        </div>
    );
};

export default DiseasesPage;