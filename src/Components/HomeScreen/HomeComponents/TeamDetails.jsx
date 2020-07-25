import React from 'react';
import Style from './TeamDetails.module.scss';

import uvImg from '../../../Assets/images/logo/UV.png'
import sahilImg from '../../../Assets/images/logo/Sahil.png'

export const TeamDetails = () => {
    return (
        <React.Fragment>
            <div className={`${Style.main} row container-fluid`}>
                <div className="row w-100">
                    <div className={`${Style.col1} col-12 d-flex`}>
                        <div className={`${Style.content}`}>
                            <div className={`${Style.contentInner}`} >
                                <div className={`${Style.cardFront}`}>
                                    <img src={uvImg} height="200px" className="mb-4" width="200px" alt="" />
                                    Utsav Virani
                                </div>
                                <div className={`${Style.cardBack}`}>
                                    <h2>CEO & CTO</h2>
                                </div>
                            </div>
                        </div>

                        <div className={`${Style.content}`}>
                            <div className={`${Style.contentInner}`}>
                                <div className={`${Style.cardFront}`}>
                                    <img src={uvImg} height="200px" className="mb-4" width="200px" alt="" />
                                    Nancy Gevariya
                                </div>
                                <div className={`${Style.cardBack}`}>
                                    <h2>CBO & CAO</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-100">
                    <div className={`${Style.col1} col-12 d-flex`}>
                        <div className={`${Style.content}`}>
                            <div className={`${Style.contentInner}`}>
                                <div className={`${Style.cardFront}`}>
                                    <img src={uvImg} height="200px" className="mb-4" width="200px" alt="" />
                                    Krupali Gevariya
                                </div>
                                <div className={`${Style.cardBack}`}>
                                    <h2>CCO</h2>
                                </div>
                            </div>
                        </div>
                        <div className={`${Style.content}`}>
                            <div className={`${Style.contentInner}`}>
                                <div className={`${Style.cardFront}`}>
                                    <img src={sahilImg} height="200px" className="mb-4" width="200px" alt="" />
                                    Sahil Sheth
                                </div>
                                <div className={`${Style.cardBack}`}>
                                    <h2>COO & CMO</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}