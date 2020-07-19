import React, { Component } from 'react';


import FooterStyle from './Footer.module.scss';


class Footer extends Component {
    render() {
        return (
            <div>
                <div class={`${FooterStyle.footer} jumbotron`}>
                    <center>
                        <div className="display-4">
                            FOOTER
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export default Footer;