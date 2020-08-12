import React, { Component } from 'react';
// const firebase = require('firebase');
import Styles from './Style.module.scss';

class Fruits extends Component {

    constructor() {
        super();
        this.state = {
            imgUrl: ""
        }
    }

    render() {

        // const storage = firebase.storage().ref();

        // const img = storage.child(`Products/P0.png`).getDownloadURL().then((url) => {
        //     this.setState({ imgUrl: url });
        // }).catch((error)=> {console.log(error);})

        return (
            <React.Fragment>
                <div className={`container-fluid`}>
                    <div className={`w-100 h-100`}>
                        {/* <img src={this.state.imgUrl} alt=""/> */}
                        {/* <img src="" alt="img"/> */}
                        <div className={`${Styles.frtContainer} p-3 w-100 h-100`}>
                            <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
                            <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
                            <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
                            <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
                            <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Fruits;