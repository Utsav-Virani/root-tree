import React, { useContext, useState } from 'react';
import Styles from './Fruits.module.scss';

import { Modal, Button } from 'react-bootstrap';
import { storage, dataBase } from '../../../FireBaseControler/firebaseConfig';

// import P0 from '../../../Assets/images/products/P0.png';
import P0 from '../../../Assets/images/Prouduct/grapes.webp';
import P1 from '../../../Assets/images/Prouduct/custard-apple.webp';
import P2 from '../../../Assets/images/Prouduct/guava.webp';
import P3 from '../../../Assets/images/Prouduct/orange.webp';
// import P4 from '../../../Assets/images/Prouduct/avocado.webp'
// import P1 from '../../../Assets/images/products/P1.png';
// import P2 from '../../../Assets/images/products/P2.png';
// import P3 from '../../../Assets/images/products/p3.png';
// import P4 from '../../../Assets/images/products/P5.png';
import firebase from 'firebase';




const Fruits = () => {

    const [show, setShow] = useState(false);
    const [file, setFile] = useState(null);

    const [progress, setProgress] = useState("hidden");

    const handleClose = () => setShow(false);



    const handleShow = () => {
        console.log(firebase.auth().currentUser);
        if (firebase.auth().currentUser) {
            setShow(true);
        } else {
            alert("You have to do login to add the item")
        }
    }

    const handleUploadChange = event => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const [name, price] = event.target.elements;

        // Create a root reference
        var storageRef = storage.ref(`Products/fruits/${file.name}`);
        var task = storageRef.put(file);
        setProgress("visible")
        task.on(
            'state_changed',
            function progress(snap) {
                var per = (snap.bytesTransferred / snap.totalBytes) * 100;
                document.getElementById('uploader').value = per;
            },
            function error(err) {
                alert(err)
            },
            function complete() {
                storage.ref().child(`Products/fruits/${file.name}`).getDownloadURL().then(url => {
                    dataBase.collection('Fruits').add({
                        "name": name.value,
                        "price": price.value,
                        "photo": url,
                        "status": false,
                    });
                })
            }
        );

    }

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
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}>
                            <img src={P0} alt="" ></img>
                        </div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}>
                            <img src={P1} alt="" ></img>
                        </div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}>
                            <img src={P2} alt="" ></img>
                        </div>

                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }} className={`${Styles.items}`}>
                            <img src={P3} alt="" ></img>
                        </div>
                        <div style={{ height: "200px", width: "200px", borderRadius: "15px" }}>
                            <div className={`${Styles.itemsAdd}`}>
                                {sessionStorage.getItem("admin") === true ? <div className={`${Styles.itm}`} onClick={handleShow}>
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className={`mt-2`}>ADD PRODUCT!</div>
                                </div> : <a href="/shop" className={`${Styles.itm}`}>
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className={`mt-2`}>more!</div>
                                </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                // show={true}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={`w-100 p-0 ${Styles.modalBody}`}>
                    <div className={`${Styles.topcld}`} >
                        {/* <svg className={`${Styles.topcld1}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#65C0e5" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,197.3C384,192,480,96,576,48C672,0,768,0,864,37.3C960,75,1056,149,1152,165.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#33acdd" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,149.3C672,139,768,85,864,96C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#65C0e5" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,154.7C320,171,400,213,480,229.3C560,245,640,235,720,202.7C800,171,880,117,960,112C1040,107,1120,149,1200,170.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#33acdd" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,133.3C240,160,300,192,360,208C420,224,480,224,540,218.7C600,213,660,203,720,186.7C780,171,840,149,900,160C960,171,1020,213,1080,208C1140,203,1200,149,1260,133.3C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#65C0e5" fillOpacity="1" d="M0,224L30,213.3C60,203,120,181,180,186.7C240,192,300,224,360,224C420,224,480,192,540,181.3C600,171,660,181,720,202.7C780,224,840,256,900,266.7C960,277,1020,267,1080,272C1140,277,1200,299,1260,277.3C1320,256,1380,192,1410,160L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                        </svg>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#33acdd" fill-opacity="1" d="M0,64L40,85.3C80,107,160,149,240,170.7C320,192,400,192,480,176C560,160,640,128,720,133.3C800,139,880,181,960,186.7C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                        </svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#33acdd" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,160C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg> */}
                        {/* <svg className={`${Styles.topcld2}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#65C0e5" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,208C384,171,480,85,576,64C672,43,768,85,864,128C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                        </svg> */}
                    </div>
                    <div className={`w-100 ${Styles.modalForm}`}>
                        <form onSubmit={handleSubmit} className={`${Styles.frmContent} w-100`}>
                            <div className="form-group mb-3 w-100 d-flex justify-content-center align-items-center">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name Of Product :"
                                    required=""
                                    autoFocus=""
                                    autoComplete="off"
                                    className={`${Styles.formGroupControl} form-control`}
                                />
                            </div>
                            <div className="form-group mb-3 w-100 d-flex justify-content-center align-items-center">
                                <input
                                    id="cost"
                                    type="text"
                                    name="price"
                                    autoComplete="off"
                                    placeholder="Price Of Product ($):"
                                    required=""
                                    className={`${Styles.formGroupControl} form-control`}
                                />
                            </div>
                            <div style={{ flexFlow: "column" }} className="form-group mb-3 w-100 d-flex justify-content-center align-items-center">
                                {/* <input
                                    id="img"
                                    type="te"
                                    name="Price"
                                    autoComplete="off"
                                    placeholder="Price Of Product ($):"
                                    required=""
                                    className={`${Styles.formGroupControl} form-control`}
                                /> */}
                                <input
                                    id="img"
                                    type="file"
                                    name="picture"
                                    autoComplete="off"
                                    required=""
                                    onChange={handleUploadChange}
                                    className={` mt-3 ${Styles.formGroupControlFile}`}
                                />
                                <progress style={{ visibility: progress }} className={`mt-3 ${Styles.uploader}`} value="0" max="100" id="uploader">0%</progress>
                            </div>
                            <button
                                type="submit"
                                className={`${Styles.submitBtn} btn btn-dark mt-5`}
                            >
                                Add Product
                            </button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

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