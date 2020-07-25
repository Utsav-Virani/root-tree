import React, { Component } from 'react';
// import ControlledCarousel from './HomeComponents/ControlledCarousel';

import Footer from '../Footer/Footer';
import Styles from './Home.module.scss';


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
                            <span>FRESH</span> from our <span>FARM</span> to your <span>CUP</span>
                        </div>
                        <div>
                            <button className={`${Styles.welcomeBtn} btn btn-outline-dark btn-disabled`}>Welcome</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* {sessionStorage.getItem('email') ? <div className="container display-1 pl-5">
                        Deshboard <br />
                        {sessionStorage.getItem('email')}
                    </div> : <div className="display-1 bg-secondary">
                            Home
                    {console.log(sessionStorage.getItem('email'))}
                        </div>} */}
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                    <div>Home</div><br />
                </div>

                <footer style={{ marginTop: "2rem", marginBottom: "0rem", padding: "0" }}>
                    <Footer />
                </footer>

            </React.Fragment>
        );
    }
}

export default (HomeScreen);
