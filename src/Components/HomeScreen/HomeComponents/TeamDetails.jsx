import React from 'react';
import Style from './TeamDetails.module.scss';

import uvImg from '../../../Assets/images/logo/UV.png'
import sahilImg from '../../../Assets/images/logo/Sahil.png'
import nancyImg from '../../../Assets/images/logo/Nancy.png'
import krupaliImg from '../../../Assets/images/logo/Krupali.png'


class Details extends React.Component {
    render() {
        return (
            < div className={`${Style.content}`}>
                <div className={`${Style.contentInner}`} >
                    <div className={`${Style.cardFront}`}>
                        <img src={this.props.img} height="200px" className="mb-4" width="200px" alt="" />
                        {this.props.name}
                    </div>
                    <div className={`${Style.cardBack}`}>
                        <h2>{this.props.position}</h2>
                    </div>
                </div>
            </div>
        );
    }
}


class TeamDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            teamDetail: [
                {
                    name: "Utsav Virani",
                    position: "CEO & CTO",
                    img: uvImg
                },
                {
                    name: "Nancy Gevariya",
                    position: "CBO & CAO",
                    img: nancyImg
                },
                {
                    name: "Krupali Gevariya",
                    position: "CCO",
                    img: krupaliImg
                },
                {
                    name: "Sahil Sheth",
                    position: "COO & CMO",
                    img: sahilImg
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className={`${Style.main} row container-fluid`}>
                    <div className="row w-100" >
                        {
                            this.state.teamDetail.map(
                                data =>
                                    <>
                                        <div className={`${Style.col1} col-6 d-flex`}>
                                            <Details img={data.img} name={data.name} position={data.position} />
                                        </div>
                                    </>
                            )
                        }
                    </div>
                </div>

                {/* <div className={`${Style.main} row container-fluid`}>
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
                                        <img src={nancyImg} height="200px" className="mb-4" width="200px" alt="" />
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
                                        <img src={krupaliImg} height="200px" className="mb-4" width="200px" alt="" />
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
                </div> */}
            </React.Fragment>
        );
    }
}

export default TeamDetails;