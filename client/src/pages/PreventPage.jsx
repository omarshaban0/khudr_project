import React from "react";
import Navigation from "../components/Navigation/Navigation";
import '../styles/styles.css';
import '../styles/prevent_styles.css';

const PreventPage = () => {
    return(
        <div className='page'>
            <div className="sticky">
                <Navigation/>
            </div>
            <div className="header1">Prevent</div>
            <p className="basic-text">Resources for general tips and resources to help prevent diseases in your plants and vegetation.</p>
            <h2 className="header2">Links</h2>
            <div className="header-divider"/>
            <a href="https://www.bbg.org/gardening/article/disease_prevention">https://www.bbg.org/gardening/article/disease_prevention</a>
            <a href="https://extension.unh.edu/resource/10-easy-steps-prevent-common-garden-diseases-fact-sheet">https://extension.unh.edu/resource/10-easy-steps-prevent-common-garden-diseases-fact-sheet</a>
            <a href="https://extension.missouri.edu/publications/mg13">https://extension.missouri.edu/publications/mg13</a>
            <div className="blank-area"/>
            <h2 className="header2">Videos</h2>
            <div className="header-divider"/>
            <div className="prevent-table-container">
                <table className="prevent-table">
                    <th></th>
                    <th></th>
                    <tr>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/Fa0CbGQZsCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/AGtazzeCIz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    </tr>
                    <tr>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/drP_-bEhGj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/3mP_X250yaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default PreventPage;