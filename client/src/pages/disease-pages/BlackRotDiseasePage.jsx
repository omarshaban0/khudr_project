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
            <h1 className="header1">Apple - Black Rot</h1>
            <div className="disease-description">
                <p className="basic-text">Black rot is a fungal disease, caused by Diplodia seriata on apple. This disease can cause defoliation, fruit rot, and limb cankers. Leaf symptoms start appearing about one to three weeks after petal fall. Initially, the infections start as tiny purple spots</p>
            </div>
            <div className="disease-table-container">
                <table className="disease-table">
                    <th></th>
                    <th></th>
                    <tr>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Black_rot/02186b4f-a9e1-4d19-ae3d-6cfb0f4b106a___JR_FrgE.S%202828.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230305%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230305T133253Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=06fa2c60e6624a9f4c79f57ace213c083d29b98c704e3830d0c811c65a97d227a0a793291d4cd97aacff6b5b3f2660a551a7b996b37a357bd07c9e99151f3f4faac196112fbcd5b03c6d2d146a430e38cf37dddb3e74eccfee725e7a74f67107da144e5eacae15ac01b8d26f48031a1b0f30b0a19a0cd961b49c3cbdf6e6e93e88904b1c2ef3d52bf4f80c3bc6dfdcf58e86689302e24ba083d9e7a9f6c190f744d8a431880c0f5fb3105c3da60faa3478100d0fbfed5f6346434207db10cfd101452501bfe706259a8ed7f6f69abeb10d2d09998f217cc594f181d56889034dac64c4cf3cea2f7b0c6582debc6db623b1d624400e7f5c5da810ec300f02cb4e"
                            alt="black-rot-1" className="home-image"/>
                        </td>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Black_rot/03fd7154-2e33-4fb6-999d-bfc3a3f467fe___JR_FrgE.S%208681.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230305%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230305T133253Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=0169f1056437cb4faff8b328cd2120de4b36d0b10335742e92eea5cbfccf3946f5d0d4bb26d28a8a7c6042c89c5937e569b6249df21d07f8de2e0878b779308d48055a2d43a87110db551a2e43106bcb76559eb5377e1a9d3ee6e24af4ecffdd003fe89f7b308d11302cf84dfa723342a048b25f272da2b67dc48db5137f1ebc8bd9b5b72faf1b9a8e30e08e96f69b059e4a5c57c368cb2a2f0bc31a258820e5fb4974d50f63ecacf87fbfd3f457e9b976d0fe97b33599a4fb4b656ce9c25819042080371c7394f6132fa6ed0958f0dc10f3caa86eb95de128d58838a8d0c28d48e4d1a9adef65c7f0800fb2cdc0996c4362b0f3686ead2e3f95d7a722b31930"
                            alt="black-rot-1" className="home-image"/>
                        </td>
                    </tr>
                </table>
            </div>
            <h2 className="header2">Treatment</h2>
            <div className="header-divider"/>
            <a href="https://www.gardeningknowhow.com/edible/fruits/apples/black-rot-on-apple-trees.htm">https://www.gardeningknowhow.com/edible/fruits/apples/black-rot-on-apple-trees.htm</a>
            <a href="https://extension.umn.edu/plant-diseases/black-rot-apple">https://extension.umn.edu/plant-diseases/black-rot-apple</a>
        </div>
    );
};

export default DiseasePage;