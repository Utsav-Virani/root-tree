import React, { Component } from 'react';


import Footer from '../Footer/Footer';
import TeamDetails from '../HomeScreen/HomeComponents/TeamDetails';
import Styles from './About.module.scss';



class AboutScreen extends Component {
    render() {
        return (
            <React.Fragment>
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

export default AboutScreen;