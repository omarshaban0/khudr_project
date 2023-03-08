import React from "react";
import Navigation from "../components/Navigation/Navigation";
import DiseaseListEntry from "../components/Diseases/DiseaseListEntry";
import DiseaseListEntryApple from "../components/Diseases/DiseaseListEntryApple";
import DiseaseListEntryCorn from "../components/Diseases/DiseaseListEntryCorn";
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
                    <DiseaseListEntryApple />
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="BLUEBERRY"/>
                    <div className="divider-entries"/>
                    <DiseaseListEntry name="CHERRY" />
                    <div className="divider-entries"/>
                    <DiseaseListEntryCorn name="CORN" />
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