import React, { Component, useEffect, useState } from 'react';

import Style from './Shop.module.scss';
import { dataBase } from '../../FireBaseControler/firebaseConfig';

import Switch from 'react-switch';
import firebase from 'firebase'
import Footer from '../Footer/Footer';

export default function ShopScree() {

    const [imgFruit, setImgFruit] = useState(null);
    const [imgVegis, setimgVegis] = useState(null);
    const [id, setId] = React.useState([]);
    const [idVegis, setIdVegis] = React.useState([]);

    const [checked, setChecked] = useState(false);

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
                                return (
                                    <tr className={`${Style.frtProduct} w-100`}>
                                        <td width="8%">No.</td>
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
                                return (
                                    <tr className={`${Style.vegProduct} w-100`}>
                                        <td width="8%">No.</td>
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
            <div style={{ marginTop: "6rem" }}>
                <Footer />
            </div>
        </React.Fragment>
    );
}