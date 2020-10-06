import React, { Component, useEffect, useState } from 'react';
import { dataBase } from '../../FireBaseControler/firebaseConfig';
import Footer from '../Footer/Footer';

import Style from './Contact.module.scss'

const sendmail = require('sendmail')();



export default function ContactScreen() {

    const [fbData, setFbData] = useState([]);
    var count = 0;


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const { email, txtmsg } = event.target.elements;

        const chatController = await dataBase.collection("FeedBack").add({
            email: email.value,
            message: txtmsg.value,
        })

        // sendmail({
        //     from: email.value,
        //     to: 'uvvirani2622@gmail.com',
        //     subject: 'test sendmail',
        //     html: 'Mail of test sendmail ' + txtmsg.value,
        // }, function (err, reply) {
        //     console.log(err && err.stack);
        //     console.dir(reply);
        // });

    }

    useEffect(() => {
        const fetchFrtData = async () => {
            const fbDataCon = await dataBase.collection('FeedBack').get()
            setFbData(
                fbDataCon.docs.map(doc => {
                    return doc.data()
                })
            )
        }
        fetchFrtData()
    }, [])

    return (
        <React.Fragment>
            {!(sessionStorage.getItem("admin") === 'true') ? <>

                <div className={`${Style.contactData}`}>
                    <form onSubmit={handleFormSubmit} className={`${Style.frmContent}`}>
                        <div className="form-group w-100 d-flex justify-content-center mb-3">
                            <input
                                id="inputEmail"
                                type="email"
                                name="email"
                                placeholder="Your E-mail"
                                required=""
                                autoFocus=""
                                autoComplete="off"
                                className={`${Style.formGroupControl} form-control`}
                            />
                        </div>
                        <div className="form-group mb-3 w-100  d-flex justify-content-center ">
                            <textarea
                                id="txtmsg"
                                name="txtmsg"
                                rows="4"
                                placeholder="Write your Message ..."
                                autoComplete="off"
                                required=""
                                className={`${Style.formGroupControlArea} form-control`}
                            >

                            </textarea>
                            {/* <input
                        id="inputPassword"
                        type="text"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        required=""
                        className={`${Style.formGroupControl} form-control`}
                    /> */}
                        </div>
                        <button
                            type="submit"
                            className={`${Style.submitBtn} btn btn-outline-success`}
                        >
                            Send
                </button>
                    </form>
                </div>

            </> : <>
                    <div className={`${Style.adminContTable}`}>
                        <table className={`w-100 table table-hover `}>
                            <tr className={`w-100  ${Style.tblHead}`}>
                                <td style={{ width: "10%" }}>No.</td>
                                <td style={{ width: "40%" }}>E-mail Id.</td>
                                <td style={{ width: "50%" }}>Message</td>
                            </tr>
                            <tbody>
                                {
                                    fbData ? fbData.map(data => {
                                        count += 1;
                                        return (
                                            <tr className={`w-100`}>
                                                <td style={{ width: "10%" }}>{count}</td>
                                                <td style={{ width: "40%" }}>{data.email}</td>
                                                <td style={{ width: "50%" }}>{data.message}</td>
                                            </tr>
                                        )
                                    }) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </>}
                <Footer />
        </React.Fragment>
    );
}