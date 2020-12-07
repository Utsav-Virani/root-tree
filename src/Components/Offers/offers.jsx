import React, { Component } from 'react';

import './Offers.scss';

class offers extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Oops!</h1>
                            <h2>We don't have any offers yet!</h2>
                        </div>
                        <a href="/">Go TO Homepage</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default offers;