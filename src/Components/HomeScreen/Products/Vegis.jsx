import React, { Component, Fragment } from 'react';
import Styles from './Vegis.module.scss';

import drumstickmoringa from '../../../Assets/images/Prouduct/drumstickmoringa.webp'
import tomato from '../../../Assets/images/Prouduct/tomato.webp'
import potato from '../../../Assets/images/Prouduct/potato.webp'
import onion from '../../../Assets/images/Prouduct/onion.webp'
import cucumber from '../../../Assets/images/Prouduct/cucumber.webp'

class Vegis extends Component {

    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <Fragment>
                <div className={`${Styles.vegisContainer} container-fluid`}>
                    <div className={`${Styles.row1} row`}>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}>
                                <img src={drumstickmoringa} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}>
                                <img src={onion} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}>
                                <img src={cucumber} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.row2} row`}>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}>
                                <img src={potato} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.items}`}>
                                <img src={tomato} alt="" />
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${Styles.itemsAdd}`}>
                                <div className={`${Styles.itm}`}>
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className={`mt-2`}>ADD PRODUCT!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
          </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}




export default Vegis;