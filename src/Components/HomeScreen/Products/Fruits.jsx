import React, { Component } from 'react';
const firebase = require('firebase');

class Fruits extends Component {

    constructor() {
        super();
        this.state = {
            imgUrl: ""
        }
    }

    render() {

        const storage = firebase.storage().ref();

        const img = storage.child(`Products/P0.png`).getDownloadURL().then((url) => {
            this.setState({ imgUrl: url });
        }).catch((error)=> {console.log(error);})

        return (
            <React.Fragment>
                <div>
                    Fruits
                    <div className="container">
                        {/* <img src={this.state.imgUrl} alt=""/> */}
                        {/* <img src="" alt="img"/> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Fruits;