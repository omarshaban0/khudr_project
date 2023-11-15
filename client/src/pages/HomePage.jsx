import React from "react";
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';
import '../styles/home_styles.css';
import logo2 from '../images/khudr_logo_2.png'
import arrow from '../images/arrow.PNG'
import home_disease from '../images/home_disease.jpg'
import home_prevent from '../images/home_prevent.jpg'
import Nav from 'react-bootstrap/Nav';

const HomePage = () => {
    return(
        <div className="home-page">
            <div className="sticky">
                <Navigation/>
            </div>
            <div className="page-container">
                <div className="logo-section">
                    <img src={logo2} alt='logo2' className="logo2"/>
                </div>
                <div className="arrow-section">
                    <img src={arrow} alt='arrow' className="arrow"/>
                </div>
                <div className="home-content">
                    <table className="home-table">
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr>
                            <td><Nav.Link href="/diseases"><h1 className="header1">Diseases</h1></Nav.Link></td>
                            <td></td>
                            <td rowSpan={2}><img src={home_disease} alt='home_disease' className="home-image"/></td>
                        </tr>
                        <tr>
                            <td className="basic-text" colSpan={2}>Directory of various plant diseases with information on how to identify them, and how to deal with them</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><a className="image-link" href="https://www.freepik.com/free-photo/horizontal-closeup-shot-beautiful-green-red-leaf-blurred-background_8280903.htm#query=diseases%20leaf&position=10&from_view=search&track=ais">Image by wirestock on Freepik</a></td>
                        </tr>
                    </table>
                    <div className="divider"></div>
                    <table className="home-table">
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr>
                            <td rowSpan={2}><img src={home_prevent} alt='home_disease' className="home-image"/></td>
                            <td></td>
                            <td className="home-table-td-right"><Nav.Link href="/prevent"><h1 className="header1">Prevent</h1></Nav.Link></td>
                        </tr>
                        <tr>
                            <td className="home-table-td-right" colSpan={2}>Tips and resources to help prevent diseases in diseases your plants and vegetation</td>
                        </tr>
                        <tr>
                            <td><a className="image-link" href="https://www.freepik.com/free-photo/horizontal-closeup-shot-beautiful-green-red-leaf-blurred-background_8280903.htm#query=diseases%20leaf&position=10&from_view=search&track=ais">Image by wirestock on Freepik</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HomePage;