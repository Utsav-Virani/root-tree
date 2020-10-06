import React, { Component, useEffect, useState } from 'react';

import Style from './UserShop.module.scss';
import { dataBase, db } from '../../../FireBaseControler/firebaseConfig';
import Footer from '../../Footer/Footer'

import Switch from 'react-switch';
import firebase from 'firebase'


export default function UserShopScree(async) {

    const [imgFruit, setImgFruit] = useState(null);
    const [imgVegis, setimgVegis] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [id, setId] = React.useState([]);
    // const [cartItmCount, setCartItmCount] = useState([]);
    const cartItmCount = [];
    const [idVegis, setIdVegis] = useState([]);
    const productNames = []

    useEffect(() => {
        const fetchFrtData = async () => {
            if (sessionStorage.getItem(`userId`)) {
                const cartData = await db.ref('Cart').child(sessionStorage.getItem(`userId`)).once('value')
                cartData.forEach(data => {
                    // console.log(data.key);
                    // console.log(data.val().count);
                    // console.log("-----------");
                    sessionStorage.setItem(data.key, data.val().count)
                });
            }
        }
        fetchFrtData()
    }, [])

    // console.log(count);
    // var demo = 0;
    const addToCart = async (name, items) => {
        console.log(name, " - ", items);

        db.ref('Cart').child(sessionStorage.getItem("userId")).child(name).set({
            name: name,
            count: parseInt(items),
        })

        sessionStorage.setItem(name, items)

        // console.log(name, '->', demo);
        // setCartCount(demo);
        // const cartConnection = await dataBase.collection('Cart').where("userId", "==", sessionStorage.getItem('userId')).get()
        // // const temp = {};
        // // sessionStorage.setItem(name, parseInt(items))
        // // productNames.map(names => { temp[names] = 0; if (names === name) { temp[name] = parseInt(items) } })
        // if (cartConnection.empty) {
        //     dataBase.collection('Cart').add({
        //         userId: sessionStorage.getItem("userId"),
        //         [name]: [name, items],
        //     })
        //     demo = items
        // } else {
        //     cartConnection.docs.map(doc => {
        //         dataBase.collection('Cart').doc(doc.id).update({ [name]: [name, items - demo] })
        //     })
        // }
    }

    return (
        <React.Fragment>
            <div className={`${Style.shopCont}`}>
                <div className={`${Style.fruitCont}`} onLoad={useEffect(() => {
                    const fetchFrtData = async () => {
                        const imgFruitData = await dataBase.collection('Fruits').where("status", "==", true).get()
                        setId(imgFruitData.docs.map(doc => {
                            return { name: doc.data().name, id: doc.id }
                        }));
                        setImgFruit(imgFruitData.docs.map(doc => {
                            return doc.data()
                        }))
                    }
                    fetchFrtData()
                }, [])}>
                    <div className={`${Style.FruitHead}`}>Fruits</div>
                    <table className={`${Style.froutImgCont} w-100`}>
                        <thead className={`w-100`}>
                            <tr className={`${Style.frtProduct} bg-warning w-100`}>
                                <td width="8%">No.</td>
                                <td width="25%">Photo</td>
                                <td width="25%">Name</td>
                                <td width="8%">Price</td>
                                <td width="9%"></td>
                            </tr>
                        </thead>
                        <tbody className="w-100">
                            {
                                imgFruit ? imgFruit.map(data => {
                                    productNames.push(data.name);

                                    // console.log(sessionStorage.getItem(data.name));
                                    sessionStorage.getItem(data.name) === 'NaN' ? sessionStorage.setItem(data.name, 0) : sessionStorage.getItem(data.name);
                                    return (
                                        <tr key={data.name} className={`${Style.frtProduct} w-100`}>
                                            <td width="8%">No.</td>
                                            <td width="25%"><img src={data.photo} height="100" width="100" alt={data.name} /></td>
                                            <td width="25%"><p>{data.name}</p></td>
                                            <td width="8%"><p>{data.price}</p></td>
                                            <td width="9%">
                                                {firebase.auth().currentUser ? <div style={{ border: "2px #191919 solid", borderRadius: "10px" }}>
                                                    <svg onClick={() => {
                                                        // setCartCount(cartCount + 1);
                                                        sessionStorage.setItem(data.name, parseInt(sessionStorage.getItem(data.name)) + 1)
                                                        // count[data.name] = count[data.name] + 1
                                                        addToCart(data.name, sessionStorage.getItem(data.name))
                                                    }}
                                                        width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                    {/* {setCartCount(count[data.name])} */}
                                                    <span>{sessionStorage.getItem(data.name)}</span>
                                                    <svg onClick={() => {
                                                        // setCartCount(cartCount + 1);
                                                        sessionStorage.setItem(data.name, parseInt(sessionStorage.getItem(data.name)) - 1)
                                                        // count[data.name] = count[data.name] + 1
                                                        addToCart(data.name, sessionStorage.getItem(data.name))
                                                    }}
                                                        width="2em"
                                                        height="2em"
                                                        viewBox="0 0 16 16"
                                                        class="bi bi-dash"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                    </svg>
                                                </div> : <div style={{ border: "2px #191919 solid", borderRadius: "10px", pointerEvents: "none", opacity: "0.5" }}>
                                                        <svg onClick={() => { setCartCount(cartCount + 1) }} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                        <span>{cartCount}</span>
                                                        <svg onClick={() => { setCartCount(cartCount - 1) }} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </div>}
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>
                </div>
                <div className={`${Style.vegCont}`} onLoad={useEffect(() => {
                    const fetchFrtData = async () => {
                        const imgData = await dataBase.collection('Vegis').where("status", "==", true).get()
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
                        <thead className={`w-100`}>
                            <tr className={`${Style.vegProduct} bg-warning w-100`}>
                                <td width="8%">No.</td>
                                <td width="25%">Photo</td>
                                <td width="25%">Name</td>
                                <td width="8%">Price</td>
                                <td width="9%"></td>
                            </tr>
                        </thead>
                        <tbody className="w-100">
                            {
                                imgVegis ? imgVegis.map(data => {
                                    productNames.push(data.name);
                                    sessionStorage.getItem(data.name) === 'NaN' ? sessionStorage.setItem(data.name, 0) : sessionStorage.getItem(data.name);
                                    return (
                                        <tr key={data.name} className={`${Style.vegProduct} w-100`}>
                                            <td width="8%">No.</td>
                                            <td width="25%"><img src={data.photo} height="100" width="100" alt={data.name} /></td>
                                            <td width="25%"><p>{data.name}</p></td>
                                            <td width="8%"><p>{data.price}</p></td>
                                            <td width="9%">
                                                {firebase.auth().currentUser ? <div style={{ border: "2px #191919 solid", borderRadius: "10px" }}>
                                                    <svg onClick={() => {
                                                        // setCartCount(cartCount + 1);
                                                        sessionStorage.setItem(data.name, parseInt(sessionStorage.getItem(data.name)) + 1)
                                                        // count[data.name] = count[data.name] + 1
                                                        addToCart(data.name, sessionStorage.getItem(data.name))
                                                    }}
                                                        width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                    {/* {setCartCount(count[data.name])} */}
                                                    <span>{sessionStorage.getItem(data.name)}</span>
                                                    <svg onClick={() => {
                                                        // setCartCount(cartCount + 1);
                                                        sessionStorage.setItem(data.name, parseInt(sessionStorage.getItem(data.name)) - 1)
                                                        // count[data.name] = count[data.name] + 1
                                                        addToCart(data.name, sessionStorage.getItem(data.name))
                                                    }}
                                                        width="2em"
                                                        height="2em"
                                                        viewBox="0 0 16 16"
                                                        class="bi bi-dash"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                    </svg>
                                                </div> : <div style={{ border: "2px #191919 solid", borderRadius: "10px", pointerEvents: "none", opacity: "0.5" }}>
                                                        <svg onClick={() => { setCartCount(cartCount + 1) }} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                        <span>{cartCount}</span>
                                                        <svg onClick={() => { setCartCount(cartCount - 1) }} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </div>}
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div style={{ marginTop: "6rem" }}>
                <Footer />
            </div> */}
        </React.Fragment>
    );
}
