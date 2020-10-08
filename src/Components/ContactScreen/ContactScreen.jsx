import React, { Component, useEffect, useState } from 'react';
import { dataBase } from '../../FireBaseControler/firebaseConfig';
import Footer from '../Footer/Footer';

import Style from './Contact.module.scss'

import firebase from 'firebase';

import { Modal, Button } from 'react-bootstrap';

const sendmail = require('sendmail')();



export default function ContactScreen() {

    const [fbData, setFbData] = useState([]);
    const [fbReplyData, setFbReplyData] = useState([]);
    const [visibleFeedBack, setVisibleFeedBack] = useState(false);
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

    const handleClose = () => setVisibleFeedBack(false)
    const handleFeedBackSubmit = async (eve) => {
        eve.preventDefault();
        const { txtmsg } = eve.target.elements;
        const dbConnection = dataBase.collection("FeedBack").where("email", "==", sessionStorage.getItem("fbEmail")).get();
        (await dbConnection).docs.map(data => {
            dataBase.collection("FeedBack").doc(data.id).update({ reply: txtmsg.value })
        })
        setVisibleFeedBack(false);
    }

    const handleFbDelete = async () => {
        const dbConnection = dataBase.collection("FeedBack").where("email", "==", sessionStorage.getItem("fbEmail")).get();
        (await dbConnection).docs.map(data => {
            dataBase.collection("FeedBack").doc(data.id).delete();
        })
    }

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
                        </div>
                        <button
                            type="submit"
                            className={`${Style.submitBtn} btn btn-outline-success`}
                        >
                            Send
                </button>
                    </form>
                </div>
                {firebase.auth().currentUser ? <>
                    <div className={`${Style.replyContTable}`}>
                        <table className={`w-100 table table-hover `}>
                            <thead><tr className={`w-100  ${Style.tblHead}`}>
                                <td style={{ width: "10%" }}>No.</td>
                                <td style={{ width: "20%" }}>E-mail Id.</td>
                                <td style={{ width: "35%" }}>Message</td>
                                <td style={{ width: "35%" }}>Reply</td>
                            </tr></thead>
                            <tbody>
                                {
                                    fbData ? fbData.map(data => {
                                        return (
                                            <tr className={`w-100`}>
                                                <td style={{ width: "10%" }}>{++count}</td>
                                                <td style={{ width: "20%" }}>{data.email}</td>
                                                <td style={{ width: "35%" }}>{data.message}</td>
                                                <td style={{ width: "35%" }}>{data.reply}</td>
                                            </tr>
                                        )
                                    }) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </> : null}
            </> : <>
                    <div className={`${Style.adminContTable}`}>
                        <table className={`w-100 table table-hover `}>
                            <tr className={`w-100  ${Style.tblHead}`}>
                                <td style={{ width: "10%" }}>No.</td>
                                <td style={{ width: "30%" }}>E-mail Id.</td>
                                <td style={{ width: "50%" }}>Message</td>
                                <td style={{ width: "10%" }}></td>
                            </tr>
                            <tbody>
                                {
                                    fbData ? fbData.map(data => {
                                        count += 1;
                                        return (
                                            <tr className={`w-100`}>
                                                <td style={{ width: "10%" }}>{count}</td>
                                                <td style={{ width: "30%" }}>{data.email}</td>
                                                <td style={{ width: "50%" }}>{data.message}</td>
                                                <td style={{ width: "10%" }}>
                                                    <div className={`${Style.feedBackBtn}`}>
                                                        <svg
                                                            onClick={() => {
                                                                setVisibleFeedBack(true)
                                                                sessionStorage.setItem("fbEmail", data.email)
                                                            }}
                                                            width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-reply-all-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L8.079 4.1A.716.716 0 0 0 7 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
                                                            <path fillRule="evenodd" d="M10.868 4.293a.5.5 0 0 1 .7-.106l3.993 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a.5.5 0 0 1-.593-.805l4.012-2.954a.493.493 0 0 1 .042-.028.147.147 0 0 0 0-.252.496.496 0 0 1-.042-.028l-4.012-2.954a.5.5 0 0 1-.106-.699z" />
                                                        </svg>
                                                        <svg
                                                            onClick={() => { handleFbDelete() }}
                                                            width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }) : null
                                }
                            </tbody>
                        </table>
                        <Modal
                            show={visibleFeedBack}
                            // show = {true}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Body className={`w-100 p-0 ${Style.modalBody}`}>
                                <div className={`w-100 ${Style.modalForm}`}>
                                    <form onSubmit={handleFeedBackSubmit} className={`${Style.frmContent} w-100`}>
                                        <div className="form-group mb-2 w-100  d-flex justify-content-center ">
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
                                        </div>
                                        <button
                                            type="submit"
                                            className={`${Style.handleFeedBackSubmitBtn} btn btn-dark mt-5`}
                                        >
                                            Submit
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
                    </div>
                </>}
            <Footer />
        </React.Fragment>
    );
}