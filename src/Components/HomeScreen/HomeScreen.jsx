import React, { Component } from 'react';
import ControlledCarousel from './HomeComponents/ControlledCarousel';

// import styles from './Home.module.sass';


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
                <div className="container mt-4">
                    {/* {sessionStorage.getItem('email') ? <div className="container display-1 pl-5">
                        Deshboard <br />
                        {sessionStorage.getItem('email')}
                    </div> : <div className="display-1 bg-secondary">
                            Home
                    {console.log(sessionStorage.getItem('email'))}
                        </div>} */}
                        <ControlledCarousel />
                </div>
            </React.Fragment>
        );
    }
}

export default (HomeScreen);