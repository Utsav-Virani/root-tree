import React, { Component, Fragment } from 'react';
import Styles from './Vegis.module.scss';

class Vegis extends Component {

    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <Fragment>
                <div className={`${Styles.vegisContainer} container-fluid`}>
                    <div className={`${Styles.row1} row`}>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                    </div>
                    <div className={`${Styles.row2} row`}>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Vegis;