import React, { Component } from 'react';

import Style from './Contact.module.scss'

const sendmail = require('sendmail')();



export default function ContactScreen() {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { email, txtmsg } = event.target.elements;
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

    // useEffect(() => {
    //     const fetchFrtData = async () => {
    //         const imgFruitData = await dataBase.collection('Fruits').get()
    //         setId(imgFruitData.docs.map(doc => {
    //             return { name: doc.data().name, id: doc.id }
    //         }));
    //         setImgFruit(imgFruitData.docs.map(doc => {
    //             return doc.data()
    //         }))
    //     }
    //     fetchFrtData()
    // }, [])

    return (
        <React.Fragment>
            <div className={`${Style.contactData}`}>
                <form onSubmit={handleFormSubmit} className={`${Style.frmContent}`}>
                    <div className="form-group w-100 d-flex justify-content-center mb-3">
                        <input
                            id="inputEmail"
                            type="email"
                            name="email"
                            placeholder="E-mail"
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
            {!sessionStorage.getItem("admin") ?  null : <>
            <div className="display-1">
                {sessionStorage.getItem("name")}
            </div>
            </>}
        </React.Fragment>
    );
}