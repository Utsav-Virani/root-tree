import React, { Component } from 'react';


import FooterStyle from './Footer.module.scss';


class Footer extends Component {
    render() {
        return (
            <div className={`${FooterStyle.footDetails}`}>
                <div className={`${FooterStyle.footer}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                        <path fill="#43A047" fill-opacity="2" d="M0,224L26.7,202.7C53.3,181,107,139,160,138.7C213.3,139,267,181,320,192C373.3,203,427,181,480,165.3C533.3,149,587,139,640,122.7C693.3,107,747,85,800,69.3C853.3,53,907,43,960,80C1013.3,117,1067,203,1120,197.3C1173.3,192,1227,96,1280,85.3C1333.3,75,1387,149,1413,186.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                        <path fill="#2E7D32" fill-opacity="2" d="M0,32L60,53.3C120,75,240,117,360,122.7C480,128,600,96,720,85.3C840,75,960,85,1080,85.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                        </path>
                    </svg>
                    <div className={`${FooterStyle.footCont}`}>
                        <div className={`${FooterStyle.logoCont}`}>
                            <div className={`${FooterStyle.contData}`}>
                                <div style={{ fontSize: "2.5rem" }} className={`${FooterStyle.logo}`}>ROOTTREE</div>
                                <div className={`${FooterStyle.logoBorder}`}></div>
                                <div style={{ fontSize: "1.5rem" }} className={`${FooterStyle.cont}`}>
                                    Buy Helthy, Eat Healthy , Stay Healthy
                                </div>
                            </div>
                            <div className={`${FooterStyle.copyData}`}>
                                <div>&copy; 2020, www.roottree.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;