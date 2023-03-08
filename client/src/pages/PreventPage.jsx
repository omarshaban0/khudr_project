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
            <h1>Prevent</h1>
            <p>Resources for general tips and resources to help prevent diseases in diseases your plants and vegetation.</p>
            <h2>Links</h2>
            <div className="divider"/>
            <h2>Videos</h2>
            <div className="divider"/>
            <div className="prevent-table-container">
                <table className="prevent-table">
                    <th></th>
                    <th></th>
                    <tr>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/StLpa5VvcXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/StLpa5VvcXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    </tr>
                    <tr>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/StLpa5VvcXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/StLpa5VvcXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default PreventPage;