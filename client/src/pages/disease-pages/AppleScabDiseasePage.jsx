import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import '../../styles/styles.css';
import '../../styles/disease_styles.css';

const DiseasePage = () => {
    
    return(
        <div className="page">
            <div className="sticky">
                <Navigation/>
            </div>
            <h1 className="header1">Apple - Apple Scab</h1>
            <div className="disease-description">
                <p className="basic-text">Apple scab is a common disease of plants in the rose family (Rosaceae) that is caused by the ascomycete fungus
                 Venturia inaequalis. While this disease affects several plant genera, including Sorbus,
                  Cotoneaster, and Pyrus, it is most commonly associated with the infection of Malus trees, 
                  including species of flowering crabapple, as well as cultivated apple. The first symptoms of this disease are found
                   in the foliage, blossoms, and developing fruits of affected trees, which develop dark, irregularly-shaped lesions upon infection.</p>
            </div>
            <div className="disease-table-container">
                <table className="disease-table">
                    <th></th>
                    <th></th>
                    <tr>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Apple_scab/03354abb-aa1c-4f9d-a1ef-9f40505cd539___FREC_Scab%203355.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230311%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230311T061918Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=3551892316e5cfd6bd27f8c60d872ecde24e5af92f4f2477988a63b67f59970b56807e659315e979d81c3d50aa94bb5523d4dc753814e33e199225d145086206ce93ffe092838bb071aface1e0e090ccd3b6a5f834858cb454a3cfa68be045c6ce9b924f7aa6fdd57e8f47379c625a803d78e93a9a1a98ff1e90696f406718c7defb0213f9c2221cbb3405ebf92db71aed4f0cb42cb4d2fb256af87d7f7578e5304920459f7d5c3ec652a8a4b8ac956b7d81149a63589613c8bf3c987ef8a65e8c0a0e0cd14bf974b8a2c26e9ee742a52d52eb81ab47e3333dcd70e2fd3b6fdf581d8a9e50a389d79e6c82a70d162f0be4429bf2ae938cb565cd54c6ac75e983"
                            alt="black-rot-1" className="home-image"/>
                        </td>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Apple_scab/0a6812de-7416-4ffe-aba9-307599a02c84___FREC_Scab%202973.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230311%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230311T061918Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=7f60fe3f1dd18f52b98f6340a79b7a47e1d70caa01bbc530914940fdaace02fefd0909de758bfc6c9a099117a60d23f872f0c6e72d6eabaf990639660d2fe865f1be1c9b381e787e8b7db55d341974d3ab90a698cfb6cb32f74d4faec04a821e4fc95dd5ae3241a52a035e79a5e35bc682c9cf52798f536ef138685065e1116574ccdf24a3197b5ac8ee842a79a13a7b68897d065e5988d68b147a690f258e5e2156fcf3db7de3a7fda43dacbc94914d305a96742109aae4a98a8b56f1adc547511833b41aadb80d2258fc915d3d176d5bc53156ad12828a85f1825671f0877013ab36fc3d162e5237bc5c841364142958a3d857ffcce6dbea22301cc6d279f2"
                            alt="black-rot-2" className="home-image"/>
                        </td>
                    </tr>
                </table>
            </div>
            <h2 className="header2">Treatment</h2>
            <div className="header-divider"/>
            <a href="https://extension.umn.edu/plant-diseases/apple-scab">https://extension.umn.edu/plant-diseases/apple-scab</a>
            <a href="https://www.planetnatural.com/pest-problem-solver/plant-disease/apple-scab/">https://www.planetnatural.com/pest-problem-solver/plant-disease/apple-scab/</a>
        </div>
    );
};

export default DiseasePage;