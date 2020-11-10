import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dataBase, db } from '../../FireBaseControler/firebaseConfig';
import Style from './Checkout.module.scss'




class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartdata: [],
            cartCost: 0,
        }
    }

    componentDidMount() {
        const cartRef = db.ref(`Cart/${sessionStorage.getItem(`userId`)}`);
        cartRef.on('value', (snap) => {
            let word = snap.val();
            let newState = [];
            for (let data in word) {
                newState.push({
                    name: word[data].name,
                    price: word[data].price,
                    url: word[data].url,
                    count: word[data].count,
                })
            }
            this.setState({ cartdata: newState });
        })
    }

    render() {
        return (
            <div className={`${Style.container}`}>
                <div className={`${Style.contBg}`}>
                    <div to="checkout" className={`${Style.cartContHeader}`}>
                        <span>Thanks For Shoping  :)</span>
                    </div>
                    <div className={`${Style.cartContainer}`}>
                        <div className={`${Style.cartCont}`}>
                            {
                                this.state.cartdata.map(data => {
                                    const cost = parseFloat(data.count) * parseFloat(data.price);
                                    // console.log(data.name ,"-> ",cost);
                                    return (
                                        <div className={`${Style.cartContInner}`}>
                                            <div data-letter={cost} onLoad={() => {
                                                this.setState((prevState, { cartCost }) => ({
                                                    cartCost: prevState.cartCost + cost
                                                }));
                                            }}>
                                                {/* <svg width="2rem" height="2rem" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg> */}
                                                <img src={data.url} height="80px" width="80px" alt="" />
                                            </div>
                                            {/* <img src="" height="2rem" width="2rem" alt=""/> */}
                                            <div width="70%" className={`${Style.name}`}>
                                                <div style={{ fontSize: "24px", textTransform: 'capitalize' }}>Name : {data.name}</div>
                                                <div>Items : {data.count}</div>
                                            </div>
                                            <h5 width="15%">($){data.price}</h5>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={`${Style.cartUserData}`}>
                            <div className={`${Style.userProfile}`}>
                                <svg width="6em" height="6em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="#656565" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg>
                                <div></div>
                            </div>
                            <div className={`${Style.userData}`}>
                                <div>
                                    Name : <input type="text" value={sessionStorage.getItem("name")}/>
                                </div>
                                <div>
                                    E-Mail : <input type="email" value={sessionStorage.getItem("email")}/>
                                </div>
                                <div>
                                    Mobile No. : <input type="text" value=""/>
                                </div>
                                <div>
                                    Address : <textarea name="add" id="add" cols="30" rows="2"></textarea>
                                </div>
                                <div>
                                    Payment Method :
                                </div>
                            </div>
                        </div>
                    </div>
                    <div to="checkout" className={`${Style.cartContFooter}`}>
                        <span>Checkout -${this.state.cartCost}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;