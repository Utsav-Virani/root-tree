import React, { Component, Fragment } from 'react';
import Styles from './ChooseProduct.module.scss';

class ChooseProduct extends Component {
    render() {
        return (
            <Fragment>
                <div className={`${Styles.copContainer}`}>
                    <div className={`${Styles.row1} row`}>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                                <div className={`${Styles.innerTxt}`}>Fruits</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                                <div className={`${Styles.innerTxt}`}>Vegis</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.row2} row`}>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                                <div className={`${Styles.innerTxt}`}>Dary</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                                <div className={`${Styles.innerTxt}`}>Tea/Coffee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ChooseProduct;