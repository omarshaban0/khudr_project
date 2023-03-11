import React from "react";
import {useParams} from "react-router-dom"
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';

const DiseasePage = (props) => {
    let {id} = useParams();
    console.log(id);
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