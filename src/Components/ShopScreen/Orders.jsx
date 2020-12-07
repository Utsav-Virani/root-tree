import { reaction, values } from 'mobx';
import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './Orders.module.scss'
import { dataBase, db } from '../../FireBaseControler/firebaseConfig';


class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartdata: [],
            cartCost: 0,
        }
    }

    componentDidMount() {
        const fetchFrtData = async () => {
            const cartRef = await dataBase.collection('Order').get();
            cartRef.forEach(doc => {
                let newState = [];
                newState.push({
                    invoId: doc.id,
                    name: doc.data().name,
                    mop: doc.data().paymode,
                    totalPay: doc.data().totelPay,
                })
                this.setState({ cartdata: newState });
            });
            // const cartRef = db.ref(`Order`);
            // cartRef.on('value', (snap) => {
            //     let word = snap.val();
            //     let newState = [];
            //     console.log(word);
            //     for (let data in word) {
            //         // console.log(data);
            //         // newState.push({
            //         //     name: word[data].name,
            //         //     price: word[data].price,
            //         //     url: word[data].url,
            //         //     count: word[data].count,
            //         // })
            //     }
            //     this.setState({ cartdata: newState });
            // })
        }
        fetchFrtData();
    }

    render() {
        return (
            <React.Fragment>
                <div className={`${Style.contBg}`}>
                    <div className={`${Style.orderCont}`}>
                        {
                            this.state.cartdata.map(data => {
                                return (
                                    <Link to={`shop/orderList/${data.invoId}`} className={`${Style.cartContInner}`} >
                                        <div>
                                            <div>
                                                <label htmlFor="">Invoice #:</label>{data.invoId}
                                            </div>
                                            <div>
                                                <label htmlFor=""> Customer name :</label>{data.name}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <label htmlFor="">Payment Mode :</label>{data.mop}
                                            </div>
                                            <div>
                                                <label htmlFor="">Bill Amount :</label>${data.totalPay}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Orders;