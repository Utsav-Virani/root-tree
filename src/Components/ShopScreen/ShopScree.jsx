import React, { Component, useEffect, useState } from 'react';

import Style from './Shop.module.scss';
import { dataBase } from '../../FireBaseControler/firebaseConfig';


export default function ShopScree() {

    const [img, setImg] = useState(null);

    useEffect(() => {
        const fetchImgData = async () => {
            const imgData = await dataBase.collection('Fruits').get()
            setImg(imgData.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchImgData()
    }, [])

    return (
        <React.Fragment>
            <div className={`${Style.shopCont}`}>
                <div className={`${Style.fruitCont}`}>
                    <div className={`${Style.FruitHead}`}>Fruits</div>
                    <div className={`${Style.froutImgCont} row w-100`}>
                        {
                            img ? img.map(data => {
                                return (
                                    <div className={`${Style.frtProduct} col-4`}>
                                        <img src={data.photo} height="150" width="150" alt={data.name} />
                                        <div><p>{data.name}</p></div>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}