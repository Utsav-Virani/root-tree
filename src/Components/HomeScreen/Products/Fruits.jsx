import React, { useState } from 'react';
import Styles from './Style.module.scss';
import { dataBase } from '../../../FireBaseControler/firebaseConfig'

import P0 from '../../../Assets/images/products/P0.png';
import P1 from '../../../Assets/images/products/P1.png';
import P2 from '../../../Assets/images/products/P2.png';
import P3 from '../../../Assets/images/products/p3.png';
import P4 from '../../../Assets/images/products/p4.png';

const Fruits = () => {

    // const [img, setImg] = useState([]);

    // const [count, setCount] = useState(0);

    // const img = storage.ref();

    // const imgUrl = img.child("Products/P0.png").getDownloadURL().then(imgUrl => setUrl(imgUrl))

    // dataBase.collection("products").add({
    //     "name":"Kivi",
    //     "imgUrl":url,
    //     "cost":"0.2"
    // });

    // const db = dataBase.collection('products').get().then((query) => {
    //     query.forEach(doc => {
    //         return
    //     })
    // });

    // dataBase.ref('products/fruits/home').child("kivi").set(
    //     {
    //         name: "kivi",
    //         url: "ImgUrl",
    //         cost: 0.2,
    //     }
    // );

    // dataBase.ref('products/fruits/home').child("kivi").once('value').then(data =>{
    //     console.log(data.val().name);
    // });


    return (
        <React.Fragment>
            <div className={`container-fluid`}>
                <div className={`w-100 h-100`}>
                    {/* <img src={img[0].data().imgUrl} alt=""/> */}
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