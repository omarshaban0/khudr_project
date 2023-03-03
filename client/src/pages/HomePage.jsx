import React from "react";
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';
import '../styles/home_styles.css';
import logo2 from '../images/khudr_logo_2.png'
import arrow from '../images/arrow.PNG'

const HomePage = () => {
    return(
        <div className="home-page">
            <div className="sticky">
                <Navigation/>
            </div>
            <div className="logo-section">
                <img src={logo2} alt='logo2' className="logo2"/>
            </div>
            <div className="arrow-section">
                <img src={arrow} alt='arrow' className="arrow"/>
            </div>
            <div>
                <h1>Diseases</h1>
                <p>Directory of various plant diseases with information on how to identify them, and how to deal with them</p>


                <a className="image-link" href="https://www.freepik.com/free-photo/horizontal-closeup-shot-beautiful-green-red-leaf-blurred-background_8280903.htm#query=diseases%20leaf&position=10&from_view=search&track=ais">Image by wirestock on Freepik</a>
            </div>
            <div classname="divider"></div>
            <div>
                <h1>Prevent</h1>
                <p>Tips and resources to help prevent diseases in diseases your plants and vegetation</p>

                <a className="image-link" href="https://www.freepik.com/free-photo/overhead-view-hand-holding-small-fresh-potted-plant_2586588.htm#query=gardening&position=2&from_view=search&track=sph">Image by Freepik</a>
            </div>
        </div>
    );
};

export default HomePage;