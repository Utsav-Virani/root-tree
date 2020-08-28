import React, { Component, useState } from 'react';
import Styles from './Style.module.scss';
import { dataBase } from '../../../FireBaseControler/firebaseConfig'

const Fruits = () => {

    var imgData = {}

    const [count, setCount] = useState(0);

    // const img = storage.ref();

    // const imgUrl = img.child("Products/P0.png").getDownloadURL().then(imgUrl => setUrl(imgUrl))

    // dataBase.collection("products").add({
    //     "name":"Kivi",
    //     "imgUrl":url,
    //     "cost":"0.2"
    // });

    dataBase.collection('products').get().then((query) => {
        query.forEach((doc)=>{
            imgData[count] = doc.data();
            setCount(count+1);
        })
    });


    return (
        <React.Fragment>
            <div className={`container-fluid`}>
                <div className={`w-100 h-100`}>
                    {/* <img src={this.state.imgUrl} alt=""/> */}
                    {/* <img src="" alt="img"/> */}
                    <div className={`${Styles.frtContainer} p-3 w-100 h-100`}>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}></div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}></div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}></div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}></div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Fruits;


// class Fruits extends Component {

//     constructor() {
//         super();
//         this.state = {
//             imgUrl: ""
//         }
//     }

//     render() {

//         // const storage = firebase.storage().ref();

//         // const img = storage.child(`Products/P0.png`).getDownloadURL().then((url) => {
//         //     this.setState({ imgUrl: url });
//         // }).catch((error)=> {console.log(error);})



//         return (
//             <React.Fragment>
//                 <div className={`container-fluid`}>
//                     <div className={`w-100 h-100`}>
//                         {/* <img src={this.state.imgUrl} alt=""/> */}
//                         {/* <img src="" alt="img"/> */}
//                         <div className={`${Styles.frtContainer} p-3 w-100 h-100`}>
//                             <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
//                             <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
//                             <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
//                             <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
//                             <div style={{height: "200px",width:"200px",borderRadius: "15px"}} className={`${Styles.items}`}></div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }