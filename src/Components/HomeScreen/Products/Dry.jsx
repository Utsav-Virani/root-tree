import React, { Component, Fragment } from 'react';
import Styles from './Dry.module.scss'

class Dry extends Component {
    render() {
        return (
            <Fragment>
                <div className={`${Styles.dryContainer} container-fluid`}>
                    <div className={`${Styles.row1} row`}>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dry;