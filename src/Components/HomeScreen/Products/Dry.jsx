import React, { Component, Fragment } from 'react';
import Styles from './Dry.module.scss'

import milk from '../../../Assets/images/Prouduct/milk.webp'
import ghee from '../../../Assets/images/Prouduct/ghee.jpg'
import cheese from '../../../Assets/images/Prouduct/cheese.webp'
import paneer from '../../../Assets/images/Prouduct/paneer.webp'

class Dry extends Component {
    render() {
        return (
            <Fragment>
                <div className={`${Styles.dryContainer} container-fluid`}>
                    <div className={`${Styles.row1} row`}>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}>
                                <img src={milk} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}>
                                <img src={cheese} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}>
                                <img src={ghee} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${Styles.items}`}>
                                <img src={paneer} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dry;