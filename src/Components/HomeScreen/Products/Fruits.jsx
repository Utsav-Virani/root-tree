import React, { Component } from 'react';
const firebase = require('firebase');

class Fruits extends Component {
    render() {

        const ref = firebase.storage().ref('Products/P0.png');
        const url = ref.getDownloadURL();
        console.log(url);


        return (
            <div>
                Fruits
            </div>
        );
    }
}

export default Fruits;