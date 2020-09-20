import React, { Component, Fragment } from 'react';
import Styles from './ChooseProduct.module.scss';


import fruits from '../../../Assets/images/Prouduct/fruits.jpg'
import vegi from '../../../Assets/images/Prouduct/vegi.webp'
import dairy from '../../../Assets/images/Prouduct/dairy.jfif'
import coffee_tee from '../../../Assets/images/Prouduct/Tee_coffee.jpg'


class ChooseProduct extends Component {
    render() {
        return (
            <Fragment>
                <div className={`${Styles.copContainer}`}>
                    <div className={`${Styles.row1} row`}>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                                <img src={fruits} alt="" />
                                <div className={`${Styles.innerTxt}`}>Fruits</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                            <img src={vegi} alt="" />
                                <div className={`${Styles.innerTxt}`}>Vegis</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.row2} row`}>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                            <img src={dairy} alt="" />
                                <div className={`${Styles.innerTxt}`}>Dairy</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${Styles.item}`}>
                            <img src={coffee_tee} alt="" />
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