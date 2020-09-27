import React, { Component } from 'react';
import { Link } from "react-scroll";

import Footer from '../Footer/Footer';
import Styles from './Home.module.scss';
import TeamDetails from './HomeComponents/TeamDetails';
import Fruits from './Products/Fruits';
import Vegis from './Products/Vegis';
import ChooseProduct from './Products/ChooseProduct';
import Dry from './Products/Dry'

// import { dataBase, storage } from '../../FireBaseControler/firebaseConfig';

class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            refresh: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={`${Styles.navBody}`}>
                    <div className={`${Styles.navContent}`}>
                        <div>
                            <span>FRESH</span> from our <span>FARM</span> to your <span>KITCHEN</span>
                        </div>
                        <div>
                            {!sessionStorage.getItem('name') ? <button className={`${Styles.welcomeBtn} btn btn-outline-dark btn-disabled`}>
                                <Link to="content1">Welcome</Link></button> : <button className={`${Styles.welcomeBtn} btn btn-outline-dark btn-disabled`}>
        <Link to="content1">Welcome, {sessionStorage.getItem('name')}</Link></button>}

                        </div>
                    </div>
                </div>

                <div className={`${Styles.content} display-4 container`} id="content1">
                    {/* <div className="container"> */}
                    <span>The Worlds Finest Vegies</span>
                    <div>
                        Thank you for visiting us at root tree, small local business for all your farm-fresh products needs delivering straight to your door.
                        Our experience goes far beyond.
                        The best investment you can ever make in your HEALTH
                        Stay Fresh, Stay Healthy
                    </div>
                    {/* </div> */}
                </div>

                <div className="container-fluid">
                    <div className={`${Styles.cyp} container`}>
                        <div className={`${Styles.txt}`}>Choose Your Product</div>
                        <ChooseProduct />
                    </div>
                </div>

                {/* <div className="container">
                    <div className={`${Styles.ConData}`}>
                        <div>Partner with the best in tea sourcing & processing</div>
                    </div>
                </div> */}

                <div className={`${Styles.fruits}`}>
                    <div className={`${Styles.fruitsContent} container-fluid`} >
                        <div className={`${Styles.txt}`}>Healthy & Fresh <span>Fruites</span></div>
                        <Fruits />
                    </div>
                </div>
                <div className={`${Styles.vegis}`}>
                    <div className={`${Styles.vegisContent} container`}>
                        <div className={`${Styles.txt}`}>Gallery of <span>Vegis</span></div>
                        <Vegis />
                    </div>
                </div>

                <div className={`${Styles.dry}`}>
                    <div className={`${Styles.dryContent} container`}>
                        <div className={`${Styles.txt}`}>Fresh <span>Dairy</span></div>
                        <Dry />
                    </div>
                </div>

                <div className={`${Styles.mission} container-fluid`}>
                    <div className={`${Styles.missionContent} container`}>
                        <span>Mission</span>
                        <div className="mt-2">
                            We provide a full range of services to ensure the sustainable growth of our company.
                            Our team of highly trained and experienced specialists with a deep understanding of all business aspects and perfect knowledge of the process always drive us to easily solve various challenges.
                        </div>
                        <div>
                            Our mission is to impress our clients with unique and innovative solutions, along with an individual approach, and exceptional customer support services.
                        </div>
                    </div>
                </div>

                <div className={`${Styles.ourTeam} container`}>
                    <div className={`${Styles.txt}`}>Our Team</div>
                    <TeamDetails />
                </div>

                <footer style={{ marginTop: "0rem", marginBottom: "0rem", padding: "0" }}>
                    <Footer />
                </footer>

            </React.Fragment>
        );
    }
}

export default (HomeScreen);
