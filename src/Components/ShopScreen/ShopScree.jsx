import React, { Component, useEffect, useState } from 'react';

import Style from './Shop.module.scss';
import { dataBase } from '../../FireBaseControler/firebaseConfig';

import Switch from 'react-switch';
import Orders from './Orders.jsx';
import firebase from 'firebase'
import Footer from '../Footer/Footer';

export default function ShopScree() {

    const [imgFruit, setImgFruit] = useState(null);
    const [imgVegis, setimgVegis] = useState(null);
    const [id, setId] = React.useState([]);
    const [idVegis, setIdVegis] = React.useState([]);

    const [checked, setChecked] = useState(false);
    var no = 0;
    const [contVisible, setContVisible] = useState(false);

    const [visibleAddPro, SetVisibleAddPro] = useState("hidden");

    // const handleChange = (name) => {
    //     if (firebase.auth().currentUser) {
    //         console.log(name);
    //         // dataBase.collection('Fruits').doc()

    //     } else {
    //         alert("You have to do login to add the item")
    //     }
    // }


    useEffect(() => {
        const fetchFrtData = async () => {
            const imgFruitData = await dataBase.collection('Fruits').get()
            setId(imgFruitData.docs.map(doc => {
                return { name: doc.data().name, id: doc.id }
            }));
            setImgFruit(imgFruitData.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchFrtData()
    }, [])

    // const handleVegisLoad = useEffect(() => {
    //     const fetchFrtData = async () => {
    //         const imgData = await dataBase.collection('Fruits').get()
    //         setimgVegis(imgData.docs.map(doc => {
    //             return doc.data()
    //         }))
    //     }
    //     fetchFrtData()
    // }, [])

    return (
        <React.Fragment>
            <div className={`${Style.shopCont}`}>
                <div className={`${Style.fruitCont}`}>
                    <div className={`${Style.FruitHead}`}>Fruits</div>
                    <table className={`${Style.froutImgCont} w-100`}>
                        {
                            imgFruit ? imgFruit.map(data => {
                                no += 1;
                                return (
                                    <tr className={`${Style.frtProduct} w-100`}>
                                        <td width="8%">{no}</td>
                                        <td width="25%"><img src={data.photo} height="100" width="100" alt={data.name} /></td>
                                        <td width="25%"><p>{data.name}</p></td>
                                        <td width="8%"><p>{data.price}</p></td>
                                        <td width="9%">
                                            <Switch
                                                className="react-switch"
                                                onChange={() => {
                                                    if (firebase.auth().currentUser) {
                                                        id.forEach(doc => {
                                                            if (doc.name == data.name) {
                                                                dataBase.collection("Fruits").doc(doc.id).set({ ...data, status: !data.status })
                                                            }
                                                        })
                                                    } else {
                                                        alert("You have to do login to add the item")
                                                    }
                                                }}
                                                checked={data.status}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={30}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                id="material-switch"
                                            />
                                        </td>
                                    </tr>
                                )
                            }) : null
                        }
                    </table>
                </div>
                {/* {no = 0} */}
                <div className={`${Style.vegCont}`} onLoad={useEffect(() => {
                    const fetchFrtData = async () => {
                        const imgData = await dataBase.collection('Vegis').get()
                        setIdVegis(imgData.docs.map(doc => {
                            return { name: doc.data().name, id: doc.id }
                        }));
                        setimgVegis(imgData.docs.map(doc => {
                            return doc.data()
                        }))
                    }
                    fetchFrtData()
                }, [])}>
                    <div className={`${Style.vegHead}`}>Vegis</div>
                    <table className={`${Style.vegImgCont} w-100`} >
                        {
                            imgVegis ? imgVegis.map(data => {
                                no += 1;
                                return (
                                    <tr className={`${Style.vegProduct} w-100`}>
                                        <td width="8%">{no}</td>
                                        <td width="25%"><img src={data.photo} height="100" width="100" alt={data.name} /></td>
                                        <td width="25%"><p>{data.name}</p></td>
                                        <td width="8%"><p>{data.price}</p></td>
                                        <td width="9%">
                                            <Switch
                                                className="react-switch"
                                                onChange={() => {
                                                    if (firebase.auth().currentUser) {
                                                        idVegis.forEach(doc => {
                                                            if (doc.name == data.name) {
                                                                dataBase.collection("Vegis").doc(doc.id).set({ ...data, status: !data.status })
                                                            }
                                                        })
                                                    } else {
                                                        alert("You have to do login to add the item")
                                                    }
                                                }}
                                                checked={data.status}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={30}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                id="material-switch"
                                            />
                                        </td>
                                    </tr>
                                )
                            }) : null
                        }
                    </table>
                </div>
            </div>
            {firebase.auth().currentUser ? <div className={`${Style.cartBtn}`} style={!contVisible ? { paddingLeft: "1px" } : { paddingLeft: "0px" }}>
                <div className={`${Style.cartBtnLogo}`} style={!contVisible ? { borderRadius: "10px" } : { borderRadius: "0px" }} onClick={() => { setContVisible(!contVisible) }}>
                    <div>
                        {!contVisible ? <svg
                            width="2.6em"
                            height="2.6em"
                            viewBox="0 0 16 16"
                            class="bi bi-basket3"
                            fill="#656565"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                        </svg> :
                            <svg width="2.6em" height="2.6em" viewBox="0 0 16 16" class="bi bi-x" fill="#656565" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>}
                    </div>
                </div>
                {contVisible ? <Orders /> : null}
            </div> : null}
            {/* <div style={{ marginTop: "6rem" , position:"fixed",bottom: "px" }}>
                <Footer />
            </div> */}
        </React.Fragment>
    );
}