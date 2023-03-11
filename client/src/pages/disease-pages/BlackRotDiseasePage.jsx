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
                <p className="basic-text">Black rot is a fungal disease, caused by Diplodia seriata on apple. T
                his disease can cause defoliation, fruit rot, and limb cankers. Leaf symptoms start appea
                ring about one to three weeks after petal fall. Initially, the infections start as tiny purple spots</p>
            </div>
            <div className="disease-table-container">
                <table className="disease-table">
                    <th></th>
                    <th></th>
                    <tr>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Black_rot/02186b4f-a9e1-4d19-ae3d-6cfb0f4b106a___JR_FrgE.S%202828.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230311%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230311T060901Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=48d3e5ca94b16f1b3284494aa41d4f520be2be496fbd984ce344958aa344541780d21c4c1dc7a870646a22abd5abd3500a6c2be2de459c8e7d8ddfd6517bb0a605bb552a63650ca6e1b27f97f89acc1abcc8e9e9e299275a9fe7a12c8e5f202dd7ff9153d309d2d746f156b1e052ab9f5a70055443015554bc821509cdd32cbe452011bc0ca1e735b05656914e5c985362644da99280ad28a2c1ed7185c773b52c52267db4b38249995343386999850a2e06516ddafbd15a19ec5fc853db7d914b01d232370b31f783446ab829e84f9e9094471cea0fbe76ecdbd0226b3b24246f8d637c5c03185058c988a0fb6472f01847118c34dab0dc64fb95dd23d82705"
                            alt="black-rot-1" className="home-image"/>
                        </td>
                        <td>
                        <img src="https://storage.googleapis.com/kagglesdsdata/datasets/277323/658267/color/Apple___Black_rot/073553c2-0e42-4c86-b929-b2201f3f7756___JR_FrgE.S%202819.JPG?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230311%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230311T060901Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=153b7c0beba9922d05a2173b058b317cf48c168dfe322cda07b45195b8ae6ff40e5ad918756ac6e9051860e723b05cab64e53abea2d30f83a6526ce1d0afce9cc3e5cf0537e0f93530660eaf46cf936794b6f6d92da54e6411553c4ada428059196f2f582c37a61b5ea044a2bb7ee54083028df23d3259d02f0cadaec7a52bfecca05d35effd5a7f828f8f115caaf9b46075b53cdfd6831ce85b808535e356c84ccffe7380e3399a9340eb1c1d2bc7b34d117cbe3214d3fc3e2c1727867c0bea1c9eecfb20ee7dde277a284141c1e352bc952d7e744115b05f9b54bd3479aa509fde4c7f5fefc506d365dd8847dc27dfc4b151bba453f2985534aabb378d1352"
                            alt="black-rot-2" className="home-image"/>
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